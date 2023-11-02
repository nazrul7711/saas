"use client";
import React, { useEffect, useRef, useState } from "react";
import "@/styles/try.scss";

const page = () => {
  let [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setCoordinates({ x: e.clientX, y: e.clientY });
    });
  }, []);
  let bref = useRef(null);
  let inputRef = useRef(null);
  let childRef = useRef(null);
  let scrollRef = useRef(null);
  let navRef = useRef(null);

  return (
    <div className="try">
      {/* <nav ref={navRef} style={{backgroundColor:"orange"}}>hello</nav> */}

      <div
        style={{
          height: "30px",
          width: "30px",
          backgroundColor: "red",
          borderRadius: "50%",
          position:"absolute",
          top:`${coordinates.y}px`,
          left:`${coordinates.x}px`
        }}
      ></div>
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
      <input className="click" value="this is wrong" />
      <div
        className="scroll"
        id="scroll"
        ref={scrollRef}
        onScroll={() => {
          if (scrollRef.current.scrollLeft > 100 && navRef.current) {
            navRef.current.style.backgroundColor = "skyblue";
            // console.log(navRef.current.style.backgroundColor)
          }
        }}
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo
          voluptas omnis ullam ipsum, ab nobis quaerat exercitationem animi
          saepe sit! In magni iste quaerat porro aspernatur, tempore optio
          consectetur velit error quisquam explicabo ad provident quo quia neque
          laborum vel commodi. Odit ipsum ea a soluta voluptates, corrupti
          deleniti, at commodi fugit repellat tenetur similique minus nesciunt
          beatae eum omnis delectus possimus necessitatibus, reiciendis maxime
          harum? Saepe unde ad qui sint eius quaerat autem, porro cupiditate
          laborum! Amet enim pariatur velit dolore quibusdam hic explicabo quam,
          assumenda saepe? Inventore vel est esse error consequuntur aut illo
          quo saepe delectus quas repellat itaque, officiis autem aliquam
          blanditiis, iste expedita non eveniet eum cum? Sed iste, incidunt
          totam dolorem adipisci deleniti itaque, reiciendis natus saepe alias
          optio dolores nihil distinctio mollitia omnis debitis, eos minima odio
          dicta ipsum atque voluptatem aliquam similique. Dolor, eum doloribus
          ea possimus culpa assumenda aliquid libero delectus magni! Assumenda
          veniam cum consequuntur quam quisquam ducimus enim eos deleniti!
          Debitis dolorum earum quos. Quae quam veritatis molestias rem aliquam
          provident tenetur quos, dolore eaque vitae quia quas nulla
          exercitationem soluta aut nihil quibusdam! Aperiam quisquam odit
          voluptas quam animi molestiae, porro velit quis ratione saepe nisi
          ducimus!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo
          voluptas omnis ullam ipsum, ab nobis quaerat exercitationem animi
          saepe sit! In magni iste quaerat porro aspernatur, tempore optio
          consectetur velit error quisquam explicabo ad provident quo quia neque
          laborum vel commodi. Odit ipsum ea a soluta voluptates, corrupti
          deleniti, at commodi fugit repellat tenetur similique minus nesciunt
          beatae eum omnis delectus possimus necessitatibus, reiciendis maxime
          harum? Saepe unde ad qui sint eius quaerat autem, porro cupiditate
          laborum! Amet enim pariatur velit dolore quibusdam hic explicabo quam,
          assumenda saepe? Inventore vel est esse error consequuntur aut illo
          quo saepe delectus quas repellat itaque, officiis autem aliquam
          blanditiis, iste expedita non eveniet eum cum? Sed iste, incidunt
          totam dolorem adipisci deleniti itaque, reiciendis natus saepe alias
          optio dolores nihil distinctio mollitia omnis debitis, eos minima odio
          dicta ipsum atque voluptatem aliquam similique. Dolor, eum doloribus
          ea possimus culpa assumenda aliquid libero delectus magni! Assumenda
          veniam cum consequuntur quam quisquam ducimus enim eos deleniti!
          Debitis dolorum earum quos. Quae quam veritatis molestias rem aliquam
          provident tenetur quos, dolore eaque vitae quia quas nulla
          exercitationem soluta aut nihil quibusdam! Aperiam quisquam odit
          voluptas quam animi molestiae, porro velit quis ratione saepe nisi
          ducimus!
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo
          voluptas omnis ullam ipsum, ab nobis quaerat exercitationem animi
          saepe sit! In magni iste quaerat porro aspernatur, tempore optio
          consectetur velit error quisquam explicabo ad provident quo quia neque
          laborum vel commodi. Odit ipsum ea a soluta voluptates, corrupti
          deleniti, at commodi fugit repellat tenetur similique minus nesciunt
          beatae eum omnis delectus possimus necessitatibus, reiciendis maxime
          harum? Saepe unde ad qui sint eius quaerat autem, porro cupiditate
          laborum! Amet enim pariatur velit dolore quibusdam hic explicabo quam,
          assumenda saepe? Inventore vel est esse error consequuntur aut illo
          quo saepe delectus quas repellat itaque, officiis autem aliquam
          blanditiis, iste expedita non eveniet eum cum? Sed iste, incidunt
          totam dolorem adipisci deleniti itaque, reiciendis natus saepe alias
          optio dolores nihil distinctio mollitia omnis debitis, eos minima odio
          dicta ipsum atque voluptatem aliquam similique. Dolor, eum doloribus
          ea possimus culpa assumenda aliquid libero delectus magni! Assumenda
          veniam cum consequuntur quam quisquam ducimus enim eos deleniti!
          Debitis dolorum earum quos. Quae quam veritatis molestias rem aliquam
          provident tenetur quos, dolore eaque vitae quia quas nulla
          exercitationem soluta aut nihil quibusdam! Aperiam quisquam odit
          voluptas quam animi molestiae, porro velit quis ratione saepe nisi
          ducimus!
        </div>
      </div>
      <div className="scrollOne"></div>
      <div className="scrolltwo"></div>
    </div>
  );
};

export default page;
