const http =require('http');

const server = http.createServer((req,res)=>{
	//res:可读流
	//rep:可写流
	res.setHeader('content-type',"text/plain;charset=utf-8");
	res.write("你好\n");
	res.end("我喜欢")
})
server.listen(8000,"127.0.0.1",()=>{
	console.log("server is running at http://127.0.0.1:8000")
})