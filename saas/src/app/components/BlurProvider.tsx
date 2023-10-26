"use client";

import { ReactNode, useContext } from "react";
import { SaasContext } from "../providers/ContextProvider";

const BlurProvider = ({ children }: { children: ReactNode }) => {
  let ctx = useContext(SaasContext);
  return <div className={ctx?.showModal ? "blur" : ""}>{children}</div>;
};

export default BlurProvider;
