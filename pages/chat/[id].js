import styled from "styled-components";
import Head from "next/head";
import Sidebar from "../../componoents/Sidebar";
import ChatScreen from "../../componoents/ChatScreen";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import getRecipientEmail from "../../utils/getRecipientEmail";

const chat = ({ chat, messages }) => {
  const [user] = useAuthState(auth);
  return (
    <Container>
      <Head>
        <title>Chat with {getRecipientEmail(chat.users, user)}</title>
      </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen chat={chat} messages={messages} />
      </ChatContainer>
    </Container>
  );
};

export default chat;

//make it a server side rendering page
//context allows you to access the part of the url in the server
//we are doing two thing here: 1- prep the chat and prep the messages
export async function getServerSideProps(context) {
  //first we make a reference, go to the document fo the chat and
  const ref = db.collection("chats").doc(context.query.id);

  //Prep the message on the server side
  const messagesRes = await ref
    .collection("messages")
    .orderBy("timestamp", "asc")
    .get(); // we dont use snapshot beuause in the server side we cannot snapshot.

  const messages = messagesRes.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .map((messages) => ({
      ...messages,
      timestamp: messages.timestamp.toDate().getTime(), // when we stringify a timestamp from API to a client we lose the timestamp data type
    }));

  //Prep the Chat:
  const chatRes = await ref.get();
  const chat = {
    id: chatRes.id,
    ...chatRes.data(),
  };

  //check the serverside rendering even before the pages load.
  console.log(chat, messages);

  //return props as a strigify object. we cannot send a complicated data over the internet
  return {
    props: { messages: JSON.stringify(messages), chat: chat },
  };
}
const Container = styled.div`
  display: flex;
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;

  //to hide scroll bar if it is existed
  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; //IE and Edge
  scrollbar-width: none; //firefox
`;
