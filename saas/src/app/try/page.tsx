"use client";
import React, { useEffect, useRef } from "react";
import "@/styles/try.scss";

const page = () => {
  useEffect(() => {
    let parentElement = document.querySelector("#alist");
    let child = document.querySelector(".two");
    console.log(document.documentElement.contains(document.body));

    let scrollOne = document.querySelector(".scrollOne");
    scrollOne?.scrollIntoView(false);
    parentElement.innerHTML=`<li>jaadu</li>`;
  }, []);
  let bref = useRef(null);
  let inputRef = useRef(null);

  return (
    <div className="try">
      <button
        onClick={() => (bref.current! as HTMLElement).classList.add("one")}
      >
        add css
      </button>
      <button onClick={() => bref.current?.classList.remove("one")}>
        remove css
      </button>
      <input type="text" placeholder="name" ref={inputRef} className="input" />
      <div className="two" data-appid="alpha">
        hello
      </div>
      <ul id="alist" className="list">
        <li>one</li>

        <li>three</li>
        <li>four</li>
      </ul>
      <div className="scroll"></div>
      <div className="scrollOne"></div>
      <div className="scrolltwo"></div>
    </div>
  );
};

export default page;
