require('dotenv').config();
const http = require('http');
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';
// const mex = process.env.MEX || 'Gaetano Panico';
const mex = process.env.MEX || 'Nessun Messaggio';
http
  .createServer(function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    res.end(`<h1>${mex}</h1>`);
  })
  .listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server avviato su ${serverUrl}`);
  });
