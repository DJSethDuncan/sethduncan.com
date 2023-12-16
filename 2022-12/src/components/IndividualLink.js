import "../styles/IndividualLink.css";
export default function IndividualLink(props) {
  return (
    <a href={props.link} target={props.external ? "_new" : "_self"}>
      {props.text}
    </a>
  );
}
