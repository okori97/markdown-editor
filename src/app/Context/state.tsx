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
  isModalOpen: false,
  isFullScreen: false,
  setActiveFile: (): MDFile => NEW_DOCUMENT,
  setSavedFiles: (): MDFile[] => [],
  setDarkMode: (): boolean => false,
  setIsSidebarOpen: (): boolean => false,
  setIsModalOpen: (): boolean => false,
  setIsFullScreen: (): boolean => false,
};

export interface State {
  activeFile: MDFile;
  setActiveFile: Dispatch<SetStateAction<MDFile>>;
  savedFiles: MDFile[];
  setSavedFiles: Dispatch<SetStateAction<MDFile[]>>;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isFullScreen: boolean;
  setIsFullScreen: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<State>(initialState);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeFile, setActiveFile] = useState<MDFile>(NEW_DOCUMENT);
  const [savedFiles, setSavedFiles] = useState<MDFile[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
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
        isModalOpen,
        setIsModalOpen,
        isFullScreen,
        setIsFullScreen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
