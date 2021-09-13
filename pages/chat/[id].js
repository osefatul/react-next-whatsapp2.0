import styled from "styled-components";
import Head from "next/head";
import Sidebar from "../../componoents/Sidebar";
import ChatScreen from "../../componoents/ChatScreen";

const chat = () => {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen />
      </ChatContainer>
    </Container>
  );
};

export default chat;
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
