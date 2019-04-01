const http = require('http');
const path = require('path')
const formidable = require("formidable");
const querystring = require('querystring');
const fs = require('fs')
const server = http.createServer((req,res)=>{
	// console.log(formidable);
	console.log('url=>',req.url,"method=>",req.method);
	if(req.method.toLowerCase() == 'post'){
		let form = new formidable.IncomingForm();
		form.uploadDir = "./upload";
		form.keepExtensions = true;
		form.parse(req,function(err,fileds,files){
			let oldPath = __dirname + "/" +files.avatar.path;
			let extname = path.extname(oldPath);
			let newPath = __dirname + "/upload/" + Date.now().toString()+parseInt(Math.random()*1000).toString().padStart(4,'0')+extname;
			console.log(newPath);
			fs.rename(oldPath,newPath,(err)=>{
				if(err){
					res.setHeader("Content-type","text/html;charset=utf-8");
					res.end("err");
				}else{
					res.setHeader("Content-type","text/html;charset=utf-8");
					res.end("ok");
				}
			})
		})
	}
	// res.setHeader("Content-type","text/html;charset=utf-8");
	// res.end("kuazhu");
})
server.listen(3000,"127.0.0.1",()=>{
	console.log("Server is running at http://127.0.0.1:3000")
})