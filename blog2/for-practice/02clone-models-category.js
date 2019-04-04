const mongosoe = require('mongoose');
const CategorySchema = new mongoose.schema({
	name:{
		type:String,
	},
	order:{
		type:Number,
		default:0
	}
});
const CategoryModel = mongoose.model('Category',CategorySchema);
module.exports = CategoryModel;