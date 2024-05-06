"use client";
import { createContext, useContext, useState, useEffect } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { NEW_DOCUMENT } from "~/utils/constants";
import type { MDFile } from "../../../types";

const initialState: State = {
  activeFile: NEW_DOCUMENT,
  savedFiles: [],
  darkMode: false,
  isSidebarOpen: false,
  setActiveFile: (): MDFile => NEW_DOCUMENT,
  setSavedFiles: (): MDFile[] => [],
  setDarkMode: (): boolean => false,
  setIsSidebarOpen: (): boolean => false,
};

export interface State {
  activeFile: MDFile | undefined;
  setActiveFile: Dispatch<SetStateAction<MDFile | undefined>>;
  savedFiles: MDFile[];
  setSavedFiles: Dispatch<SetStateAction<MDFile[]>>;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<State>(initialState);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeFile, setActiveFile] = useState<MDFile | undefined>(
    NEW_DOCUMENT,
  );
  const [savedFiles, setSavedFiles] = useState<MDFile[]>([]);
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
        setSavedFiles,
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
