import React, {useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Image} from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import NavBar from './NavBar'
import data from './DumyData'

const Home = () => {

    const [userdata, setUserData] = useState(data)

    const friendList=()=>userdata.friends.map(friend=><>
        <ListGroup.Item variant="primary" style={{margin: '1px 0'}}>
            <Image style={{width: 40, height: 40, marginRight:'10px'}} src={friend.image} roundedCircle />
            {friend.first} {friend.last}
        </ListGroup.Item>
        </>
        
    )

    return(<>
       <NavBar user={{name: userdata.first,image: userdata.image}} />
       <div>
            <ListGroup variant="flush">
                {friendList()}
            </ListGroup>
        </div>
    </>)

}

export default Home