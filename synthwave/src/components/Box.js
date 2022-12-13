import '../css/Box.css'

function Box(props) {
    return (
        <div className='Box'>
            {props.children}
        </div>
    )
}

export default Box;