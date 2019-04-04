const mongoose = require('mongoose');
const UserSchema = new mongoose.schema({
	username:{
		type:String
	},
	password:{
		rype:String
	},
	isAdmin:{
		type:Boolean,
		default:true
	}
});
const UserModel = mongoose.model('mine',UserSchema);
module.exports=UserModel;