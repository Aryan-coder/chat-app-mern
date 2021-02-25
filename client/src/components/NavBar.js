import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {Image} from 'react-bootstrap';


const NavBar = ({user, search}) => {

    const searchBar=()=>{
        if(search==undefined || search.isThere==undefined || search.isThere=='false'){
            return(
                <div></div>
            )
        }
        else{
            <Form style={{display: 'flex', flexDirection: 'row'}}>
                    <FormControl type="text" placeholder="Search" />
                    <Button variant="outline-info">Search</Button>
            </Form>
        }
    }

    return(<>
        <Navbar bg="dark" variant="dark">
        <Image  style={{width: 40, height: 40}} src={user.image} roundedCircle />
            <Navbar.Brand href="#" style={{marginLeft: 10}}>{user.name}</Navbar.Brand>
            {searchBar()}
        </Navbar>
    </>)

}

export default NavBar