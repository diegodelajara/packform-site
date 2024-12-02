import React from "react";
import { Chatstyles } from "./Chat.style";
import { FaEdit } from "react-icons/fa";

export default function Chat() {
  return (
    <Chatstyles>
      <div className="header">
        <span>Your Chats</span>
        <FaEdit />
      </div>
    </Chatstyles>
  );
}
