







//处理购物车：
handleCard();

//处理导航栏
handleNav();

//处理购物车：
function handleCard(){
	var oShopping=document.querySelector('.top-container .top-container-shopping');
	var oShopCotain=document.querySelector('.top-container .top-container-shopping .shopping-container');
	var oAddLine=document.querySelector('.top-container .top-container-shopping .addLine');
	var oPrompt=document.querySelector('.top-container .top-container-shopping .prompt');
	var iSpeed=5;
	var oShoppingTimer=0,oShopCotainTimer1=0,oShopCotainTimer2=0,oAddLineTimer=0;

	oShopping.onmouseenter=function(){
			clearInterval(oShoppingTimer);
			clearTimeout(oShopCotainTimer1);
			clearInterval(oShopCotainTimer2);
			oShoppingTimer=setInterval(function(){
				if(oShopCotain.offsetHeight>=100){
					oShopCotain.style.height=100+'px';
					clearInterval(oShoppingTimer);
				}else{
					oShopCotain.style.height=oShopCotain.offsetHeight+iSpeed+'px';
				}
				if(oShopCotain.offsetHeight>=100){
					clearTimeout(oAddLineTimer);
					oAddLine.style.display='block';
					oAddLineTimer=setTimeout(function(){
						oPrompt.style.display='block';
						oAddLine.style.display='none';
						clearTimeout(oAddLineTimer);
			},500)
		}
			},10);		
		}	
	oShopping.onmouseleave=function(){
		clearInterval(oShoppingTimer);
		clearTimeout(oShopCotainTimer1);
		clearInterval(oShopCotainTimer2);
		clearTimeout(oAddLineTimer);
		oPrompt.style.display='none';
		oShopCotainTimer1=setTimeout(function(){
			oShopCotainTimer2=setInterval(function(){
				if(oShopCotain.offsetHeight<=0){
					clearTimeout(oShopCotainTimer1);
					oShopCotain.style.height=0+'px';
					clearInterval(oShopCotainTimer2);
				}else{
					oShopCotain.style.height=oShopCotain.offsetHeight-iSpeed+'px';
				}	
			},10)
		},50)
	}
}

//处理导航栏
function handleNav(){
	var aNavPrompt = document.querySelectorAll('.header-container-nav .header-container-nav-con li');
	console.log(aNavPrompt.length);
}

