
const { spawn } = require('child_process');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI_LOCAL
// console.log(MONGO_URI)

// Restore le backup dans mongo Atlas
// const child = spawn('mongorestore', [
//     "--uri=" + MONGO_URI,
//     // '--drop',
//     `--gzip`,
//     `--archive=./backup/backupLaPb_240122_230030`,
// ]);

child.stdout.on('data', (data) => {
    console.log('stdout:n', data);
});
child.stderr.on('data', (data) => {
    console.log('stderr:n', Buffer.from(data).toString());
});
child.on('error', (error) => {
    console.log('error:n', error);
});

child.on('exit', (code, signal) => {
    if (code) console.log('Process exit with code:', code);
    else if (signal) console.log('Process killed with signal:', signal);
    else console.log('Restore successfull ');
});

