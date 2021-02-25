import React, {useState} from 'react'
import axios from 'axios'
import Auth from './components/Auth'
import Home from './components/Home'
import ChatRoom from './components/ChatRoom'
import data from './components/DumyData'



const App = () => {

    return(<div>
        <ChatRoom friend={data.friends[0]}/>
    </div>)

}

export default App