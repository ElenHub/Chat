import useGetConversations from "../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="flex-1 p-4 rounded-lg shadow-inner overflow-y-auto">
      {/* Список разговоров */}
      {conversations.length > 0 ? (
        conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={idx === conversations.length - 1}
          />
        ))
      ) : (
        // Если разговоров нет, показываем сообщение
        <p className="text-center text-gray-500 mt-4">Нет сообщений</p>
      )}

      {/* Индикатор загрузки */}
      {loading && (
        <div className="flex justify-center mt-4">
          <div className="loader ease-linear rounded-full border-4 border-gray-300 border-t-transparent h-6 w-6 animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default Conversations;
