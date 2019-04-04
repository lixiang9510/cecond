const mongoose = require('mongoose');
const pagination = require('../util/pagination.js');
const CommentSchema = new mongoose.schema({
	comment:{
		type:String
	},
	user:{
		type:pagination.Schema.Types.ObjectId,
		ref:'User'
	},
	article:{
		type:pagination.Schema.Types.ObjectId,
		ref:'article'
	},
	createAt:{
		type:Date,
		default:Date.now
	}
});
CommentSchema.statics.getPaginationComments = function(req,query=[]){
	const options = {
		page:req.query.page,
		model:this,
		query:query,
		projection:'-__v',
		sort:{_id:-1},
		populates:[{path:'user',select:'username'},{path:'category',select:'name'}]
	}
	return pagination(options);
}
const CommentModel = mongoose.model('Comment',CommentSchema);
module.exports = CommentModel;