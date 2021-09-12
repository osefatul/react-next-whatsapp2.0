import { Avatar } from "@material-ui/core";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import getRecipientEmail from "../utils/getRecipientEmail";
import { auth } from "../firebase";

function Chat({ id, users }) {
  const [user] = useAuthState(auth);

  //it will pass an array of emails and array of those who logged in
  const recipientEmail = getRecipientEmail(users, user);

  return (
    <Container>
      <UserAvatar />
      <p>{recipientEmail}</p>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word; //if someone has long email this will break it into another line

  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
