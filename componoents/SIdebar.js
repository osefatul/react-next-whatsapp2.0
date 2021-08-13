import React from "react";
import styled from "styled-components";
import { Avatar, Button, IconButton } from "@material-ui/core";
import { Chat, MoreVert } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/search";
import * as EmailValidator from "email-validator";

function Sidebar() {
  const createChat = () => {
    const input = prompt(
      `Please enter the Email address of the user you want to chat with`
    );

    //if there is no input then stop the code below from execution
    if (!input) return null;

    //check if the email is validated or in a correct form,
    if (EmailValidator.validate(input)) {
      // we need to add the caht into the database "chat" collection.
    }
  };

  return (
    <Container>
      <Header>
        <UserAvatar />

        <IconContainer>
          <IconButton>
            <Chat />
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
