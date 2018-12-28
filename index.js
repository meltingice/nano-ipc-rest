#!/usr/bin/env node

const program = require('commander');
const NanoIPC = require('nano-ipc');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

program
  .version(require('./package.json').version)
  .option('-i, --ipc [path]', 'Path to Nano IPC socket', '/tmp/nano')
  .option('-p, --port [port]', 'Port to bind the webserver to', 3001)
  .option('-h, --host [ip address]', 'IP address to bind the webserver to', '127.0.0.1')
  .option('--no-logs', 'Disables logging')
  .option('--no-cors', 'Disables CORS')
  .parse(process.argv);

const nano = new NanoIPC.Client();

const app = express();

app.use(bodyParser.json({ type: '*/*' }));
if (program.logs) app.use(morgan('combined'));
if (program.cors) app.use(cors());

app.get('/', (req, res) => {
  res.send('Nano REST server online');
});

app.post('/', async (req, res) => {
  await nano.connect();
  const data = await nano.call(req.body);
  res.json(data);
});

console.log(`REST server started on http://${program.host}:${program.port}`);
app.listen(program.port, program.host);
