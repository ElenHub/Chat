import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-gray-600 px-4 py-2 ">
            <span style={{ color: "var(--text-color)" }} className="font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div
      style={{
        backgroundColor: "var(--hover-bg)",
      }}
      className="flex items-center justify-center w-full h-full"
    >
      <div className="px-4 text-center sm:text-lg md:text-xl  font-semibold flex flex-col items-center gap-2">
        <p>Hello, {authUser.fullName}! 😊</p>
        <p>Tap on a chat to begin the conversation</p>
      </div>
    </div>
  );
};
