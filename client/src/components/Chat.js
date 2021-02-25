import React, {useState} from 'react'
import axios from 'axios'

const Chat = ({msg}) => {

    if(msg.mine){
        return(<div style={{width:'max-content', height:'max-content', backgroundColor: 'lightgreen', padding: '5px 8px', borderRadius:'16px 16px 0px 16px', color:'white',  margin: '10px 2px', marginLeft:'auto'}}>
            {msg.text}
        </div>)
    }
    else{
        return(<div style={{width:'max-content', height:'max-content', backgroundColor: 'lightblue', padding: '5px 8px', borderRadius:'16px 16px 16px 0', color:'white',  margin: '10px 2px'}}>
            {msg.text}
        </div>)
    }

}

export default Chat