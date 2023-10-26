import Image from "next/image";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Test from "./components/Test";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import "@/styles/page.scss";

export default function Home() {
  return (
    <div className="wrapper">
      <MaxWidthWrapper>
        <div className="quillHeading">
          <p className="quill">Quill is now public</p>
          <h1>
            Chat with your <br />
            <span>documents</span> in seconds
          </h1>
          <p>
            Quill allows you to have conversations with any PDF document. Simply
            upload documents and <br />
            start asking questions right away.
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

      <MaxWidthWrapper className="chatQuill">
        <h1>Start chatting in minutes</h1>
        <p>Chatting to your PDF files has never been easier than with Quill</p>
      </MaxWidthWrapper>
      <div className="listItems">
        <MaxWidthWrapper className="spans">
          <span>Step 1</span>
          <span>Sign up for an account</span>
          <span>
            Either start out with a free plan or choose a{" "}
            <Link href={"/pricing"}>pro plan</Link>
          </span>
        </MaxWidthWrapper>
        <MaxWidthWrapper className="spans">
          <span>Step 3</span>
          <span>Start asking questions</span>
          <span>
            It's that simple.Try out Quill today - it really takes less than a
            minute.
          </span>
        </MaxWidthWrapper>
        <MaxWidthWrapper className="spans">
          <span>Step 2</span>
          <span>Upload Your PDF file</span>
          <span>
            We'll are processing your file and making it ready to chat with
          </span>
        </MaxWidthWrapper>
      </div>
      <div className="image-upload">
        <div className="imgContainer">
          <Image
            src={"/file-upload-preview.jpg"}
            alt="projectImage"
            fill={true}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
//1.09