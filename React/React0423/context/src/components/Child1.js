import React from "react";
import { useContext } from "react";
import {HelloWorldContext} from "../App"
import Child2 from "./Child2";

export default function Child1() {

  return <div><Child2/></div>;
}
