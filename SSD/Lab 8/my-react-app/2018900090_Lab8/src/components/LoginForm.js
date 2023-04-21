import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BACKEND_URI = "http://localhost:5000/api/auth/";

// functional component
function LoginForm(props) {
    const [roll, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/profile');
    }

    return (
        <div className="center-div">
            <h1 className='text-center'>Login</h1>
            <form className='form-group'>
                <label className='m-2 form-label'>Roll: </label>
                <br/>
                <input className='m-2 form-control' type="text" name="roll"  value = {roll} onChange={(e) => setEmail(e.target.value)}/>
                <br/>
                <label className='m-2 form-label'>Password : </label>
                <br/>
                <input className='m-2 form-control' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
            </form>
            <button className='btn btn-primary position-relative start-50 translate-middle-x' onClick={async (e) =>  {
                // send fetch (POST) request to server
                const requestOptions = {
                    credentials : 'include',
                    method : 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body : JSON.stringify({ roll : roll, password : password })
                };

                var res = await fetch(BACKEND_URI + "login", requestOptions);
                alert((await res.json())["msg"]);
                setEmail("");
                setPassword("");
                if(res.status == 200) {
                    sessionStorage.setItem("curr_roll", roll);
                    sessionStorage.setItem("curr_roll", roll);
                    navigateToProfile();
                }
            }}>Login</button>
            <br/>
            <p className='m-4'>Do not have an account ? <Link to='/signup'> Sign Up Here</Link> </p>
        </div>);
}

export default LoginForm;