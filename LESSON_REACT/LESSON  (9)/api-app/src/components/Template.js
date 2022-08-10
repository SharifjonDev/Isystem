import "./Template.css";
import FutureWork from "./FutureWork";
import Img1 from "../image/work1.png";
import Img2 from "../image/work2.png";
import Img3 from "../image/work3.png";
import React, { useState } from "react";

const futureWorks = [
  {
    img: Img1,
    action: "Designing Dashboards",
    date: "2020",
    type: "Dashboard",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    img: Img2,
    action: "Vibrant Portraits of 2020",
    date: "2018",
    type: "Illustration",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    img: Img3,
    action: "36 Days of Malayalam type",
    date: "2018",
    type: "Dashboard",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];
const Template = () => {
  const [works, setWorks] = useState(futureWorks);
  const fetchWork = () => {
    return works.map((item, index) => <FutureWork key={index} works={item} />);
  };
  return (
    <div className="future">
      <div className="row">
        <div className="col-xl-12">
          <div className="text">
            <h3>Featured works</h3>
          </div>
        </div>
        <div className="col-xl-12">{fetchWork()}</div>
      </div>
    </div>
  );
};

export default Template;
