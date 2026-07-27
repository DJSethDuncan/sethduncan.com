import "../styles/IndividualLink.css";

export default function IndividualLink(props) {
  return (
    <a
      href={props.link}
      // noopener/noreferrer prevents the new tab from accessing
      // window.opener and redirecting this tab (reverse tabnabbing).
      rel={props.external ? "external noopener noreferrer" : "external"}
      target={props.external ? "_new" : "_self"}
    >
      {props.text}
    </a>
  );
}
