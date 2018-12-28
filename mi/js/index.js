
//处理购物车：
handleCard();

//处理导航栏
handleNav();

//处理选项卡
handleTab();

//处理轮播图
handleChart();

//添加倒计时
addCountDown();

//左右选项卡
handleRightLeft();

////处理四个选项选项卡
handleFourCard();

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
	var homeTimer=0;
	for(var k=0;k<aHomeNavLi.length;k++){
		aHomeNavLi[k].index=k;
		aHomeNavLi[k].onmouseenter=function(){
			clearTimeout(homeTimer);
			oHomeTab.style.display='block';
			handleTabFn(this.index);
		}
	}
	for(var k=0;k<aHomeNavLi.length;k++){
		aHomeNavLi[k].onmouseleave=function(){
			homeTimer=setTimeout(function(){
				oHomeTab.style.display='none';
				for(var j=0;j<aHomeNavLi.length;j++){
					aHomeNavLi[j].style.backgroundColor='#222';
				}
			},500);
		}
	}
	oHomeTab.onmouseenter=function(){
		clearTimeout(homeTimer);
	}
	oHomeTab.onmouseleave=function(){
		homerTabtimer=setTimeout(function(){
			oHomeTab.style.display='none';
			for(var j=0;j<aHomeNavLi.length;j++){
				aHomeNavLi[j].style.backgroundColor='#222';
			}
		},500)
	}
	function handleTabFn(index){
		for(var j=0;j<aHomeNavLi.length;j++){
			aHomeNavLi[j].style.backgroundColor='#222';
		}
		var aHomeTabLi=document.querySelectorAll('.home-container-nav #homeTab li');
		if(aHomeTabLi){
			for(var i=0;i<aHomeTabLi.length;i++){
				oHomeTab.removeChild(aHomeTabLi[i]);
			}			
		}
		aHomeNavLi[index].style.backgroundColor="#ff6700";
		oHomeTab.style.width=248*Math.ceil(TabDate[index].length/6)+'px';
		console.log(248*Math.ceil(TabDate[index].length/6));
		for(var i=0;i<(Math.ceil(TabDate[index].length/6));i++){
		var oLi=document.createElement('li');
		for(var j=0;j<6;j++){
			if(TabDate[index][6*i+j]){
				var oDiv=document.createElement('div');
				oDiv.innerHTML='<img src="'+TabDate[index][6*i+j].url+'" alt=""><span>'+TabDate[index][6*i+j].name1+'</span>';
				oLi.appendChild(oDiv);
			}
		}
		oHomeTab.appendChild(oLi);
		}
	}	
}

//处理轮播图
function handleChart(){
	function Carousel(opation){
		this.oBox=document.getElementById(opation.id);
		this.aImg=opation.aImg;
		this.width=opation.width;
		this.height=opation.height;
		this.oUl=null;
		this.oLi=null;
		this.oImg=null;
		this.now=0;
		this.timer=0;
		this.aLi=null;
		this.aLi2=null;
		this.init();
		this.leftRight();
		this.bottomSpot();
		this.changeImg();
	}
	//for add three img 
	Carousel.prototype.init=function(){
		this.oUl=document.createElement('ul');
		for(i=0;i<this.aImg.length;i++){
			this.aImg[i].index=i;
			this.oLi=document.createElement('li');
			this.oImg=document.createElement('img');
			this.oImg.src=this.aImg[i];
			this.oImg.style.width=this.width+'px';
			this.oImg.style.height=this.height+'px';
			this.oLi.appendChild(this.oImg);
			this.oUl.appendChild(this.oLi);
			this.oLi.style.position="absolute";
			this.oLi.style.top="0px";
			this.oLi.style.left="0px";
			this.oLi.style.zIndex=1;
			this.oLi.style.opacity=0.5;
			if(i==0){
				this.oLi.style.zIndex=9;
				this.oLi.style.opacity=1;
			}
		}
		this.oBox.appendChild(this.oUl);
		this.oBox.style.width=this.width+'px';
		this.oBox.style.height=this.height+'px';
		this.oUl.style.listStyle='none';
		this.aLi=this.oUl.children;
	}
	//for add left and right button;
	Carousel.prototype.leftRight=function(){
		var _this=this;
		this.toLeft=document.createElement('div');
		this.toLeft.className="leftless";
		this.toLeft.innerHTML='&lt;'
		this.toRight=document.createElement('div');
		this.toRight.className='rightmore';
		this.toRight.innerHTML='&gt;'
		this.oBox.appendChild(this.toLeft);
		this.oBox.appendChild(this.toRight);
		this.toRight.onclick=function(){
			_this.now++;
			if(_this.now==_this.aLi.length){
				_this.now=0;
			}
			_this.changeImg();
		}
		this.toLeft.onclick=function(){
			_this.now--;
			if(_this.now<0){
				_this.now=_this.aLi.length-1;
			}
			_this.changeImg();
		}
	}
	//for add bottom button
	Carousel.prototype.bottomSpot=function(){
		var _this=this;
		this.oUl2=document.createElement('ul');
		for(i=0;i<this.aImg.length;i++){
			this.aImg[i].index=i;
			this.oLi2=document.createElement('li')
			this.oUl2.appendChild(this.oLi2);
			this.oLi2.style.width='20px';
			this.oLi2.style.height='20px';
			this.oLi2.style.float='left';
			this.oLi2.style.backgroundColor='#555';
			this.oLi2.style.border="4px solid #ccc";
			this.oLi2.style.boxSizing='border-box'
			this.oLi2.style.marginRight='10px';
			this.oLi2.style.borderRadius='50%';
			if(i==0){
				this.oLi2.style.backgroundColor='#ccc';
				this.oLi2.style.border="4px solid #555";
			}
		}
		this.oBox.appendChild(this.oUl2);
		this.oUl2.style.listStyle='none';
		this.oUl2.style.position='absolute';
		this.oUl2.style.bottom='20px';
		this.oUl2.style.right='40px';
		this.oUl2.style.zIndex=99;
		this.aLi2=this.oUl2.children;
		for(i=0;i<this.aLi2.length;i++){
			this.aLi2[i].index=i;
			this.aLi2[i].onmouseover=function(){
				for(j=0;j<_this.aLi2.length;j++){
					_this.aLi2[j].style.backgroundColor='#555';
					_this.aLi2[j].style.border="4px solid #ccc";
				}
				_this.aLi2[this.index].style.backgroundColor='#ccc';
				_this.aLi2[this.index].style.border="4px solid #555";
			}
			this.aLi2[i].onclick=function(){
				_this.now=this.index;
				_this.changeImg();
			}
		}
		this.timer=setInterval(this.toRight.onclick,1000);

		this.oBox.onmouseover=function(){
			clearInterval(_this.timer);
		}
		this.oBox.onmouseout=function(){
			_this.timer=setInterval(_this.toRight.onclick,1000);
		}
	}
	//add a common function;
	Carousel.prototype.changeImg=function(){
		for(i=0;i<this.aLi.length;i++){
			for(i=0;i<this.aLi.length;i++){
				this.aLi[i].style.opacity=0.5;
				this.aLi[i].style.zIndex=1;
				this.aLi2[i].style.backgroundColor='#555';
				this.aLi2[i].style.border="4px solid #ccc";					
			}
			this.aLi[this.now].style.zIndex=9;
			animate(this.aLi[this.now],{'opacity':100},0)
			this.aLi2[this.now].style.backgroundColor='#ccc';
			this.aLi2[this.now].style.border="4px solid #555";
		}
	}
	new Carousel({
		id:'box',
		aImg:['images/b1.jpg','images/b2.jpg','images/b3.jpg','https://i1.mifile.cn/a4/xmad_15457076504043_TJWfl.jpg'],
		width:1226,
		height:460
	});
}

//添加倒计时
function addCountDown(){
	var oOwn = document.querySelector('.home-container-flash .home-flash-point .home-flash-point-left .one');
	var aFour=document.querySelectorAll('.home-container-flash .home-flash-point .home-flash-point-left .four li');
	var setTime=new Date('2018/12/28 9:30:00');
	var timer = 0;
	function number1(num){
		return num<10 ? num='0'+num : num=''+num;
	}
	function conment1(){
		var allTime=setTime.getTime()-Date.now();
		var allSecond=parseInt(allTime/1000);
		if(allTime<=0){
			clearInterval(timer);
			allSecond=0;
		}
		var oHours=parseInt(allSecond/3600);
		var oMinutes=parseInt((allSecond%3600)/60);
		var oSeconds=(allSecond%3600)%60;
		var oTimernumber=number1(oHours)+number1(oMinutes)+number1(oSeconds);
		// oOwn.innerHTML=number1(oHours)':'number1(oMinutes)':'number1(oSeconds)+'场';
		aFour[0].innerHTML=number1(oHours);
		aFour[2].innerHTML=number1(oMinutes);
		aFour[4].innerHTML=number1(oSeconds);
	}
	timer=setInterval(conment1,50);
}

//处理左右选项卡
function handleRightLeft(){
	var oLessThan=document.querySelector('.general-right-top-no1 a .less-than');
	var oMoreThan=document.querySelector('.general-right-top-no1 a .more-than');
	var oUl=document.querySelector('.general-image-point-right-flash1 ul');
	oLessThan.onclick=function(){
		// oUl.style.left='0px';
		animate(oUl,{left:0},0);
	}
	oMoreThan.onclick=function(){
		// oUl.style.left='-976px';
		animate(oUl,{left:-976},0);
	}
	console.log(oMoreThan)
}

//处理四个选项选项卡
function handleFourCard(){
	var oFourLiUl=document.querySelector('.forAddFourCard');
	var oDivHEA=document.querySelector('.household-electrical-appliances');
	var aFourLiUlLi=oFourLiUl.children;
	changeDate(0);
	for(var i=0;i<aFourLiUlLi.length;i++){
		aFourLiUlLi[i].index=i;
		aFourLiUlLi[i].onmouseenter=function(){
			for(var j=0;j<aFourLiUlLi.length;j++){
				aFourLiUlLi[j].className='';
			}
			aFourLiUlLi[this.index].className='forAddFourCard-active';
			changeDate(this.index);
		}
	}
	function changeDate(index){
		var html='<ul class="height2 clearfix">';
		for(var k=0;k<HEADate[index].length;k++){
			if(k==4){
				html+='<li class="because-it-is-deferent">';
				html+=	'<div class="up-img">';
				html+=		'<a href="www://kuazhu.com">';
				html+=			'<img src="'+HEADate[index][k].img1+'" alt="">';
				html+=		'</a>';
				html+=	'</div>';
				html+=	'<div class="down-img">';
				html+=		'<a href="www://kuazhu.com">';
				html+=			'<img src="'+HEADate[index][k].img2+'" alt="">';
				html+=		'</a>';
				html+=	'</div>';
				html+='</li>';
			}else{
				html+='<li>';
				html+=	'<a href="'+HEADate[index][k].aUrl+'">';
				html+=		'<img src="'+HEADate[index][k].imgUrl+'" alt="">';
				html+=		'<div class="for-add-background"></div>';
				html+=		'<div class="describe">';
				html+=			'<p>'+HEADate[index][k].name1+'</p>';
				html+=			'<p>'+HEADate[index][k].ad+'</p>';
				html+=			'<p><span>'+HEADate[index][k].price1+'</span>元 <del>'+HEADate[index][k].price2+'</del></p>';
				html+=		'</div>';
				html+=		'<div class="for-add-evaluate">';
				html+=			'<div class="for-change-format">'+HEADate[index][k].evaluate+'';
				html+=			'<p>来自于<span>'+HEADate[index][k].author+'</span>的评价</p>';
				html+=		'</div>';
				html+=	'</a>';
				html+='</li>';	
			}
		}
		html+='</ul>';
		oDivHEA.innerHTML=html;
	}
}