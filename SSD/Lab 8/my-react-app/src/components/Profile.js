import { useNavigate } from 'react-router-dom';

const BACKEND_URI = "http://localhost:5000/api/auth/";

function Profile(props) {


    // control comes here if email is not null.
    return (<div>
    <h2>Student Concern for TA1 </h2>
            <button type="button" className="btn btn-outline-primary">Primary</button>

    </div>

    );

}

export default Profile;