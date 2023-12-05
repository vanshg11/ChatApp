import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    // const chatProps = useMultiChatLogic
    // ('84345cf1-c68b-4d92-95f0-3be4d0eb5198', 
    // props.user.username,
    // props.user.secret);
    return (<div style={{height:'100vh'}}>
        <PrettyChatWindow
        projectId=''
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}} /
        >
        
    </div>);
  };
  export default ChatsPage;