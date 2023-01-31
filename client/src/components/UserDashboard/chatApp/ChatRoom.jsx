import React from "react";
import ChatSidebar from "./ChatSidebar";
import Messenger from "./Messenger";

const ChatRoom = ({ section, setSection, previous }) => {
  return (
    <div>
      <div class="content fs-6 d-flex flex-column-fluid" id="kt_content">
        <div class="container-xxl">
          <div class="d-flex flex-column flex-lg-row">
            <ChatSidebar />
            <Messenger
              setSection={setSection}
              section={section}
              previous={previous}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
