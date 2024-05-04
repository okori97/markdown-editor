"use client";
import { createContext, useContext, useState, useEffect } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

interface File {
  title: string;
  content: string;
  date?: string;
}

const initialState: State = {
  activeFile: { title: "", content: "" },
  savedFiles: [],
  darkMode: false,
  isSidebarOpen: false,
  setActiveFile: (): File => ({ title: "", content: "" }),
  setSavedFile: (): File[] => [],
  setDarkMode: (): boolean => false,
  setIsSidebarOpen: (): boolean => false,
};

export interface State {
  activeFile: File;
  setActiveFile: Dispatch<SetStateAction<File>>;
  savedFiles: File[];
  setSavedFile: Dispatch<SetStateAction<File[]>>;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<State>(initialState);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeFile, setActiveFile] = useState({ title: "", content: "" });
  const [savedFiles, setSavedFile] = useState<File[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "false";
    document.documentElement.classList.toggle("dark", isDark);
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", `${darkMode}`);
  }, [darkMode]);

  return (
    <AppContext.Provider
      value={{
        activeFile,
        setActiveFile,
        setSavedFile,
        savedFiles,
        darkMode,
        setDarkMode,
        isSidebarOpen,
        setIsSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
