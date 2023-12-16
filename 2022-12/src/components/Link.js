import { Link as ReactLink } from "react-router-dom";

import "../styles/Link.css";
export default function Link(props) {
  return <ReactLink to={props.link}>{props.text}</ReactLink>;
}
