import logo from './logo.svg';
import './App.css';
import React ,{useState}from 'react'
import {spawn as spanner} from "child_process";


function App() {
    let variable = 345
    const [data,setData]=useState(null)
    const [print,setPrint]=useState(false)

    const spanner = require('child_process').spawn;
    const data_to_pass = {
        data_sent : 'Send this to python Script',
        data_returned: undefined
    };

    console.log("Data sent to python Script");
    const python_process = spanner('python', ['./Hello.py', JSON.stringify(data_to_pass)]);

    python_process.stdout.on('data', (data) => {
        console.log(`${data}`);
    });
    // const pythonExec= () => {
        // const spanner = require('child_process').spawn;
        // const data_to_pass = {
        //     data_sent : 'Send this to python Script',
        //     data_returned: undefined
        // };
        //
        // console.log("Data sent to python Script");
        // const python_process = spanner('python', ['./Hello.py', JSON.stringify(data_to_pass)]);
        //
        // python_process.stdout.on('data', (data) => {
        //     console.log(`${data}`);
        // });




    //     python_process.stdout.on('data', (data) => {
    //         console.log('Data received from python', JSON.parse(data.toString()));
    //     })
    //
    // }



    function getData(val)
    {
        console.warn(val.target.value)
        setData(val.target.value)
        setPrint(false)
    }
    return (


        <div className="App">
            {
                print?
                    <h1> {data}</h1>
                    :null
            }
            <input type="text" onChange={getData} />
            <button onClick={()=>setPrint(true)} >Print Data</button>
            <button >Click me</button>
            <h1> hdsjd</h1>
        </div>

    );
}

export default App;
