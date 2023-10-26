"use client";
import React, { ReactNode, useState } from "react";
import { createContext } from "react";

export type SaasContextType = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SaasContext = createContext<SaasContextType | null>(null);
const ContextProvider = ({ children }: { children: ReactNode }) => {
  let [open, setOpen] = useState(false);

  const initialValue = {
    showModal: open,
    setShowModal: setOpen,
  };
  return (
    <SaasContext.Provider value={initialValue}>{children}</SaasContext.Provider>
  );
};

export default ContextProvider;
