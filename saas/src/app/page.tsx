import Image from "next/image";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Test from "./components/Test";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import "@/styles/page.scss";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="quillHeading">
          <p className="">Quill is now public</p>
          <h1>
            Chat with your <span style={{ color: "skyblue" }}>documents</span>{" "}
            in seconds
          </h1>
          <p>
            Quill allows you to have conversations with any PDF document.Simply
            upload documents and start asking questions right away.
          </p>
          <Link href="/dashboard" target="_blank">
            Get Started
            <div className="rightarrow">
              <AiOutlineArrowRight />
            </div>
          </Link>
        </div>
      </MaxWidthWrapper>
      <div className="images">
        <div className="imgContainer">
          <Image
            src={"/dashboard-preview.jpg"}
            alt="projectImage"
            fill={true}
            quality={100}
          />
        </div>
      </div>
    </>
  );
}
