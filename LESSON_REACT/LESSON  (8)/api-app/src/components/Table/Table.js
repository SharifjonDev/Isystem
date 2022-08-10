import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super();
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return <div></div>;
  }
}

export default Table;
