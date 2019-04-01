const http = require('http');

const util

http.createServer((request,response)=>{
	response.writeHead(200,{"content-type":"text/plain;charset=UTF-8"});
	response.write('你好\n');
	response.end("hello world 你好\n");
}).listen(8888);
console.log("Server running at http://127.0.0.1:8888/");