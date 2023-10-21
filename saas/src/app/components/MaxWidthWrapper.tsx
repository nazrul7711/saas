import "@/styles/maxwidthwrapper.scss";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={`maxwidthwrapper ${className}`}>{children}</div>;
};

export default MaxWidthWrapper;
