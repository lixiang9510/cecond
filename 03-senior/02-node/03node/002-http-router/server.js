const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
	console.log("url=>",req.url);
	const filePath = req.url;
	if(filePath=='/index.html'){
		fs.readFile("./index.html",(err,data)=>{
			if(err){
				res.setHeader("content-type","text/plain;charset=utf-8");
				res.statusCode=500;
				res.end("<h1>出错了</h1>");
			}else{
				res.setHeader("content-type","text/html;charset=utf-8");
				res.end(data);
			}
		})
	}
	else if(filePath=='/list.html'){
		fs.readFile("./list.html",(err,data)=>{
			if(err){
				res.setHeader("content-type","text/plain;charset=utf-8");
				res.statusCode=500;
				res.end("<h1>出错了</h1>");
			}else{
				res.setHeader("content-type","text/html;charset=utf-8");
				res.end(data);
			}
		})
	}
	else if(filePath=='/css/index.css'){
		fs.readFile("./css/index.css",(err,data)=>{
			if(err){
				res.setHeader("content-type","text/plain;charset=utf-8");
				res.statusCode=500;
				res.end("<h1>出错了</h1>");
			}else{
				res.setHeader("content-type","text/css;charset=utf-8");
				res.end(data);
			}
		})
	}
	else if(filePath=='/img/beauty9.jpg'){
		fs.readFile("./img/beauty9.jpg",(err,data)=>{
			if(err){
				res.setHeader("content-type","text/plain;charset=utf-8");
				res.statusCode=500;
				res.end("<h1>出错了</h1>");
			}else{
				res.setHeader("content-type","image/jpg;charset=utf-8");
				res.end(data);
			}
		})
	}
	else if(filePath=='/js/index.js'){
		fs.readFile("./js/index.js",(err,data)=>{
			if(err){
				res.setHeader("content-type","text/plain;charset=utf-8");
				res.statusCode=500;
				res.end("<h1>出错了</h1>");
			}else{
				res.setHeader("content-type","application/x-javascript;charset=utf-8");
				res.end(data);
			}
		})
	}
	else{
		res.setHeader("content-type","text/html;charset=utf-8");
		res.statusCode=404;
		res.end("<h1>你写错喽</h1>");
	}


})
server.listen(3000,"127.0.0.1",()=>{
	console.log("Server is running at http://127.0.0.1:3000");
})