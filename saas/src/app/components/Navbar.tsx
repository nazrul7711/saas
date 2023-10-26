import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import "@/styles/navbar.scss";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="navbar">
      <MaxWidthWrapper>
        <div className="nav">
          <div className="left">
            <Link href={"/"}>Quil</Link>
          </div>
          <div className="right">
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/pricing"}>Sign In</Link>
            <Link href={"/pricing"} >
              Get Started
              <div className="arrow">
                <AiOutlineArrowRight size={15}/>
              </div>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
