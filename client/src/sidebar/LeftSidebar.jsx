import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { BsMoon, BsBrightnessHigh } from "react-icons/bs";
import LogoutButton from "./LogoutButton";

const LeftSidebar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div
      className="w-16 p-4 flex flex-col items-center gap-6"
      style={{
        backgroundColor: "var(--hover-bg)",
        color: "var(--text-color)",
      }}
    >
      {/* Переключатель темы */}
      <button
        className="p-2 rounded-full transition duration-200"
        style={{
          backgroundColor:
            activeButton === "theme" ? "var(--active-bg)" : "var(--hover-bg)",
        }}
        onClick={() => {
          toggleTheme();
          setActiveButton("theme");
        }}
        title="Toggle Dark Mode"
      >
        {isDarkMode ? (
          <BsMoon className="w-6 h-6" style={{ color: "var(--icon-color)" }} />
        ) : (
          <BsBrightnessHigh
            className="w-6 h-6"
            style={{ color: "var(--icon-color)" }}
          />
        )}
      </button>
      <div className="mt-auto">
        <LogoutButton />
      </div>
    </div>
  );
};

export default LeftSidebar;
