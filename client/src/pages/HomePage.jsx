import MessageContainer from "../comonents/messages/MessageContainer";
import Sidebar from "../sidebar/Sidebar";
import LeftSidebar from "../sidebar/LeftSidebar";

const HomePage = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <LeftSidebar />
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default HomePage;
