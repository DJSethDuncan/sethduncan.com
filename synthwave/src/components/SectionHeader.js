import '../css/SectionHeader.css'

function SectionHeader(props) {
    return (
        <div className='SectionHeader crt'>
            <h1 className='monoFont'>{props.title}</h1>
        </div>
    )
}

export default SectionHeader