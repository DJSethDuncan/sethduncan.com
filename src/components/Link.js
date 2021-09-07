function Link(props) {
    return (
        <div className="Link">
            <a href="{props.linkUrl}">{props.linkTitle}</a>
        </div>
    )
}

export default Link