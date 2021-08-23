import React, { useState } from "react";
import styled from "styled-components";
import { Avatar, Button, IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import ChatIcon from "@material-ui/icons/Chat";
import SearchIcon from "@material-ui/icons/search";
import * as EmailValidator from "email-validator";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Chat from "../componoents/Chat";

function Sidebar() {
  // get the current user mapping
  const [user] = useAuthState(auth);

  //goes to our file "chats" in the database and query the users array check where the user email who logged in is.
  const userChatRef = db
    .collection("chats")
    .where("users", "array-contains", user.email);

  //real time listener for the chats
  const [chatSnapshot] = useCollection(userChatRef);

  const createChat = () => {
    const input = prompt(
      `Please enter the Email address of the user you want to chat with`
    );

    //if there is no input then stop the code below from execution
    if (!input) return null;

    //check if the email is validated or in a correct form.
    //while creating a chat make sure, the email is valid and input email is not equal to the current login user.
    //check if the chat is not existed
    if (
      EmailValidator.validate(input) &&
      !chatAlreadyExists(input) &&
      input !== user.email
    ) {
      // we need to add the caht into the database "chat" collection.
      db.collection("chats").add({
        users: [user.email, input],
      });
    }
  };

  const chatAlreadyExists = (recipienEmail) => {
    //chatSnapshot could not be defined as it is asynchronous.
    //go to the snapshots which means the chats that exists and then filter and find inside the user array if the user is find with the recipient email the one we typed in to input.
    // !! convert value to boolean, means if the value was returned this will be true otherwise false
    !!chatSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipienEmail)?.length > 0
    );
  };
  return (
    <Container>
      <Header>
        {/*logout if it click*/}
        <UserAvatar onClick={() => auth.signOut()} />

        <IconContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </IconContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in chats" />
      </Search>

      <SidebarButton onClick={createChat}>Start a New Chat</SidebarButton>

      {/* List of Chats  */}
      {chatSnapshot?.docs.map((chat) => (
        <Chat key={chat.id} id={chat.id} user={chat.data().users} />
      ))}
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;
const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1; //will be on the top of each everyone if we have overflow
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const IconContainer = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;
const SidebarButton = styled(Button)`
  width: 100%;

  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
