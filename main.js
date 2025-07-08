// const { Worker } = require('worker_threads');

// const worker = new Worker('./workerThread.js');

// worker.on('message', (msg) => {
//   console.log('✅ Main received:', msg);
// });

// worker.on('error', (err) => {
//   console.error('❌ Worker error:', err);
// });

// worker.on('exit', (code) => {
//   console.log('🛑 Worker exited with code', code);
// });

// worker.postMessage('hello from main');


// const { exec } = require('child_process');

// exec('node child.js', (err, stdout, stderr) => {
//   if (err) {
//     console.error('Error:', err);
//     return;
//   }
//   console.log('Child says:', stdout);
// });

