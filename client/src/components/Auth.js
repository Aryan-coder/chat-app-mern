import React, {useState} from 'react'
import axios from 'axios'


const Auth = () => {

    const [isNew, setNew] = useState(false)
    const [userdata, setUserData] = useState({})

    const login=()=>{
        return(<div>
            <input type='text' placeholder='email'/>
            <input type='text' placeholder='password'/>
        </div>)
    }

    const signin=()=>{
        return(<div>
            <input type='text' placeholder='email'/>
            <input type='text' placeholder='first name'/>
            <input type='text' placeholder='last name'/>
            <input type='file'/>
            <input type='date'/>
            <input type='password' placeholder='password'/>
            <input type='password' placeholder='retype password'/>
        </div>)
    }

    const handleUser=()=>{
        let response 
        if(isNew){
            response = axios.post('/signin',userdata)
        }
        else{
            response = axios.post('/login',userdata)
        }
        if(response.err){
            alert(response.err)
        }
        else{
            if(isNew){
                alert('user registered successfuly')
                setNew(false)
            }
        }
    }

    const handlePages=()=>isNew ? 
    <div>
        Don't have account ? 
        <button onClick={()=>setNew(false)} >click here</button>
        to create one
    </div> 
    :
    <div>
        Already have account ? 
        <button onClick={()=>setNew(true)} >click here</button>
        to login
    </div>


    return(<>
        {isNew ? login() : signin()}
        {handlePages()}
    </>)

}

export default Auth