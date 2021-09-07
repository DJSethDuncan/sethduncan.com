import '../css/LinkButton.css'

function Link(props) {
    return (
        <a href={props.linkUrl} target='new'>
            <button className="LinkButton">{props.linkTitle}</button>
        </a>
    )
}

export default Link