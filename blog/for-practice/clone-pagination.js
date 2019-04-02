async function pagination(options){
	let { page,model,query,projection,sort }=options;
	const limit = 2;
	page = parseInt(page);
	if(isNaN(page)){
		page = 1;
	}
	if(page == 0){
		page = 1;
	} 
	const count = await model.countDocuments(query);
	const pages = Math.ceil(count/limit);
	if(page > pages){
		page = pages
	}
	if(pages == 0){
		page = 1;
	}
	const list = [];
	for(let i=1;i<=pages;i++){
		list.push(i);
	}
	const skip = (page-1)*limit;
	const docs = await model
}