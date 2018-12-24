function handleCard(){
	
}
var oShopping=document.querySelector('.top-container .top-container-shopping');
var oShopCotain=document.querySelector('.top-container .top-container-shopping .shopping-container');
console.log(oShopCotain);
var iSpeed=5;
var oShoppingTimer=0,oShopCotainTimer1=0,oShopCotainTimer2=0;

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
				console.log(oShopCotain.offsetHeight);
			}
		},10);		
	}
oShopping.onmouseleave=function(){
	clearInterval(oShoppingTimer);
	clearTimeout(oShopCotainTimer1);
	clearInterval(oShopCotainTimer2);
	oShopCotainTimer1=setTimeout(function(){
		oShopCotainTimer2=setInterval(function(){
			if(oShopCotain.offsetHeight<=0){
				clearTimeout(oShopCotainTimer1);
				oShopCotain.style.height=0+'px';
				clearInterval(oShopCotainTimer2);
			}else{
				oShopCotain.style.height=oShopCotain.offsetHeight-iSpeed+'px';
				console.log(oShopCotain.offsetHeight);
			}	
		},10)
	},50)
}