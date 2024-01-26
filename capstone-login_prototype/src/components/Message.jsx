const Message = ({ text, sender }) => {
    return(
        <div className=" `message ${sender === 'me' ? 'right' : 'left'}`">
                <p>{text}</p>
        </div>
    );
}
export default Message;