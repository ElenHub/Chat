import { useEffect, useState } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import { BsPersonCircle } from "react-icons/bs";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex items-center gap-2 p-1 rounded-lg cursor-pointer transition-colors mb-1 duration-200 ${
        isSelected ? "bg-gray-500" : "bg-gray-400"
      } ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{
        transition: "opacity 0.5s ease",
      }}
      onClick={() => setSelectedConversation(conversation)}
    >
      {/* Аватар с онлайн-индикатор */}
      <div className="relative w-12 h-12 flex-shrink-0">
        <div className="w-full h-full rounded-full flex items-center justify-center text-2xl">
          <BsPersonCircle />
        </div>
        {isOnline && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        )}
      </div>

      {/* Информация о разговоре */}
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-center">
          <p className="font-semibold">{conversation.fullName}</p>
        </div>
      </div>
    </div>
  );
};
export default Conversation;
