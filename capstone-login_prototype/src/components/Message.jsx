import PropTypes from 'prop-types'
import "../index.css"
const Message = ({ text, sender }) => {
    return(
        <div className={`message ${sender === 'me' ? 'right' : 'left'}`}>
                <p>{text}</p>
        </div>
    );
}

//props validation 추가
Message.prototype = {
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
}
export default Message;