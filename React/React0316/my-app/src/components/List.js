import React from "react";

class List extends React.Component {
  toOriginal = () => {
    this.props.setList(this.props.originalList);
  };

  // changeHandler = (e) => {
  //   this.toOriginal();
  //   const arr = this.props.list.filter((word) => word.includes(e.target.value));
  //   this.props.setList(arr);

  //   // console.log(e.target.value)
  //   // return arr;
  // };

  changeHandler = (e) => {
    this.toOriginal().then((response) =>
      this.props.setList(
        this.props.list.filter((word) => word.includes(e.target.value))
      )
    );

    // console.log(e.target.value)
    // return arr;
  };

  render() {
    return (
      <div onChange={this.changeHandler}>
        <div>{this.props.list}</div>
        <br />
        <input name="input1" type="text" />
      </div>
    );
  }
}

export default List;
