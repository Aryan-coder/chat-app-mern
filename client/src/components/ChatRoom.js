import React, {useState} from 'react'
import axios from 'axios'
import NavBar from './NavBar'
import Chat from './Chat'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import {Button} from 'react-bootstrap';

const ChatRoom = ({friend}) => {

    return(<div style={{height: '100vh', width: '70vh'}}>
        <NavBar user={{name: friend.first, image: friend.image}}/>

        <Chat msg={{text: 'Hey', mine: true}} />
        <Chat msg={{text: 'Hello', mine: false}} />
        <Chat msg={{text: 'how are you', mine: false}} />
        <Chat msg={{text: 'i am good', mine: true}} />

        <div style={{position: 'absolute', bottom: '20px', width: '70vh'}}>
            <Form style={{display: 'flex', flexDirection: 'row', width: '50%', marginLeft:'auto', marginRight:'auto'}} >
                <FormControl type="text" placeholder="Search" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </div>
    </div>)

}

export default ChatRoom