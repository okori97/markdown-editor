import Image from "next/image";
import { useAppContext } from "../Context/state";

export function Switch() {
  const { darkMode, setDarkMode } = useAppContext();

  const handleSwitch = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex items-center">
      <Image
        src="/icon-dark-mode.svg"
        alt="Dark mode"
        width={20}
        height={20}
        className={`h-5 w-5 ${darkMode ? "" : "brightness-50"}`}
      />
      <label className="relative mx-2 inline-block h-6 w-12">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={handleSwitch}
          className="sr-only"
        />
        <span className="block h-6 w-12 rounded-full bg-gray-600 shadow-inner"></span>
        <span
          className={`absolute right-[5px] top-[5px] h-[14px] w-[14px] cursor-pointer rounded-full bg-white transition-transform ${darkMode ? "translate-x-[-24px] transform" : ""}`}
        ></span>
      </label>
      <Image
        src="/icon-light-mode.svg"
        alt="Light mode"
        width={20}
        height={20}
        className={`h-5 w-5 ${!darkMode ? "" : "brightness-50"}`}
      />
    </div>
  );
}
