
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './profile.css'
// import "./search.css";
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Card, Input } from 'semantic-ui-react'
import Table from "./Table";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
const BACKEND_URI = "http://localhost:3001/app/";






function App(props) {

    // const tableStyle = {
    //     width:'fit-content',
    //     margin: 'auto',
    //     border: '1px solid black'
    // };
    const [searchapiresponse, setsearchapiresponse] =  React.useState();
    const fetchData = (research) => {
        const query1 = {
            query1: research,
            link: '',
        };

        let response = fetch("http://localhost:8004/predict",
            {
                method: "POST",
                //body: query,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(research + "||" + ''),

            })
            .then(function(res){
                return res.json();
            })
            .then(function(data){
                // console.log("data", data.hits.hits);
                setsearchapiresponse(data.hits?.hits?.map(item => item._source))
            })
            .catch(function(res){ console.log(res) })
    };

    const email = sessionStorage.getItem("curr_email");
    const requestOptions = {
        credentials : 'include',
        method : 'POST',
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify({ email : email})
    };
    var r = fetch(BACKEND_URI + "searches", requestOptions);
    if(r.status==200){
        var research = r.category;
        // fetchData(research)
    }
    fetchData(research)
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }



    // // If email is null it means the session variable is not set and hence the user
    // // has not logged in yet
    if(email == null) {
        return (<p>
            Please Login First.
            <button onClick={navigateToLogin} className='btn btn-primary'>
                Go To Login
            </button>
        </p>)
    }

    const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {/* {searchapiresponse[0].author} */}
                </Typography>
                <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </React.Fragment>
    );

    const card2 = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </React.Fragment>
    );

    const card3 = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </React.Fragment>
    );

    const card4 = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </React.Fragment>
    );

    const card5 = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </React.Fragment>
    );

    // // control comes here if email is not null.
    return (<div>
        <nav className="navbar ">
            <div class="container-fluid">
                <div id='prof'><h5><Link to="/profile">Profile</Link></h5></div>
                <div id='cur'><h3>Welcome, {email}</h3></div>
                <div id='sear'><h5><Link to="/search">Search</Link></h5></div>
            </div>
        </nav>
        <div className='text-center'>
            <p id='boys'>Based on your past searches</p>
            {/* <div id='past'> */}
            <div style={{ padding: 20 }}>
                <br></br>
                <div style={{ padding: 20 }}>
                    <div className="bg"></div>
                    <div className="bg bg2"></div>
                    <div className="bg bg3"></div>
                    <div id="card1"><Card variant="outlined">{card}</Card></div>
                    <div id="card2"><Card variant="outlined">{card2}</Card></div>
                    <div id="card3"><Card variant="outlined">{card3}</Card></div>
                    <div id="card4"><Card variant="outlined">{card4}</Card></div>
                    <div id="card5"><Card variant="outlined">{card5}</Card></div>
                </div>
            </div>
            {/* </div> */}
            <button className='btn btn-primary m-4' onClick={async (e) => {
                sessionStorage.removeItem("curr_email");
                navigateToLogin();
            }}>Logout</button>
            {/* {searchapiresponse} */}
            {/* {searchapiresponse?.length && <Table data={searchapiresponse} />} */}
        </div>

    </div>);

}

export default App;