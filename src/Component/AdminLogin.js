import React, {useState} from "react";
import { Form, FormInput, FormGroup, Button } from "shards-react";
import { useHistory } from "react-router-dom";
import axios from 'axios'


const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();
    const checkLoginCred = async () => {
        const loginResponse = await axios.post('http://localhost:8000/auth/login', {
            username,
            password,
        }, {withCredentials: true})
    if(loginResponse.status === 200){
        history.push('/lessons')
    }
    }
    return(
        <div>
            <Form>
                <FormGroup>
                    <label htmlFor="#username">Username</label>
                    <FormInput id="#username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="#password">Password</label>
                    <FormInput type="password" id="#password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </FormGroup>
                <Button onClick={checkLoginCred}>Primary</Button>
            </Form>
        </div>
        
    )
}

export default AdminLogin;