import "../styles/Link.css";
export default function Link(props) {
  return (
    <a href={props.link} target={props.external ? "_new" : "_self"}>
      {props.text}
    </a>
  );
}
