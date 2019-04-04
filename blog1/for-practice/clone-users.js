const mongoose = require('mongoose');
const UserSchema = new mongoose.schema({
	username:{
		type:String
	},
	password:{
		type:String
	},
	isAdmin:{
		type:Boolean,
		default:0
	}
});
const UserModel = mongoose.model('user',UserSchema);
module.exports = UserModel;