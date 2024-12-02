import React, { useState } from "react";
import { FaClosedCaptioning, FaRocketchat, FaTimes } from "react-icons/fa";
import { FloatingButtonstyles } from "./FloatingButton.styles";
import Chat from "../Chat";

export default function FloatingButton() {
  const [openChat, setOpenChat] = useState<boolean>(false);
  return (
    <FloatingButtonstyles>
      <div className="icon" onClick={() => setOpenChat(!openChat)}>
        {openChat ? (
          <FaTimes size={30} color="white" />
        ) : (
          <FaRocketchat size={30} color="white" />
        )}
      </div>
      {openChat ? <Chat /> : null}
    </FloatingButtonstyles>
  );
}
