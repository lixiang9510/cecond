
//处理购物车：
handleCard();

//处理导航栏
handleNav();

//处理选项卡
handleTab();

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
	var timer=0;
	var aNavPrompt = document.querySelectorAll('.header-container-nav .header-container-nav-con li');
	var oCotaintNav = document.querySelector('.header-container-nav .nav-containt');
	for(i=0;i<aNavPrompt.length-2;i++){
		aNavPrompt[i].index=i;
		aNavPrompt[i].onmouseenter=function(){
			clearTimeout(timer);
			loadDate(this.index);
			animate(oCotaintNav,{'height':230},0,function(){
				var onew=document.querySelector('.header-container-nav .nav-containt ul .newGoods');
				oCotaintNav.style.overflow='visible';
				oCotaintNav.style.border='1px solid #ccc';
				onew.style.borderTop='1px solid #ff6700';
				onew.style.zIndex=5;
			});
				oCotaintNav.style.border='1px solid #ccc';
		}
		aNavPrompt[i].onmouseleave=function(){
			timer=setTimeout(function(){
				animate(oCotaintNav,{'height':0},0);
				oCotaintNav.style.border='none';
				oCotaintNav.style.overflow='hidden';
			},500)
		}
	}
	oCotaintNav.onmouseenter=function(){
		clearTimeout(timer);
	}
	oCotaintNav.onmouseleave=function(){
		timer=setTimeout(function(){
			animate(oCotaintNav,{'height':0},0);
			oCotaintNav.style.border='none';
			oCotaintNav.style.overflow='hidden';
		},500);
	}
	function loadDate(index){
		var date=objArray[index];
		// console.log(date);
		var html='<ul>';
		for(i=0;i<date.length;i++){
			html+=	'<li>';
			html+=		'<a href="#">';
			html+=			'<img src='+date[i].url+' alt="">';
			html+=		'</a>';
			html+=		'<div class="phoneName">'+date[i].name1+'</div>';
			html+=		'<div class="phonePrice">'+date[i].price+'</div>';
			html+=		'<div class="newGoods">'+date[i].newGood+'</div>';
			html+=	'</li>';					
		}
		html+='</ul>';
		oCotaintNav.innerHTML=html;
	}
}

//处理选项卡
function handleTab(){
	var oHomeTab=document.getElementById('homeTab');
	var aHomeNavLi=document.querySelectorAll('.home-container-nav .home-nav li');
	
	for(k=0;k<aHomeNavLi.length;k++){
		aHomeNavLi[k].index=k;
		aHomeNavLi[k].onmouseenter=function(){
			handleTabFn(this.index);
		}
	}
	function handleTabFn(index){
		aHomeNavLi[index].style.backgroundColor="#ff6700";
	}
	for(i=0;i<(Math.ceil(TabDate[0].length/6));i++){
		var oLi=document.createElement('li');
		for(j=0;j<6;j++){
			if(TabDate[0][6*i+j]){
				var oDiv=document.createElement('div');
				oDiv.innerHTML='<img src="'+TabDate[0][6*i+j].url+'" alt=""><span>'+TabDate[0][6*i+j].name1+'</span>';
				oLi.appendChild(oDiv);
			}
		}
		oHomeTab.appendChild(oLi);
	}
}