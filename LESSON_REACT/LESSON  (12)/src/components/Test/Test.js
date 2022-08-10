import React, { useEffect, useState, Fragment } from "react";
import Drow from "./Draw/Drow";

const Test = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch(
        "https://football98.p.rapidapi.com/premierleague/results",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "football98.p.rapidapi.com",
            "x-rapidapi-key":
              "9b58c7e2eamsh72e0a4387e713efp11647djsnb498cb4293fd",
          },
        }
      );
      if (!res.ok) {
        throw new Error("Error!" + res.status);
      }
      const data = await res.json();
      setData((prevState) => {
        return (prevState = data);
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <Fragment>
      <Drow data={datas} />
    </Fragment>
  );
};

export default Test;
