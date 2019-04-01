

const fs = require('fs');
const util = require('util');
const filePath = './data.json';
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
/*
const add = (name,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if(err){
			callback(err);
		}else{	
			let arr =JSON.parse(data);
			console.log(arr);
			arr.push({
				id:Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,"0"),
				name:name
			});
			let strArr = JSON.stringify(arr);
			fs.writeFile(filePath,strArr,(err)=>{
				if(err){
					callback(err)
				}else{
					callback(null,err)
				}
			})
			console.log(arr);
		}		
	})
}
add('Tom',(err,data)=>{
	if(err){
		console.log('err:::',err)
	}else{
		console.log(data);
	}
})
*/
async function add(name){
	let data = await readFile(filePath);
	let arr = JSON.parse(data);
	arr.push({
		id:Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,"0"),
		name:name
	});
	let strArr = JSON.stringify(arr);
	await writeFile(filePath,strArr);
	return arr;
}
async function get(id){
	let data = await readFile(filePath);
	let arr = JSON.parse(data);
	return arr.find(val=>{
		return val['id']==id;
	})
}
async function updata(name,id){
	let data = await readFile(filePath);
	let arr = JSON.parse(data);
	let obj = arr.find(val=>{
		return val['id']==id
	});
	if(obj){
		obj.name=name;
		let strArr = JSON.stringify(arr);
		await writeFile(filePath,strArr);
		return arr;
	}else{
		return obj;
	}
}
async function remove(id){
	let data = await readFile(filePath);
	let arr = JSON.parse(data);
	let newArr = arr.filter(val=>{
		return val['id'] != id;
	})
	console.log(newArr)
	let strArr = JSON.stringify(newArr);
	await writeFile(filePath,strArr);
	return newArr;
}
/*
add("Mike")
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})
*/
/*
get("155334009067016166")
.then(data=>{
	console.log(data)
})
.catch(err=>{
	console.log(err)
})
*/
/*
updata("Leo","15533400906701616")
.then(data=>{
	console.log(data);
})
*/
/*
remove("15533400922535519")
.then(data=>{
	console.log(data);
})
*/





