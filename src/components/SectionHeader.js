import '../css/SectionHeader.css'

function SectionHeader(props) {
    return (
        <div className="SectionHeader">
            <h1>{props.title}</h1>
        </div>
    )
}

export default SectionHeader