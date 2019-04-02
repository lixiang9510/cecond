const express = require('express');
const swig = require('swig');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Cookies = require('Cookies');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();
const port = 3000;
mongoose.connect('mongodb://localhost/blog',{useNewUrlParser:true});
const db = mongoose.connection;
db.on('error',(err)=>{
	console.log('connection error');
	throw err;
})
db.once('open',()=>{
	console.log('connection successful');
})
app.use(express,static('public'));
//开发阶段设置不走缓存
swig.setDefaults({
	cache:false
})
//配置应用模板
app.engine('html',swig.renderFile);
//配置模块存放目录
app.set('view','./view');
//注册模块引擎
app.set('view engine','html');

//post/get请求处理中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
	//设置Cookies的名称
	name:'kzid',
	//用它来对session Cookie签名，防止篡改
	secret:'abc',
	//强制保存session即使它没有变化
	resave:true,
	//强制将未初始化的session储存
	saveUninitialized:true,
	//如果为true，则每次请求都会更新Cookie的过期时间
	rolling:true,
	//Cookies过期时间为一天
	cookie:{maxAge:1000*60*60*24},
	//设置session存储在数据库中
	store:new MongoStore({ mongooseConnection:mongoose.connection })
}))
app.use((req,res,next)=>{
	req.useInfo = req.session.useInfo || {};
	next();
})
app.use('/',require('./routes/index.js'))
app.use('/user',require('./routes/user.js'))
app.use('/admin',require('./routes/admin.js'))
app.use('/category',require('./routes/category.js'))
app.listen(port,() => console.log(`app listening on port ${port}!`))
