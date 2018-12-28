# Nano IPC REST

A quick and simple REST server for the Nano cryptocurrency RPC backed by the experimental IPC API. This is a drop-in replacement for the normal HTTP RPC that's built into the node.

## Usage

```
Usage: nano-ipc-rest [options]

Options:
  -V, --version            output the version number
  -i, --ipc [path]         Path to Nano IPC socket (default: "/tmp/nano")
  -p, --port [port]        Port to bind the webserver to (default: 3001)
  -h, --host [ip address]  IP address to bind the webserver to (default: "127.0.0.1")
  --no-logs                Disables logging
  --no-cors                Disables CORS
  -h, --help               output usage information
```
