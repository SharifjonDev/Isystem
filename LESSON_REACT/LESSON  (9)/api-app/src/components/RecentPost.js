import "./RecentPost.css";
import Container from "../UI/Container";
import React, { useState } from "react";
import Posts from "./Posts";

const Projects = [
  {
    action: "Making a design system from scratch",
    date: "12 Feb 2020",
    type: "Design, Pattern",
    desciription:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    action: "Creating pixel perfect icons in Figma",
    date: "12 Feb 2020",
    type: "Figma, Icon Design",
    desciription:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];
const RecentPost = () => {
  const [typeOfWork, setTypeOfWork] = useState(Projects);
  const fetchData = () => {
    return typeOfWork.map((item, index) => (
      <Posts key={index} typeOfWork={item} />
    ));
  };

  return (
    <div className="content">
      <Container>
        <div className="row">
          <div className="col-xl-12">
            <h3>Recent posts</h3>
            <a href="#">View all</a>
          </div>
          <div className="col-xl-12">{fetchData()}</div>
        </div>
      </Container>
    </div>
  );
};

export default RecentPost;
