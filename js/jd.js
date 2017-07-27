var  search=document.getElementById("search");
search.onfocus=function(){
	search.value="";
}
search.onblur=function(){
	search.value="玩具";
}
var my=document.getElementById("my");
var myJd=document.getElementById("myJd");
my.onmouseover=function(){
	my.style.backgroundColor="#fff";
	myJd.style.display="block";
}
my.onmouseout=function(){
	my.style.background="none";
	myJd.style.display="none";
}
var ser=document.getElementById("ser");
var service=document.getElementById("service");
ser.onmouseover=function(){
	ser.style.background="#fff";
	service.style.display="block";
}
ser.onmouseout=function(){
	ser.style.background="none";
	service.style.display="none";
}
var locations=document.getElementById("locations");
var city=document.getElementById("city");
locations.onmouseover=function(){
	locations.style.background="#fff";
	city.style.display="block";
}
locations.onmouseout=function(){
	locations.style.background="none";
	city.style.display="none";
}
var items=document.getElementsByName("item");
var showCity=document.getElementById("showCity");
var wzdh=document.getElementById("wzdh");
var showWzdh=document.getElementById("showWzdh");
wzdh.onmouseover=function(){
	wzdh.style.background="#fff";
	showWzdh.style.display="block";
}
wzdh.onmouseout=function(){
	wzdh.style.background="none";
	showWzdh.style.display="none";
}
var myImg=document.getElementById("myImg");
var slider=document.getElementById("slider");
var arrImg=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"];
var timer;
var num=0;
var sliderImgs=document.getElementsByName("sliderImg");
var forwardImg=document.getElementById("forwardImg");
var nextImg=document.getElementById("nextImg");
function changeImg(){
	if(num==7){
                num=0;
            }
            else{
                num++;
            }
	myImg.src="images/"+arrImg[num];
	for (var i = 0; i < sliderImgs.length; i++) {
                sliderImgs[i].className="";
            }
            sliderImgs[num].className="activeImg";
}
nextImg.onclick=function(){
	changeImg();
}
forwardImg.onclick=function(){
	if(num==0){
		num=7;
	}else{
		num--;
	}
	myImg.src="images/"+arrImg[num];
	for (var i = 0; i < sliderImgs.length; i++) {
                sliderImgs[i].className="";
            }
            sliderImgs[num].className="activeImg";
}
timer=setInterval("changeImg()",1000);
slider.onmouseover=function(){
	clearInterval(timer);
	nextImg.style.display="block";
	forwardImg.style.display="block";
}
slider.onmouseout=function(){
	timer=setInterval("changeImg()",1000);
	nextImg.style.display="none";
	forwardImg.style.display="none";
}
function show(number){
	num=number;
	myImg.src="images/"+arrImg[num];
            for (var i = 0; i < sliderImgs.length; i++) {
                sliderImgs[i].className="";
            }
            sliderImgs[num].className="activeImg";
}
var jdPhone=document.getElementById("jdPhone");
var phoneJd=document.getElementById("phoneJd");
var jd=document.getElementById("jd");
jdPhone.onmouseover=function(){
	jdPhone.style.background="#fff";
	jd.style.display="none";
	phoneJd.style.display="block";
}
jdPhone.onmouseout=function(){
	jdPhone.style.background="none";
	jd.style.display="block";
	phoneJd.style.display="none";
}
var cx=document.getElementById("cx");
var news=document.getElementById("news");
var news_tab=document.getElementById("news_tab");
var right_c1=document.getElementById("right_c1");
var right_c2=document.getElementById("right_c2");
cx.onmouseover=function(){
	right_c2.style.display="none";
	right_c1.style.display="block";
	news_tab.style.transform="translateX(0)";
}
news.onmouseover=function(){
	news_tab.style.transform="translateX(48px)";
	right_c2.style.display="block";
	right_c1.style.display="none";
}
var sjtx=document.getElementById("sjtx");
var csj=document.getElementById("csj");
var yltc=document.getElementById("yltc");
var cfxd=document.getElementById("cfxd");
var djd=document.getElementById("djd");
var ph_tab=document.getElementById("ph_tab");
var ph_foot1=document.getElementById("ph_foot1");
var ph_foot2=document.getElementById("ph_foot2");
var ph_foot3=document.getElementById("ph_foot3");
var ph_foot4=document.getElementById("ph_foot4");
var ph_foot5=document.getElementById("ph_foot5");
sjtx.onmouseover=function(){
	ph_foot1.style.display="block";
	ph_foot2.style.display="none";
	ph_foot3.style.display="none";
	ph_foot4.style.display="none";
	ph_foot5.style.display="none";
	ph_tab.style.transform="translateX(0)";
}
csj.onmouseover=function(){
	ph_foot1.style.display="none";
	ph_foot2.style.display="block";
	ph_foot3.style.display="none";
	ph_foot4.style.display="none";
	ph_foot5.style.display="none";
	ph_tab.style.transform="translateX(78px)";
}
yltc.onmouseover=function(){
	ph_foot1.style.display="none";
	ph_foot2.style.display="none";
	ph_foot3.style.display="block";
	ph_foot4.style.display="none";
	ph_foot5.style.display="none";
	ph_tab.style.transform="translateX(156px)";
}
cfxd.onmouseover=function(){
	ph_foot1.style.display="none";
	ph_foot2.style.display="none";
	ph_foot3.style.display="none";
	ph_foot4.style.display="block";
	ph_foot5.style.display="none";
	ph_tab.style.transform="translateX(234px)";
}
djd.onmouseover=function(){
	ph_foot1.style.display="none";
	ph_foot2.style.display="none";
	ph_foot3.style.display="none";
	ph_foot4.style.display="none";
	ph_foot5.style.display="block";
	ph_tab.style.transform="translateX(312px)";
}
var forwardPage=document.getElementById("forwardPage");
var nextPage=document.getElementById("nextPage");
var chang=document.getElementById("chang");
var meLeft=document.getElementById("meLeft");
meLeft.onmouseover=function(){
	forwardPage.style.display="block";
	nextPage.style.display="block";
}
meLeft.onmouseout=function(){
	forwardPage.style.display="none";
	nextPage.style.display="none";
}
var cs=0;
forwardPage.onclick=function(){
	if(cs==0)
	{
		cs=-2000;
	}else{
		cs+=1000;
	}
	chang.style.marginLeft=cs+"px";	
}
nextPage.onclick=function(){
	if(cs==-2000)
	{
		cs=0;
	}else{
		cs-=1000;
	}
	chang.style.marginLeft=cs+"px";
}
var hour=document.getElementById("hour");
var minute=document.getElementById("minute");
var second=document.getElementById("second");
var h=parseInt(hour.innerHTML);
var m=parseInt(minute.innerHTML);
var s=parseInt(second.innerHTML);
var t;
function chanTime(){
	if(s<10){
		second.innerHTML="0"+s;
	}
	else{
		second.innerHTML=s;
	}
	if(m<10){
		minute.innerHTML="0"+m;
	}
	else{
		minute.innerHTML=m;
	}
	if(h<10){
		hour.innerHTML="0"+h;
	}
	else{
		hour.innerHTML=h;
	}	
	if(s==0){
		s=60;	
		if(m==0){
			m=60;
			h--;
		}
		m--;
	}	s--;
	
}
t=setInterval("chanTime()",1000);
var item1=document.getElementById("item1");
var item2=document.getElementById("item2");
var item3=document.getElementById("item3");
var items1=document.getElementById("items1");
var items2=document.getElementById("items2");
var items3=document.getElementById("items3");
var fors=document.getElementById("fors");
var nexts=document.getElementById("nexts");
var item=1;
var ss;
function finds(){	
	if(item==3){
		item=1;
	}
	else	
	{
		item+=1;
	}
	if(item==1){
		items1.className="item";
		items2.className="";
		items3.className="";
		item1.style.display="block";
		item2.style.display="none";
		item3.style.display="none";
	}
	if(item==2){
		items1.className="";
		items2.className="item";
		items3.className="";
		item1.style.display="none";
		item2.style.display="block";
		item3.style.display="none";
	}
	if(item==3){
		items1.className="";
		items2.className="";
		items3.className="item";
		item1.style.display="none";
		item2.style.display="none";
		item3.style.display="block";
	}	
}
ss=setInterval("finds()",1000);
nexts.onclick=function(){
	finds();
}
fors.onclick=function(){
	if(item==1){
		item=3;
	}
	else{
			item-=1;
	}
	if(item==1){
		items1.className="item";
		items2.className="";
		items3.className="";
		item1.style.display="block";
		item2.style.display="none";
		item3.style.display="none";
	}
	if(item==2){
		items1.className="";
		items2.className="item";
		items3.className="";
		item1.style.display="none";
		item2.style.display="block";
		item3.style.display="none";
	}
	if(item==3){
		items1.className="";
		items2.className="";
		items3.className="item";
		item1.style.display="none";
		item2.style.display="none";
		item3.style.display="block";
	}
}
var centerr=document.getElementById("centerr");
centerr.onmouseover=function(){
	clearInterval(ss);
	fors.style.display="block";
	nexts.style.display="block";
}
centerr.onmouseout=function(){
	ss=setInterval("finds()",1000);
	fors.style.display="none";
	nexts.style.display="none";
}
items1.onmouseover=function(){
	items1.className="item";
	items2.className="";
	items3.className="";
	item1.style.display="block";
	item2.style.display="none";
	item3.style.display="none";
}
items2.onmouseover=function(){
	items1.className="";
	items2.className="item";
	items3.className="";
	item1.style.display="none";
	item2.style.display="block";
	item3.style.display="none";
}
items3.onmouseover=function(){
	items1.className="";
	items2.className="";
	items3.className="item";
	item1.style.display="none";
	item2.style.display="none";
	item3.style.display="block";
}
var ewm1=document.getElementById("ewm1");
var ewm2=document.getElementById("ewm2");
var ewm3=document.getElementById("ewm3");
ewm1.onmouseover=function(){
	ewm2.style.display="block";
	ewm3.style.display="block";
}
ewm1.onmouseout=function(){
	ewm2.style.display="none";
	ewm3.style.display="none";
}
var ewm21=document.getElementById("ewm21");
var ewm22=document.getElementById("ewm22");
var ewm23=document.getElementById("ewm23");
ewm21.onmouseover=function(){
	ewm22.style.display="block";
	ewm23.style.display="block";
}
ewm21.onmouseout=function(){
	ewm22.style.display="none";
	ewm23.style.display="none";
}
var dp=document.getElementById("dp");
var forw=document.getElementById("forw");
var nex=document.getElementById("nex");
var cloth4=document.getElementById("cloth4");
cloth4.onmouseover=function(){
	forw.style.display="block";
	nex.style.display="block";
}
cloth4.onmouseout=function(){
	forw.style.display="none";
	nex.style.display="none";
}
var csn=0;
forw.onclick=function(){
	if(csn==0)
	{
		csn=-1140;
	}else{
		csn+=570;
	}
	dp.style.marginLeft=csn+"px";	
}
nex.onclick=function(){
	if(csn==-1140)
	{
		csn=0;
	}else{
		csn-=570;
	}
	dp.style.marginLeft=csn+"px";
}
var dp2=document.getElementById("dp2");
var forw2=document.getElementById("forw2");
var nex2=document.getElementById("nex2");
var cloth5=document.getElementById("cloth5");
cloth5.onmouseover=function(){
	forw2.style.display="block";
	nex2.style.display="block";
}
cloth5.onmouseout=function(){
	forw2.style.display="none";
	nex2.style.display="none";
}
var csn2=0;
forw2.onclick=function(){
	if(csn2==0)
	{
		csn2=-1140;
	}else{
		csn2+=570;
	}
	dp2.style.marginLeft=csn2+"px";		
}
nex2.onclick=function(){
	if(csn2==-1140)
	{
		csn2=0;
	}else{
		csn2-=570;
	}
	dp2.style.marginLeft=csn2+"px";
}
var ewm31=document.getElementById("ewm31");
var ewm32=document.getElementById("ewm32");
ewm31.onmouseover=function(){
	ewm32.style.display="block";
}
ewm31.onmouseout=function(){
	ewm32.style.display="none";
}
var deleAd=document.getElementById("deleAd");
var ad=document.getElementById("ad");
deleAd.onclick=function(){
	ad.style.display="none";
}