import { useState } from "react";
import { BsSend, BsMic } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-1 py-1" onSubmit={handleSubmit}>
      <div className="relative w-full flex items-center">
        <input
          type="text"
          className="flex-1 border border-gray-800 rounded-lg px-4 py-2  text-white  bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-2 inset-y-0 flex items-center justify-center p-2 rounded-full hover:bg-gray-600 transition-colors duration-200"
          disabled={loading}
        >
          {loading ? (
            <div className="loader ease-linear rounded-full border-4 border-gray-300 border-t-transparent h-6 w-6 animate-spin"></div>
          ) : (
            <BsSend className="text-xl text-white" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
