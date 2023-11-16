
import "@/styles/dashboard.scss";
import UploadButton from "../components/UploadButton";
import { BiGhost } from "react-icons/bi";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { CiFlag1 } from "react-icons/ci";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";

const Dashboard = () => {
  let data = [];
  

  return (
    <div className={`dashboard`}>
      <div className="top">
        <h1>My Files</h1>
        <UploadButton />
      </div>
      {data && data.length === 0 ? (
        <div className="ghost">
          <BiGhost size={30} />

          <h2>Pretty empty around here</h2>
          <p>Lets upload your first PDF</p>
        </div>
      ) : (
        <ul className="list">
          {data.map((item) => (
            <li>
              <Link href={`/dashboard/${item.id}`}>
                <div className="item">
                  <div className="round">
                    <div className="circle"></div>
                    <div>{item.title}</div>
                  </div>
                  <div className="detail">
                    <div className="plus">
                      <AiOutlinePlus />
                      <div>{item.date}</div>
                    </div>
                    <div className="flag">
                      <CiFlag1 />
                      <div>{item.mocked}</div>
                    </div>
                    <div className="delete">
                      <AiOutlineDelete />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        // <div>
        //   <SkeletonTheme baseColor="#efefef" highlightColor="#444">
        //     <Skeleton count={3} height={100} className="skeleton" />
        //   </SkeletonTheme>
        // </div>
      )}
    </div>
  );
};

export default Dashboard;
