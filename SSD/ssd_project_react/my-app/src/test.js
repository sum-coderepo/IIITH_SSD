const spanner = require('child_process').spawn;
const data_to_pass = {
    data_sent : 'Send this to python Script',
    data_returned: undefined
};
const python_process = spanner('python', ['./Hello.py', JSON.stringify(data_to_pass)]);

python_process.stdout.on('data', (data) => {
    console.log(`${data}`);
});