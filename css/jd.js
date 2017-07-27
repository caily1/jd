*{
	margin: 0 auto;
	padding: 0;
}
body{
	font-size: 12px;
	background: #f6f6f6
}
.ad{
	width:100%;
	background:#f45f9c;
}
.ad_content{
	width:1190px;
	position:relative;
}
.ad_content a{
	display:block;
	width:100%;
	height:80px;
	background:url(../images/ad.jpg);
}
.ad_content i{
	cursor:pointer;
	position:absolute;
	right:5px;
	top:5px;
	font-weight:bold;
	background:#000;
	color:#fff;
	opacity:.3;
	text-align:center;
	line-height:20px;
	font-size:18px;
	width:20px;
	height:20px;
	font-style:normal;
	-webkit-text-stroke-width:.2px;
}
.container{
	width: 100%;
	background-color: #f6f6f6;
}
.content{
	width: 1190px;
}
.top{
	background-color: #e3e4e5;
	border-bottom: 1px solid #ddd;
}
.top .top_top{
	width: 1190px;
	height: 30px;
	line-height: 30px;
	font-size: 12px;
	background-color: #e3e4e5;
	color: #999;
	position: relative;
	clear: both;
}
li{
	list-style: none;
}
#locations{
	float: left;
	margin-left: 200px;
	position: relative;
	padding: 0px 5px;
}
.icon-icon{
	color: #f10215;
}
#city{
	position: absolute;
	left: 0px;
	width: 300px;
	padding: 10px;
	background-color: #fff;
	z-index: 6;
	display: none;
	box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
}
#city ul{
	clear: both;
}
#city ul li{
	float: left;
	width: 60px;
}
#city a{
	text-decoration: none;
	color: rgb(153,153,153);
	padding: 4px;
}
#city a:hover{
	background: #f4f4f4;
	color: #c81623;
}
.act{
	color:#fff;
	background:#F10215;
}
#city ul li .act{
	color:#fff;
	background:#F10215;
}
#ser{
	position: relative;
}
#service{
	position: absolute;
	right: 0;
	background: #fff;
	display: none;
	z-index: 6;
	box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
}
#service ul{
	margin: 10px 0px;
	width: 180px;
}
#service ul li{
	margin: 0;
	width: 85px;
	text-align: left;
}
.a1{
	float: right;
}
.a1 li{
	float: left;
	text-align: center;
	margin: 0px 5px;
	z-index: 6;
}
.a1 li a{
	text-decoration: none;
	color: #666;
	display: inline-block;
	height: 30px;
	padding: 0px 7px;
}
.icon-30{
	font-size: 10px;
}
.line{
	position: relative;
	right: -7px;
}
.a1 li a:hover{
	color: #c81623;
}
#spe{
	color:#f10215;
}
#spe:hover{
	color: #c81623;
}
.myJd{
	position: absolute;
	left: 0;
	width: 280px;
	z-index: 5;
	background-color: #fff;
	box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
}
#myJd{
	display: none;
	z-index: 5;
}
#my{
	border-bottom: none;
	position: relative;
}
.myJd ul{
	margin: 0;
	width: 260px;
	padding: 10px;
}
.myJd ul:nth-of-type(1){
	height: 70px;
	border-bottom: 1px solid rgb(240,240,240);
}
.myJd ul li{
	width: 130px;
	margin: -3px 0px;
	text-align:left;
}
.myJd ul li a{
	margin: 0px;
	border: none;
	font-size: 12px;
}
.header{
	position:relative;
}
.header .logo{
	position: absolute;
	top: -30px;
	z-index: 2;
	background: #fff;
}
.search{
	display: inline-block;
	width: 550px;
	height: 35px;
	line-height: 35px;
	position: relative;
	margin-left: 320px;
	margin-top: 25px;
}
input{
	width: 490px;
	height: 25px;
	padding: 4px;
	color: #666;
	border: 1px solid #f10215;
}
button{
	width: 50px;
	height: 35px;
	line-height: 35px;
	background: #f10215;
	border: none;
	cursor: pointer;
	position: absolute;
	right: 0;
	top: 0;
}
.search span{
	width: 20px;
	height: 15px;
	background: url("../images/sprite-photo-search.png");
	position: absolute;
	right: 65px;
	top: 10px;
	cursor: pointer;
}
.search span:hover{
	background: url("../images/sprite-photo-search.png") -30px 0;
}
.icon-search{
	color: #fff;
	font-size: 20px;
}
.buy{
	display: inline-block;
	width: 188px;
	height: 35px;
	line-height: 35px;
	text-align: center;
	background-color: #fff;
	border: 1px solid #e3e4e5;
	color: #c81623;
	margin-left: 30px;
}
.buy a{
	text-decoration: none;
	color: #c81623;
	font-size:12px;
}
.a2{
	margin-left: 320px;
	clear: both;
	overflow: hidden;
}
.a2 li{
	float: left;
}
.a2 li a{
	text-decoration: none;
	color: #666;
	font-size: 12px;
	margin-right: 10px;
}
.a3{
	display: inline-block;
	margin-left: 200px;
	margin-top: 20px;
	clear: both;
}
.a3 li{
	float: left;
}
.a3 a{
	text-decoration: none;
	display: inline-block;
	color: #555;
	font-size: 16px;
	margin: 5px  10px;
	font-weight: 700;
}
.a3 li:last-of-type a{
	margin-right: 0;
}
.header .a3 li a:hover{
	color: #c81623;
}
.a3>img{
	width: 30px;
	height: 18px;
	margin-top:- 2px;
}
.a4{
	float: right;
	margin-top: 5px;
}
#city ul li  .active{
	background: #f10215;
	color: #fff;
}
#wzdh{
	position: relative;
	z-index: 9;
}
#showWzdh{
	position: absolute;
	right: -80px;
	width: 1188px;	
	background: #fff;
	box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
	clear: both;
	display: none;
	z-index: 9;
}
#showWzdh .tszt,#showWzdh .hypd,#showWzdh .shfw{
	float: left;
	margin: 10px;
	text-align: left;
	border-right: 1px solid #eee;
}
#showWzdh .tszt{
	width:32%;
}
#showWzdh .hypd{
	width: 18%;
}
#showWzdh .shfw{
	width: 20%;
}
#showWzdh .gdjx {
	float: left;
	width: 22%;
	margin: 10px;
}
#showWzdh h3{
	text-align: left;
}
#showWzdh .tszt ul li{
	width: 24%;
	margin: 0;
	text-align: left;
}
#showWzdh a{
	padding: 0;
}
#showWzdh .hypd ul li,#showWzdh .shfw ul li,.gdjx ul li{
	width: 33%;
	margin: 0;
	text-align: left;
}
#jdPhone{
	position: relative;
}
#jd{
	position: absolute;
	width: 60px;
	z-index: 5;
	line-height: 0;
	top: 19px;
	/*display: none;*/
}
#jd i{
	display: inline-block;
	width: 0px;
	height: 0px;
	border-left: 7px solid rgba(255,255,255,0);
	border-right: 7px solid rgba(255,255,255,0);
	border-bottom: 7px solid rgba(255,255,255,1);
	border-top: 7px solid rgba(255,255,255,0);
}
#jd img{
	height: 60px;
}
#phoneJd{
	position: absolute;
	right: 0;
	background: #fff;
	display: none;
	box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
}
.ptop{	
	width: 190px;
	clear: both;
	overflow: hidden;
	border-bottom: 1px solid #d5d5d5;
}
.ptop p{
	line-height: 16px
}
.ptop img{
	float: left;
	width: 70px;
	height: 70px;
	padding: 1px;
	border: 1px solid #d5d5d5;
	margin-right: 5px;
	margin: 10px 0px 10px 6px;
}
.ptop .a{
	float: right;
	text-align: left;
	width: 95px;
	margin-top: 10px;
	margin-right: 10px;
}
.ptop .a p{
	color: #666;
	font-weight: 500;
}
.ptop .a p:nth-of-type(2){
	font-weight: normal;
	color: red;
}
.ptop .a a{
	display: inline-block;
	height: 25px;
	width: 12px;
	background-image:  url(../images/small.png);
	background-repeat: no-repeat;
}
.ptop .a a:nth-of-type(2){
	background-position: 0px -25px;
}
.ptop .a a:nth-of-type(3){
	background-position: 0px -50px;
}
.center{
	width: 100%;
	z-index: 4;
}
.center>a{
	display: inline-block;
	width: 100%;
	height: 480px;
	background-size: 100%;
	background: url(../images/banner.png) scroll 50% 0;
	position: absolute;
}
.center_content{
	width: 1190px;
	clear: both;
	overflow: hidden;
	z-index: 5;
	position: relative;
}
.center_content .left{
	width: 190px;
	float: left;
	padding: 15px 0;
	background-color: #6e6568;
}
.center_content .left ul li{
	padding: 0px 0px 0px 10px;
}
.center_content .left ul li span{
	margin-left: 2px;
	color: #fff;
}
.center_content .left ul li a{
	color: #fff;
	line-height: 30px;
	text-decoration: none;
	font-size: 14px;
}
.center .center_content .left ul li a:hover{
	color: #c81623;
}
.center .center_content .left ul li:hover{
	background-color: #999395;
}
#slider{
	float: left;
	margin-left: 10px;
	position: relative;
}
#forwardImg{
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	color: #fff;
	font-size: 20px;
	text-decoration: none;
	display: block;
	width: 30px;
	line-height: 60px;
	height: 60px;
	background: rgba(0,0,0,0.1);
	text-align: center;
	display: none;
}
#forwardImg:hover{
	background: rgba(0,0,0,.6);
}
#nextImg{
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 0;
	color: #fff;
	font-size: 20px;
	text-decoration: none;
	display: block;
	width: 30px;
	line-height: 60px;
	height: 60px;
	background: rgba(0,0,0,0.1);
	text-align: center;
	display: none;
}
#nextImg:hover{
	background: rgba(0,0,0,.6);
}
#cir{
	background:red;
	position: absolute;
	border-radius: 12px;
	padding: 4px 8px;
	background: rgba(255,255,255,.2);
	position: absolute;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
}
#cir ul li{
	width: 12px;
	float: left;
	height: 12px;
	border-radius: 50%;
	background-color: #fff;
	margin-right: 10px;
}
#cir ul .activeImg{
	background-color: #db192a;
}
.center_foot{
	float: left;
	margin-left: 10px;
	margin-top: 5px;
}
.center_foot a:nth-of-type(2){
	margin-left: 10px;
}
.center_right{
	width: 190px;
	float: right;
	background: #fff;
}
.right_top{
	padding:  15px;
	overflow: hidden;
	clear: both;
	border-bottom: 1px solid #e6e6e6;
}
.right_top>a{
	float: left;
	display: inline-block;
	width: 50px;
	height: 50px;
	background: url(../images/bg1.png) -70px 0px;
	text-align: center;
}
.right_top a img{
	display: inline-block;
	padding: 1px;
	height: 40px;
	margin-top: 5px;
	border-radius: 22px;
}
.right_top p:nth-of-type(1){
	width: 102px;	
	font-size: 12px;
	color: #666;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	margin-left: 8px;
	margin-top: 4px;
}
.right_top p{
	float: left;
}
.right_top p:nth-of-type(2){
	margin-left: 8px;
}
.right_top p:nth-of-type(2) a{
	text-decoration: none;
	color: #666;
	font-size: 12px;
}
.right_top p:nth-of-type(2) a:hover{
	color: #c81623;
}
.right_top p:nth-of-type(3) a{
	color: #e01222;
	border: 2px solid #e01222;
	font-size: 12px;
	display: inline-block;
	width: 70px;
	height: 20px;
	line-height: 20px;
	text-align: center;
	text-decoration: none;
	margin-top: 10px;
}
.right_center .right_center_top a:nth-of-type(3):hover{
	color: #c81623;
}
.right_top p:nth-of-type(3) a:nth-of-type(1){
	margin-right: 10px;	
}
.right_top p:nth-of-type(3) a:hover{
	background: #e01222;
	color: #fff;
}
.right_center {
	height: 154px;
}
.right_center .right_center_top{
	padding: 4px;
	margin:  4px  10px;
	border-bottom: 1px solid #e6e6e6;
	line-height: 14px;
	position: relative;
}
.right_center .right_center_top  #news_tab{
	position: absolute;
	bottom: -1px;
	left: 3px;
	width: 28px;
	height: 2px;
	background: #db192b;
}
.right_center .right_center_top a{
	font-size: 12px;
	text-decoration: none;
	color: #333;
}
.right_center .right_center_top a:nth-of-type(1){
	padding-right: 12px;
	border-right: 1px solid #dfe0e1;
}
.right_center .right_center_top a:nth-of-type(2){
	padding-left: 12px;
}
.right_center .right_center_top a:nth-of-type(3){
	position: absolute;
	right: 0;
	top: 6px;
}
.right_center #right_c1{
	display: none;
}
.right_center #right_c1,.right_center #right_c2{
	position: absolute;
	padding : 10px;
}
.right_center #right_c1 li,.right_center #right_c2 li{
	width: 160px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
.right_center #right_c1 li a,.right_center #right_c2 li a{
	text-decoration: none;
	font-size: 12px;
	color: #666;
	line-height: 24px;
}
.right_center #right_c1 li a:hover,.right_center #right_c2 li a:hover{
	color: #c81623;
}
.right_foot{
	clear: both;
}
.right_foot li{
	width: 46.5px;
	height: 67px;
	float: left;
	text-align: center;
	border-top: 1px solid #dfe0e1;
	border-right: 1px solid #dfe0e1;
}
.right_foot li:nth-of-type(4),.right_foot li:nth-of-type(8),.right_foot li:nth-of-type(12){
	border-right: none;
	padding-right: 1px;
}
.right_foot li a{
	color: #666;
	text-decoration: none;
	font-size: 12px;
}
.right_foot li a span:nth-of-type(1){
	display: inline-block;
	margin-top: 14px;
	width: 24px;
	height: 24px;
	background-image: url(../images/bg3.png);
	background-repeat: no-repeat;
}
.right_foot li a span:nth-of-type(2){
	display: inline-block;
	height: 22px;
	line-height: 22px;
}
span.b1{
	background-position: 0px -88px;
}
span.b2{
	background-position: 0px -44px;
}
span.b3{
	background-position: -44px -88px;
}
span.b4{
	background-position: -88px 0px;
}
span.b5{
	background-position: -88px -44px;
}
span.b7{
	background-position: -44px -44px;
}
span.b8{
	background-position: -88px -88px;
}
span.b9{
	background-position: -132px 0px;
}
span.b10{
	background-position: -132px -44px;
}
span.b11{
	background-position: -132px -88px;
}
span.b12{
	background-position: -44px 0px;
}
.right_foot li:nth-of-type(7){
	position: relative;
}
span.hui{
	position: absolute;
	right: 0;
	top: 0;
	color:#fff;
	background: #c81623;
}
span.hui_foot{
	position: absolute;
	top: 14px;
	right: 0;
	width: 0px;
	height: 0;
	border: solid;
	border-width: 2px 6px;
	border-color: #e01121 #e01121 #fff;
}
.ms{
	clear: both;
	width: 1190px;
	margin-top: 5px;
	background: #fff;
	overflow: hidden;
}
.ms_head{
	float: left;
	z-index: 7;
	width:1190px;
	height: 55px;
	line-height:55px;
	background: url(../images/headBg1.png);
	position:relative;
}
.ms_head .times{
	height:55px;
	line-height:55px;
	width:270px;
	position:absolute;
	right:20px;
	top:-2px;
}
.ms_head .times p{
	display:inline-block;
	color:#fff;
	position:absolute;
	font-size:14px;
}
.ms_head span#hour,.ms_head span#minute,.ms_head span#second{
	display:inline-block;
	width:35px;
	height:37px;
	line-height:37px;
	background:#440106;
	color:#f90013;
	margin-right:10px;
	text-align:center;
	font-size:20px;
}
.ms_head span#hour{
	margin-left:60px;
	margin-top:12px;
}
.ms_head span.mh{
	margin-left:-6px;
	margin-right:4px;
	font-size:16px;
	margin-top:12px;
	display:inline-block;
	width:4px;
	height:37px;
	line-height:37px;
	color:#440106;
	position:absolute;
}
.ms_head span.small_tb1{
	display: inline-block;
	width: 25px;
	height: 25px;
	position: relative;
	top: -15px;
	left: -3px;
	background: url(../images/bg2.png) -190px -48px;
}
.ms_head span.clock{
	display: inline-block;
	width: 34px;
	height: 40px;
	background: url(../images/bg2.png) 0px -30px;
}
h3.title{
	display: inline-block;
	font-size: 26px;
	color: #fff;
	line-height: 40px;
	font-weight: 400;
}
.ms_head a{
	text-decoration: none;
	color: #fff;
	font-size: 14px;
	margin-left: 12px;
}
.ms_head span.small_tb2{
	display: inline-block;
	width: 15px;
	height: 16px;
	background: url(../images/bg2.png) -154px -40px;
	position: relative;
	top: 3px;
}
.ms_left{
	width: 1000px;
	height:240px;
	overflow: hidden;
	float: left;
	position: relative;
	z-index: 5;
}
#forwardPage{
	z-index: 6;
	position: absolute;
	top: 50%;
	left: 7px;
	transform: translateY(-50%);
	width: 20px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	text-decoration: none;
	background: rgba(0,0,0,.1);
	color: #666;
	display:none;
}
#nextPage{
	z-index: 6;
	position: absolute;
	top: 50%;
	right:7px;
	transform: translateY(-50%);
	width: 20px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	text-decoration: none;
	background: rgba(0,0,0,.1);
	color: #666;
	display:none;
}
.ms_left ul{
	clear: both;
	width: 3000px;
	margin-left:-1000px;
}
.ms_left li{
	text-align: left;
	width: 199px;
	float: left;
	border-right: 1px solid #e6e6e6;
}
.ms_left li .product{
	margin: 15px 15px 0px 15px;
	text-align: center;
}
.ms_left li .product a{
	text-decoration: none;
	color:#666;
	font-size: 12px;
}
.ms_left li .product a:hover{
	color: #e01222;
}
.ms_left li .product a:hover img{
	-webkit-transform: translateY(-5px);
	-ms-transform: translateY(-5px);
	-o-transform: translateY(-5px);
	transform: translateY(-5px);
}
.ms_left li .product a p{
	height: 30px;
	line-height: 15px;
	word-break: break-all;
	word-wrap: break-word;
	overflow: hidden;
	margin-top: 10px;
}
.ms_left li .product a span.product_shadow{
	background: url(../images/bg2.png);
	display: inline-block;
	width: 170px;
	height: 20px;
}
.ms_left li.special{
	width: 200px;
	border-right: none;
}
.ms_left li p span:nth-of-type(1){
	color: #f10214;
	display: inline-block;
	font-size:18px;
	font-weight: 700;
	margin-left: 20px;
	margin-top: 5px;
	margin-right: 5px;
}
.ms_left li p span:nth-of-type(2){
	color: #999;
	font-size:12px;
	font-weight: 400;
	text-decoration: line-through;
}
.ms_right{
	float: right;
	width: 180px;
	height: 225px;
	margin: 10px 10px 10px 0px;
}
.three{
	width: 1190px;
	margin-top: 20px;
	overflow: hidden;
}
.fxhh,.ypzj,.phb{
	float: left;
	width: 390px;
	background: #fff;
}
.ypzj{
	margin: 0 10px;
}
.three span.small_icon2{
	position: absolute;
	top: 0;
	left: 0;
	width: 0;
	height: 0;
	border-top: 19px solid #f6f6f6;
	border-right: 19px solid transparent;
}
.three .fx_top h3,.three .yp_top h3,.three .ph_top h3{
	float: left;
	font-size: 26px;
	height: 40px;
	line-height: 40px;
	color: #fff;
	padding-left: 20px;
	padding-top: 5px;
	font-weight: 400;
}
.three .fx_top a,.three .ph_top a,.three .yp_top a{
	color: #fff;
	text-decoration: none;
	float: right;
	margin-top: 19px;
	padding-right: 35px;
}
.fx_top{
	background: #4998a1;
	height: 55px;
	position: relative;
	clear: both;
	overflow: hidden;
}
.yp_top{
	height: 55px;
	background: #76488e;
	position: relative;
	clear: both;
	overflow: hidden;
}
.ph_top{
	height: 55px;
	background: #e77005;
	clear: both;
	overflow: hidden;
	position: relative;
}
.three .fx_top span.small_icon1{
	display: inline-block;
	width: 25px;
	height: 25px;
	position: absolute;
	top: -4px;
	left: -4px;
	background: url(../images/bg2.png) -190px -97px;
}
.three .yp_top span.small_icon1{
	display: inline-block;
	width: 25px;
	height: 25px;
	position: absolute;
	top: -4px;
	left: -4px;
	background: url(../images/small_bg.png);
}
.three .ph_top span.small_icon1{
	display: inline-block;
	width: 25px;
	height: 25px;
	position: absolute;
	top: -4px;
	left: -4px;
	background: url(../images/bg2.png) -190px 0px;
}
.three .ph_top span.small_icon3,.three .yp_top span.small_icon3,.three .fx_top span.small_icon3{
	display: inline-block;
	width: 15px;
	height: 16px;
	background: url(../images/bg2.png) -154px -40px;
	position: absolute;
	right: 15px;
	top: 18px;
}
.fx_center{
	background: #fff;
	padding: 10px;
}
.fx_center ul{
	clear: both;
	overflow: hidden;
}
.fx_center li{
	float: left;
	border-right: 1px solid #e7e7e7;
	border-bottom: 1px solid #e7e7e7;
}
.fx_center li a{
	text-decoration: none;
	color: #4998a1;
	font-size: 14px;
	display: inline-block;
	width: 184px;
	height: 119px;
	position: relative;
}
.fx_center li a p{
	position: absolute;
	top: 15px;
	left: 20px;
	width: 80px;
	line-height: 20px;
	word-wrap: break-word;
}
.fx_center li a img{
	position: absolute;
	bottom: 5px;
	right: 10px;
	width: 80px;
	height: 80px;
}
.fx_center li a img:hover{
	transform: translateX(-5px);
	transition: 1s;
}
.fx_center li:nth-of-type(2n){
	border-right: none;
}
.fx_center li:nth-of-type(5),.fx_center li:nth-of-type(6){
	border-bottom: none;
}
.phb .ph_nav{
	position: relative;
	height: 18px;
	padding: 6px 0px 7px;
	line-height: 14px;
	border-bottom: 1px solid #e6e6e6;
}
.phb .ph_nav a{
	text-decoration: none;
	color: #333;
	font-size: 14px;
	display: inline-block;
	width: 77px;
	text-align: center;
	border-right: 1px solid #dfe0e1;
}
.phb .ph_nav a:last-of-type{
	border-right: none;
}
.phb .ph_nav #ph_tab{
	position: absolute;
	bottom: -1px;
	left: 9px;
	width: 58px;
	height: 2px;
	background: #db192b;
}
#ph_foot1,#ph_foot2,#ph_foot3,#ph_foot4,#ph_foot5{
	overflow: hidden;
	padding: 12px 11px 12px 11px;
	display: none;
}
#ph_foot5{
	display: block;
}
#ph_foot1 ul li,#ph_foot2 ul li,#ph_foot3 ul li,#ph_foot4 ul li,#ph_foot5 ul li{
	text-align: center;
	z-index: 6;
	width: 122px;
	float: left;
	padding: 10px 0px;
	border-right: 1px solid #e7e7e7;
	border-bottom: 1px solid #e7e7e7;
}
#ph_foot1 ul li:nth-of-type(3n),#ph_foot2 ul li:nth-of-type(3n),#ph_foot3 ul li:nth-of-type(3n),#ph_foot4 ul li:nth-of-type(3n),#ph_foot5 ul li:nth-of-type(3n){
	border-right: none;
}
#ph_foot3 ul li:nth-of-type(4),#ph_foot3 ul li:nth-of-type(5),#ph_foot3 ul li:nth-of-type(6){
	border-bottom: none;
}
#ph_foot2 ul li:nth-of-type(4),#ph_foot2 ul li:nth-of-type(5),#ph_foot2 ul li:nth-of-type(6){
	border-bottom: none;
}
#ph_foot1 ul li:nth-of-type(4),#ph_foot1 ul li:nth-of-type(5),#ph_foot1 ul li:nth-of-type(6){
	border-bottom: none;
}
#ph_foot4 ul li:nth-of-type(4),#ph_foot4 ul li:nth-of-type(5),#ph_foot4 ul li:nth-of-type(6){
	border-bottom: none;
}
#ph_foot5 ul li:nth-of-type(4),#ph_foot5 ul li:nth-of-type(5),#ph_foot5 ul li:nth-of-type(6){
	border-bottom: none;
}
#ph_foot1 ul li a,#ph_foot2 ul li a,#ph_foot3 ul li a,#ph_foot4 ul li a,#ph_foot5 ul li a{
	text-decoration: none;
	color: #666;
}
#ph_foot1 ul li p,#ph_foot2 ul li p,#ph_foot3 ul li p,#ph_foot4 ul li p,#ph_foot5 ul li p{
	height: 32px;
	overflow: hidden;
	word-wrap: break-word;
	word-break: break-all;
	line-height: 16px;
	padding: 0 11px;
	margin-top: 10px;
}
#ph_foot1 ul li:nth-of-type(1){
	position: relative;
}
span.sj_spe1{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -104px -40px;
}
span.sj_spe1,span.sj_spe2,span.sj_spe3,span.sj_spe4,span.sj_spe5,span.sj_spe6{
	display: inline-block;	
	color: #fff;
	line-height: 35px;
	font-size: 22px;
	z-index: 10;
	width: 30px;
	height: 40px;
	background-image: url(../images/bg2.png);
	background-repeat: no-repeat;	
}
#ph_foot1 ul li:nth-of-type(2){
	position: relative;
}
span.sj_spe2{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -50px -100px;
}
#ph_foot1 ul li:nth-of-type(3){
	position: relative;
}
span.sj_spe3{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: 0px -100px;
}
#ph_foot1 ul li:nth-of-type(4){
	position: relative;
}
span.sj_spe4{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -100px -100px;
}
#ph_foot1 ul li:nth-of-type(5){
	position: relative;
}
span.sj_spe5{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -100px -100px;
}
#ph_foot1 ul li:nth-of-type(6){
	position: relative;
}
span.sj_spe6{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -100px -100px;
}
#ph_foot2 ul li:nth-of-type(1){
	position: relative;
}
span.sj_spe1{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -104px -40px;
}
#ph_foot2 ul li:nth-of-type(2){
	position: relative;
}
span.sj_spe2{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -50px -100px;
}
#ph_foot2 ul li:nth-of-type(3){
	position: relative;
}
span.sj_spe3{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: 0px -100px;
}
#ph_foot2 ul li:nth-of-type(4){
	position: relative;
}
span.sj_spe4{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -100px -100px;
}
#ph_foot2 ul li:nth-of-type(5){
	position: relative;
}
span.sj_spe5{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -100px -100px;
}
#ph_foot2 ul li:nth-of-type(6){
	position: relative;
}
span.sj_spe6{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -100px -100px;
}
#ph_foot3 ul li:nth-of-type(1){
	position: relative;
}
span.sj_spe1{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -104px -40px;
}
#ph_foot3 ul li:nth-of-type(2){
	position: relative;
}
span.sj_spe2{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -50px -100px;
}
#ph_foot3 ul li:nth-of-type(3){
	position: relative;
}
span.sj_spe3{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: 0px -100px;
}
#ph_foot3 ul li:nth-of-type(4){
	position: relative;
}
span.sj_spe4{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -100px -100px;
}
#ph_foot3 ul li:nth-of-type(5){
	position: relative;
}
span.sj_spe5{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -100px -100px;
}
#ph_foot3 ul li:nth-of-type(6){
	position: relative;
}
span.sj_spe6{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -100px -100px;
}
#ph_foot4 ul li:nth-of-type(1){
	position: relative;
}
span.sj_spe1{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -104px -40px;
}
#ph_foot4 ul li:nth-of-type(2){
	position: relative;
}
span.sj_spe2{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -50px -100px;
}
#ph_foot4 ul li:nth-of-type(3){
	position: relative;
}
span.sj_spe3{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: 0px -100px;
}
#ph_foot4 ul li:nth-of-type(4){
	position: relative;
}
span.sj_spe4{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -100px -100px;
}
#ph_foot4 ul li:nth-of-type(5){
	position: relative;
}
span.sj_spe5{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -100px -100px;
}
#ph_foot4 ul li:nth-of-type(6){
	position: relative;
}
span.sj_spe6{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -100px -100px;
}
#ph_foot5 ul li:nth-of-type(1){
	position: relative;
}
span.sj_spe1{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -104px -40px;
}
#ph_foot5 ul li:nth-of-type(2){
	position: relative;
}
span.sj_spe2{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -50px -100px;
}
#ph_foot5 ul li:nth-of-type(3){
	position: relative;
}
span.sj_spe3{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: 0px -100px;
}
#ph_foot5 ul li:nth-of-type(4){
	position: relative;
}
span.sj_spe4{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -100px -100px;
}
#ph_foot5 ul li:nth-of-type(5){
	position: relative;
}
span.sj_spe5{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -100px -100px;
}
#ph_foot5 ul li:nth-of-type(6){
	position: relative;
}
span.sj_spe6{
	position: absolute;
	top: 10px;
	left: 11px;
	background-position: -100px -100px;
}
#ph_foot1 ul li a:hover,#ph_foot2 ul li a:hover,#ph_foot3 ul li a:hover,#ph_foot4 ul li a:hover,#ph_foot5 ul li a:hover{
	color:#c81623;
}
.quan{
	width: 1190px;
	margin-top: 20px;
	clear: both;
	overflow: hidden;
	background: #fff;
}
.quan_left{
	float: left;
	width: 190px;
	height: 215px;
	background-color: #ea3524;
}
.quan_left a{
	display: inline-block;
	padding: 25px;
	width: 140px;
	height: 165px;text-decoration: none;
	color: #fff;
}
.quan_left a h3{
	height: 36px;
	line-height: 36px;
	font-size: 30px;
	font-weight: 400;
}
.quan_left a span:nth-of-type(1){
	display: inline-block;
	margin-top: 8px;
	margin-bottom: 20px;
	width: 55px;
	height: 3px;
	background-color: #fff;
}
.quan_left a p:nth-of-type(1),.quan_left a p:nth-of-type(2){
	height: 20px;
	line-height: 20px;
}
.quan_left a span:nth-of-type(2){
	display: inline-block;
	margin-top: 20px;
	padding: 2px 36px 4px 15px;
	height: 20px;
	border: 2px solid #fff;
	line-height: 20px;
	position: relative;
}
.quan_left a span:nth-of-type(2) i{
	position: absolute;
	right: 15px;
	top: 5px;
	width: 15px;
	height: 16px;
	background: url(../images/bg2.png) -154px -40px no-repeat;
}
.quan_right{
	overflow: hidden;
}
.quan_right img{
	position: absolute;
	width: 140px;
	height: 140px;
}
.quan_right ul{
	clear: both;
	padding:10px 0px;
}
.quan_right li{
	float: left;
	width:199px;
	height:195px;
}
a{
	text-decoration: none;
}
.quan1 p:nth-of-type(1){
	color:#f10214;
	font-size:34px;
	line-height:36px;
	line-height:36px;
	border-top:2px solid #f10214;
	margin-top:6px;
	position:relative;
	font-weight:700;
}
.quan1 p:nth-of-type(1) span{
	font-size:12px;
}
.quan1 p:nth-of-type(2){
	line-height:18px;
	color:#e93524;
	padding:0px 3px;
	height:36px;
	overflow:hidden;
}
.quan1 p:nth-of-type(3){
	color:#666;
	display:inline-block;
	widows:80px;
	height:36px;
	padding:15px 10px;
	background:#e7e7e7 url(../images/small_bg.jpg) repeat-x 0 0;
}
.quan1 p:nth-of-type(4){
	display:inline-block;
	width:100%;
	height:26px;
	line-height:26px;
	color:#fff;
	background:#e93524;
	overflow:hidden;
	white-space:nowrap;
	text-align:center;
}
.quan_right li:nth-of-type(1) a:hover img{
	transform:translateX(10px);
	transition:1s;
}
.quan_right li:nth-of-type(1) img{
	position:absolute;
	right:15px;
	top:25px;
}
.quan_right li:nth-of-type(2) a:hover img{
	transform:translateX(10px);
	transition:1s;
}
.quan_right li:nth-of-type(2) img{
	position:absolute;
	right:15px;
	top:25px;
}
.quan_right li:nth-of-type(3) a:hover img{
	transform:translateX(10px);
	transition:1s;
}
.quan_right li:nth-of-type(3) img{
	position:absolute;
	right:15px;
	top:25px;
}
.quan_right li:nth-of-type(4) a:hover img{
	transform:translateX(10px);
	transition:1s;
}
.quan_right li:nth-of-type(4) img{
	position:absolute;
	right:15px;
	top:25px;
}
.quan_right li:nth-of-type(5) a:hover img{
	transform:translateX(10px);
	transition:1s;
}
.quan_right li:nth-of-type(5) img{
	position:absolute;
	right:15px;
	top:25px;
}
.quan1{
	width: 100px;
	position:absolute;
	left:15px;
	top:15px;
	z-index:5;
	background:#fff;
}
.quan_right li:nth-of-type(1){
	position:relative;
	border-right:1px solid #e7e7e7;
}
.quan_right li:nth-of-type(2){
	position:relative;
	border-right:1px solid #e7e7e7;
}
.quan_right li:nth-of-type(3){
	position:relative;
	border-right:1px solid #e7e7e7;
}
.quan_right li:nth-of-type(4){
	position:relative;
	border-right:1px solid #e7e7e7;
}
.quan_right li:nth-of-type(5){
	position:relative;
}
.big{
	width: 100%;
	background: #e0e0e0;
	margin-top: 30px;
	overflow: hidden;
}
.big_center{
	width: 1190px;
}
.big_center ul{
	clear: both;
}
.big_center ul li{
	float: left;
}
.big_center ul li a:hover{
	opacity:.8;
}
.enjoy{
	width:1190px;
	margin-top:30px;
	height:35px;
	background:url(../images/small_bg2.png) repeat-x 0 18px;
	text-align:center;
}
.enjoy h3{
	display:inline;
	color:#333;
	padding:0 50px;
	background:#f6f6f6;
	font-weight:400;
	font-size:26px;
}
.life{
	width:1190px;
	margin-top:20px;
	overflow:hidden;
}
.life ul{
	clear:both;
	width:100%;
}
.life ul li{
	float:left;
	width:390px;
	overflow:hidden;
	margin-top:8px;
	margin-right:10px;
}
.life>ul li a{
	display:block;
	width:390px;
	height:170px;
	cursor:pointer;
}
.life ul li img{
	width:400px;
	height:170px;
	position:relative;
	z-index:4;
}
.life ul li a:hover img{
	transform:translateX(-10px);
	transition:1s;
}
.life ul li:nth-of-type(1){
	margin-right:0;
	float:right;
	background: #fff;
}
.pz_left{
	position:absolute;
	z-index:5;
	background:#59b07d;
	height:170px;
	width:144px;
	color:#fff;
	font-weight:400;
}
.life ul li:nth-of-type(3) .pz_left{
	background:#d9cc62;
}
.life ul li:nth-of-type(4) .pz_left{
	background:#d57172;
}
.life ul li:nth-of-type(5) .pz_left{
	background:#7e5944;
}
.life ul li:nth-of-type(6) .pz_left{
	background:#534b5d;
}
.life ul li:nth-of-type(7) .pz_left{
	background:#3b838c;
}
.life ul li:nth-of-type(8) img,.life ul li:nth-of-type(9) img{
	width:200px;
	height:170px;
}
.life ul li:nth-of-type(9){
	margin-right:0px;
}
.life ul li:nth-of-type(8),.life ul li:nth-of-type(9){
	width:190px;
}
.life ul li:nth-of-type(8) .pz_left{
	background:#642663;
	height:80px;
	width:190px;
	position:absolute;
	bottom:0;
}
.life ul li:nth-of-type(9){
	position:relative;
}
.life ul li:nth-of-type(9) .pz_left{
	background:#a93931;
	height:80px;
	width:190px;
	position:absolute;
	bottom:0;
}
.pz_left h4{
	display:block;
	width:100px;
	height:40px;
	line-height:40px;
	margin-top:45px;
	border-top:2px solid #fff;
	border-bottom:2px solid #fff;
	font-size:22px;
	font-weight:400;
	text-align:center;
}
.life ul li:nth-of-type(9) .pz_left h4,.life ul li:nth-of-type(8) .pz_left h4{
	height:34px;
	line-height:34px;
	margin-top:10px;
	font-size:16px;
}
.pz_left p{
	margin-top:8px;
	display:block;
	width:100px;
	height:32px;
	line-height:16px;
	font-size:14px;
	overflow:hidden;
	text-align:left;
}
.life ul li:nth-of-type(9) .pz_left p,.life ul li:nth-of-type(8) .pz_left p{
	white-space:nowrap;
	height:16px;
	overflow:hidden;
	text-overflow:ellipsis;
	text-align:center;
}
.life{
	position:relative;
}

.life_head a h4{
	display:inline-block;
	font-weight:400;
	font-size:16px;
	line-height:38px;
	text-indent:24px;
}
.life_head a span{
	display:inline-block;
	height:38px;
	line-height:38px;
	padding-right:24px;
	margin-left:230px;
}
.life_head a span i{
	position:absolute;
	right:20px;
	top:11px;
	display:inline-block;
	border:1px solid #000;
	width:15px;
	height:16px;
	background:url(../images/bg2.png) no-repeat -154px -40px;
}
.ypzj_center,.ypzj_center1,.ypzj_center2{
	position:absolute;
	overflow:hidden;
	height:380px;
	padding-top:8px;
	background:#fff;
	z-index:6;
}
.ypzj_center1,.ypzj_center2{
	display:none;
}
.ypzj_center a,.ypzj_center1 a,.ypzj_center2 a{
	display:block;
	width:360px;
	height:156px;
	overflow:hidden;
	text-align:center;	
	font-size:14px;
	line-height:16px;
	text-decoration:none;
	color:#666;
	margin:0 15px 18px;
}
.ypzj_center a p,.ypzj_center1 a p,.ypzj_center2 a p{
	margin-top:15px;
	margin-bottom:15px;
	white-space:nowrap;
	text-align:left;
	margin-left:8px;
}
.cir2{
	position:absolute;
	bottom:15px;
	left:50%;
	z-index:7;
	transform:translateX(-50%);
}
.centerr{
	width:390px;
	height:389px;
	background:#fff;
	overflow:hidden;
	z-index:6;
}
.ypzj_center,.ypzj_center1,.ypzj_center2{
	position:absolute;
}
.ypzj_center1,.ypzj_center2{
	display:none;
}
.ypzj_center a,.ypzj_center1 a,.ypzj_center2 a{
	display:block;
	width:360px;
	height:156px;
	overflow:hidden;
	text-align:center;	
	font-size:14px;
	line-height:16px;
	text-decoration:none;
	color:#666;
	margin:0 15px 18px;
}
.ypzj_center a p,.ypzj_center1 a p,.ypzj_center2 a p{
	margin-top:15px;
	margin-bottom:15px;
	white-space:nowrap;
	text-align:left;
	margin-left:8px;
}
.centerr{
	position:relative;
}
.cir2{
	position:absolute;
	bottom:15px;
	left:50%;
	transform:translateX(-50%);
}
.cir2 ul{
	clear:both;
}
.cir2 ul li{
	float:left;
	width:8px;
	height:8px;
	margin:0 7px;
	border-radius:50%;
	background:#c8c8c8;
}
.cir2 ul li.item{
	background:#db192a;
}
#fors{
	display:inline-block;
	width:20px;
	height:50px;
	color:#797173;
	background:#f3f2f3;
	text-align:center;
	position:absolute;
	left:0;
	top:50%;
	transform:translateY(-50%);
	text-decoration:none;
	line-height:50px;
	z-index:7;
	display:none;
}
#nexts{
	display:inline-block;
	width:20px;
	height:50px;
	color:#797173;
	background:#f3f2f3;
	text-align:center;
	position:absolute;
	right:0;
	top:50%;
	z-index:7;
	transform:translateY(-50%);
	text-decoration:none;
	line-height:50px;
	display:none;
}
.enjoy_life{
	width:1190px;
	margin-top:20px;
	overflow:hidden;
	clear:both;
}
.cloth{
	width:590px;
	float:left;
	overflow:hidden;
	margin-right:10px;
}
.beauty{
	width:590px;
	float:right;
	overflow:hidden;
}
.cloth_head{
	width:100%;	
	height:26px;
	padding:16px 20px 16px 25px;
	background:linear-gradient(90deg,#974676,#9e4075);
}
.beauty_head{
	width:100%;	
	height:26px;
	line-height:26px;
	padding:16px 20px 16px 25px;
	background:linear-gradient(90deg,#cd375e,#c1314d);
}
.cloth_head h3,.beauty_head h3{
	font-size:22px;
	color:#fff;
	display:inline-block;
	height:26px;
	line-height:30px;
	font-weight:400;
}
.cloth_head span,.beauty_head span{
	display:inline-block;
	width:20px;
	height:20px;
	background:url(../images/small_bg3.png);
	margin-left:15px;
	position:relative;
	top:3px;
}
.cloth_head_nav{
	display:inline-block;
	margin-left:100px;
}
.beauty_head_nav{
	display:inline-block;
	margin-left:60px;
}
.cloth_head_nav a,.beauty_head_nav a{
	display:inline-block;
	font-weight:500;
	height:24px;
	line-height:24px;
	border:1px solid #c187af;
	color:#fff;
	padding:0 10px;
	margin:5px;
	background:hsla(0,0%,100%,.2);
}
.cloth_content,.beauty_content{
	background:#fff;
	padding:10px;
	overflow:hidden;
	clear:both;
}
.cloth1,.beauty1{
	float:left;
	width:183px;
	overflow:hidden;
}
.cloth1:hover img,.beauty1:hover img{
	transform:translateX(-10px);
	transition:0.6s ease;
}
.cloth2{
	float:right;
	width:380px;
	
}
.cloth2 ul{
	clear:both;
}
.cloth2 ul li{
	width:188px;
	float:left;
	height:130px;
}
.cloth2 ul li img:hover{
	transform:translateX(-5px);
	transition:0.6s ease;
}
.cloth2 ul li:nth-of-type(1){
	position:relative;
	border-bottom:1px solid #e6e6e6;
	border-right:1px solid #e6e6e6;
}
.cloth2 ul li:nth-of-type(1) p:nth-of-type(1){
	color:#974676;
	font-size:14px;
	position:absolute;
	top:25px;
	left:25px;
	z-index:6;
}
.cloth2 ul li:nth-of-type(1) p:nth-of-type(2){
	color:#666;
	font-size:12px;
	position:absolute;
	top:50px;
	left:25px;
	max-width:50px;
	overflow:hidden;
	z-index:6;
}
.cloth2 ul li:nth-of-type(1) img{
	position:absolute;
	bottom:10px;
	right:5px;
	z-index:5;
}
.cloth2 ul li:nth-of-type(2){
	position:relative;
	border-bottom:1px solid #e6e6e6;
}
.cloth2 ul li:nth-of-type(2) p:nth-of-type(1){
	color:#974676;
	font-size:14px;
	position:absolute;
	top:25px;
	left:25px;
	z-index:6;
}
.cloth2 ul li:nth-of-type(2) p:nth-of-type(2){
	color:#666;
	font-size:12px;
	position:absolute;
	top:50px;
	left:25px;
	max-width:50px;
	overflow:hidden;
	z-index:6;
}
.cloth2 ul li:nth-of-type(2) img{
	position:absolute;
	bottom:10px;
	right:5px;
	z-index:5;
}
.cloth2 ul li:nth-of-type(3){
	position:relative;
	border-right:1px solid #e6e6e6;
}
.cloth2 ul li:nth-of-type(3) p:nth-of-type(1){
	color:#974676;
	font-size:14px;
	position:absolute;
	top:25px;
	left:25px;
	z-index:6;
}
.cloth2 ul li:nth-of-type(3) p:nth-of-type(2){
	color:#666;
	font-size:12px;
	position:absolute;
	top:50px;
	left:25px;
	max-width:50px;
	overflow:hidden;
	z-index:6;
}
.cloth2 ul li:nth-of-type(3) img{
	position:absolute;
	bottom:10px;
	right:5px;
	z-index:5;
}
.cloth2 ul li:nth-of-type(4){
	position:relative;
}
.cloth2 ul li:nth-of-type(4) p:nth-of-type(1){
	color:#974676;
	font-size:14px;
	position:absolute;
	top:25px;
	left:25px;
	z-index:6;
}
.cloth2 ul li:nth-of-type(4) p:nth-of-type(2){
	color:#666;
	font-size:12px;
	position:absolute;
	top:50px;
	left:25px;
	max-width:50px;
	overflow:hidden;
	z-index:6;
}
.cloth2 ul li:nth-of-type(4) img{
	position:absolute;
	bottom:10px;
	right:5px;
	z-index:5;
}
.cloth3{
	float:left;
	margin-top:10px;
	overflow:hidden;
}
.cloth3 a{
	display:inline-block;
	width:183px;
	overflow:hidden;
	margin-right:10px;
}
.cloth3 a:nth-of-type(3){
	margin-right:0;
}
.cloth3 a:hover img{
	transform:translateX(-5px);
	transition:0.6s ease;
}
#ewm2,#ewm3{
	display:none;
}
.cloth_head span{
	position:relative;
}
.cloth_head .ewm1{
	z-index:8;
	top:36px;
	left:-40px;
	position:absolute;
	color:#974676;
	background:#fff;
	text-align:center;
	padding:10px
}
.cloth_head i{
	display:block;
	position:absolute;
	top:20px;;
	width:0px;
	height:0px;
	border-width:8px;
	border-color:#974676 #974676 #fff;
	border-style:solid;
}
.cloth_head .ewm1 img{
	padding:8px 8px 2px 8px;
}
#ewm22,#ewm23{
	display:none;
}
.beauty_head span{
	position:relative;
}
.beauty_head .ewm1{
	z-index:8;
	top:36px;
	left:-45px;
	position:absolute;
	color:#cd375e;
	background:#fff;
	text-align:center;
	padding:10px;
}
.beauty_head i{
	display:block;
	position:absolute;
	top:20px;
	left:2px;
	width:0px;
	height:0px;
	border-width:8px;
	border-color:#cd375e #cd375e #fff;
	border-style:solid;
}
.beauty_head .ewm1 img{
	padding:8px 8px 2px 8px;
}
.cloth4{
	float:left;
	width:570px;
	height:30px;
}
.cloth4 ul{
	clear:both;
	height:100%;
	overflow:hidden;
	width:1710px;
}
.cloth4 ul li{
	float:left;
	height:100%;
	padding:0 12px;
	border-right:1px solid #e7e7e7;
}
.cloth4 ul li.sp1{
	border-right:1px solid #fff;
}
.cloth4{
	position:relative;
}
#forw{
	position:absolute;
	top:50%;
	transform:translateY(-5px);
	background:#fff;
	display:block;
	height:35px;
	font-weight:700;
	text-align:center;
	color:#736b6f;
	display:none;
}
#nex{
	position:absolute;
	top:50%;
	right:0;
	background:#fff;
	display:block;
	height:35px;
	font-weight:700;
	text-align:center;
	color:#736b6f;
	transform:translateY(-5px);
	display:none;
}
#forw:hover,#nex:hover{
	color:#c81623;
}
.cloth5{
	position:relative;
}
#forw2{
	position:absolute;
	top:50%;
	transform:translateY(-5px);
	background:#fff;
	display:block;
	height:35px;
	font-weight:700;
	text-align:center;
	color:#736b6f;
	display:none;
}
#nex2{
	position:absolute;
	top:50%;
	right:0;
	background:#fff;
	display:block;
	height:35px;
	font-weight:700;
	text-align:center;
	color:#736b6f;
	transform:translateY(-5px);
	display:none;
}
#forw2:hover,#nex2:hover{
	color:#c81623;
}
.ts{
	width:1190px;
	margin-top:20px;
}
.ts ul{
	width:100%;
	clear:both;
	overflow:hidden;
}
.ts ul li{
	float:left;
	margin-right:10px;
	width:160px;
	height:140px;
	//overflow:hidden;
}
.ts ul li a{
	display:inline-block;
	width:100%;
	height:100%;
	color:#fff;
}
.ts ul li:last-of-type{
	margin-right:0;	
}
.ts ul li a h3{
	font-weight:400;
	line-height:24px;
	font-size:20px;
	padding-top:10px;
}
.ts ul li a p{
	pading:0 10px;
	font-weight:700;
	overflow:hidden;
	text-overflow:ellipsis;
	whhite-space:nowrap;
}
.ts ul li:nth-of-type(1){
	position:relative;
	margin-left:5px;
}
.ts ul li a .spe1{
	position:absolute;
	bottom:0px;
	width:100%;
	height:60px;
	background:#886049;
	text-align:center;
	overflow:hidden;
}
.ts ul li:nth-of-type(2){
	position:relative;
}
.ts ul li a .spe2{
	position:absolute;
	bottom:0px;
	width:100%;
	height:60px;
	background:#74567B;
	text-align:center;
	overflow:hidden;
}
.ts ul li:nth-of-type(3){
	position:relative;
}
.ts ul li a .spe3{
	position:absolute;
	bottom:0px;
	width:100%;
	height:60px;
	background:#ca3030;
	text-align:center;
	overflow:hidden;
}
.ts ul li:nth-of-type(4){
	position:relative;
}
.ts ul li a .spe4{
	position:absolute;
	bottom:0px;
	width:100%;
	height:60px;
	background:#459263;
	text-align:center;
	overflow:hidden;
}
.ts ul li:nth-of-type(5){
	position:relative;
}
.ts ul li a .spe5{
	position:absolute;
	bottom:0px;
	width:100%;
	height:60px;
	background:#da5d40;
	text-align:center;
	overflow:hidden;
}
.ts ul li:nth-of-type(6){
	position:relative;
}
.ts ul li a .spe6{
	position:absolute;
	bottom:0px;
	width:100%;
	height:60px;
	background:#4f87b1;
	text-align:center;
	overflow:hidden;
}
.ts ul li:nth-of-type(7){
	position:relative;
}
.ts ul li a .spe7{
	position:absolute;
	bottom:0px;
	width:100%;
	height:60px;
	background:#d5bb09;
	text-align:center;
	overflow:hidden;
}
.hm{
	width:1190px;
	margin-top:20px;
	overflow:hidden;
}
.hm ul{
	clear:both;
	overflow:hidden;
	width:100%;
}
.hm ul li{
	width:220px;
	float:left;
	background:#fff;
	margin-right:10px;
	text-align:center;
	padding:4px;
	border:1px solid #fff;
	margin-bottom:10px;
}
.hm ul li.specially{
	margin-right:0;
}
.hm ul li a{
	color:#666;
	text-align:left;
}
.hm ul li a .s1{
	padding:5px;
}
.hm ul li a .s1 p:nth-of-type(1){
	height:36px;
	line-height:18px;
	overflow:hidden;
	margin-bottom:5px;
}
.hm ul li a .s1 p:nth-of-type(2){
	color:#f10214;
}
.hm ul li a .s1 p:nth-of-type(2) i{
	font-weight:400;
	font-style:normal;
	margin-right:3px;
}
.hm ul li:hover{
	border:1px solid #f10214;
}
.hm ul li:hover a{
	color:#f10214;
}
.foot{
	margin-top:30px;
	width:100%;
	padding:30px 0;
	background:#EAEAEA;
	border-bottom:1px solid #E1E1E1;
}
.foot_content{
	width:1190px;
}
.foot_content ul{
	width:100%;
	clear:both;
	overflow:hidden;
}
.foot_content ul li{
	float:left;
	width:25%;
	text-align:center;
}
.foot_content ul li .wz{
	height:42px;
}
.foot_content ul li .wz h5{
	width:36px;
	height:42px;
	display:inline-block;
	background-image:url(../images/bg5.png);
	background-repeat:no-repeat;
}
.foot_content ul li:nth-of-type(1){
	position:relative;
}
.foot_content ul li:nth-of-type(1) .wz h5{
	position:absolute;
	top:0;
}
.foot_content ul li:nth-of-type(2){
	position:relative;
}
.foot_content ul li:nth-of-type(2) .wz h5{
	background-position:0 -42px;
	position:absolute;
	top:0;
}
.foot_content ul li:nth-of-type(3){
	position:relative;
}
.foot_content ul li:nth-of-type(3) .wz h5{
	background-position:0 -85px;
	position:absolute;
	top:0;
}
.foot_content ul li:nth-of-type(4){
	position:relative;
}
.foot_content ul li:nth-of-type(4) .wz h5{
	background-position:0 -128px;
	position:absolute;
	top:0;
}
.foot_content ul li .wz p{
	display:inline-block;
	font-size:18px;
	height:42px;
	line-height:42px;
	font-weight:700;
	color:#444;
	margin-left:45px;
}
.footer{
	width:100%;
	background:#eaeaea;
}
.footer_content{
	padding:20px 0;
	width:1190px;
	clear:both;
	overflow:hidden;
	border-bottom:1px solid #E1E1E1;
}
.help1{
	float:left;
	width:198px;
	color:#666;
	line-height:22px;
}
.help1 h5{
	margin-bottom:5px;
	font-size:14px;
}
.help1 ul li a{
	color:#666;
}
.help1 ul li a:hover{
	color:#c81623;
}
.help2{
	float:right;
	width:200px;
	clor:#666;
	line-height:18px;
}
.help2 h5{
	color:#666;
	margin-bottom:15px;
	fontt-size:14px;
	text-align:center;
}
.help2 p{
	color:#666;
	padding:0px 10px;
}
.help2 a{
	display:block;
	color:#666;
	text-align:right;
}
.help2 p:nt-of-type(2){
	text-align:right;
}
.help2 a:hover{
	color:#c81623;
}
.footer_text{
	width:1190px;
	padding:10px 0px;
	overflow:hidden;
	text-align:center;
}
.footer_text p:nth-of-type(1){
	margin-bottom:10px;
}
.footer_text p:nth-of-type(1) a{
	padding:0px 10px;
	border-right:1px solid #ccc;
	color:#666;
}
.footer_text p:nth-of-type(1) a:hover{
	color:#c81623;
}
.footer_text p:nth-of-type(1) a:last-of-type{
	border-right:none;
}
.footer_text p{
	line-height:22px;
	color:#999;
}
.footer_text p a{
	color:#999;
	padding:0 10px;
	border-right:1px solid #ccc;
}
.footer_text p span{
	padding:0 10px;
	border-right:1px solid #ccc;
}
.footer_text p:nth-of-type(2) span:last-of-type{
	border-right:none;
}
.footer_text p:nth-of-type(3) span:last-of-type{
	border-right:none;
}
.footer_text p:nth-of-type(4) a:last-of-type{
	border-right:none;
}
.footer_text p:nth-of-type(4) span:last-of-type{
	border-right:none;
}
.footer_text p:nth-of-type(5) a:last-of-type{
	padding:0px 0px 0px 10px;
	border-right:none;
}
.footer_text p:nth-of-type(5) a:nth-of-type(1){
	padding:0px 10px 0px 0px;
}
.footer_text p:nth-of-type(5) span:last-of-type{
	border-right:none;
	padding:0;
}
p.lastP{
	margin-top:15px;
	overflow:hidden;
}
p.lastP a{
	color:#666;
	display:inline-block;
	width:103px;
	height:32px;
	border-right:none;
	padding:0;
	background-image:url(../images/bg6.png);
	background-repeat:no-repeat;
	margin:0 3px;
}
p.lastP a:nth-of-type(1){
	background-position:0px -150px;
}
p.lastP a:nth-of-type(2){
	background-position:-103px -150px;
}
p.lastP a:nth-of-type(3){
	background-position:0px -184px;
}
p.lastP a:nth-of-type(4){
	background-position:-103px -184px;
}
p.lastP a:nth-of-type(5){
	background-position:0px -217px;
}
p.lastP a:nth-of-type(6){
	background-position:-103px -217px;
}
.cloth_head_nav a:hover{
	border:1px solid #fff;
}
.beauty_head_nav a:hover{
	border:1px solid #fff;
}
.ls{
	margin-top:20px;
	width:1190px;
}
.ls_head{
	height:26px;
	padding:16px 20px 16px 25px;
	color:#fff;
	clear:both;
	background:linear-gradient(90deg,#eeb924,#e49433);
}
.ls_head h3{
	float:left;
	font-size:22px;
	height:26px;
	line-height:30px;
	font-weight:400;
	max-width:100px;
	word-break:break-all;
	word-wrap:break-word;
	white-space:nowrap;
	text-overflow:ellipsis;
}
.ls_head .aa1{
	float:left;
	position:relative;
	height:32px;
	z-index:10;
	margin-left:15px;
	padding-top:3px;
}
.ls_head .aa1 .aa2{
	width:20px;
	height:20px;
	background:url(../images/small_bg3.png);
}
.ls_head .aa1 .ewm3{
	position:absolute;
	left:-42px;
	top:42px;
	background:#fff;
	text-align:center;
	border-style:solid;
	border-color:#eeb924;
	border-width:0 1px 1px;
	width:103px;
	box-shadow:0 0 3px rgba(45,45,45,.5);
	display:none;
}
.ls_head .aa1 .ewm3 .bj{
	position:absolute;
	top:-14px;
	left:44px;
	width:0;
	height:0;
	border-color:#eeb924 #eeb924 #fff;
	border-width:8px;
	border-style:solid;
}
.ls_head .aa1 .ewm3 .ewm_3{
	width:80px;
	padding-top:10px;
}
.ls_head .aa1 .ewm3 .ewm_3 p{
	color:#eeb924;
	line-height:30px;
}
.ls_head .ls_head_nav{
	max-width:1005px;
	float:right;
	height:28px;
	text-align:right;
	overflow:hidden;
}
.ls_head .ls_head_nav a{
	border:1px solid #f9d661;
	color:#fff;
	background:#f9d661;
	display:inline-block;
	height:24px;
	line-height:24px;
	padding:0 10px;
	margin-left:10px;
	max-width:100px;
	overflow:hidden;
}
.ls_head .ls_head_nav a:hover{
	border:1px solid #fff;
}
.ls_content{
	background:#fff;
	width:100%;
	clear:both;
	overflow:hidden;
	z-index:10;
}
.ls_content .ls_left{
	float:left;
	width:570px;
	position:relative;
	border-right:1px solid #e6e6e6;
	margin:10px;
	padding-right:10px;
	height:403px;
}
.ls_left1{
	float:left;
	width:183px;
	overflow:hidden;
}
.ls_left1:hover img{
	transform:translateX(-10px);
	transition:0.6s ease;
}
.ls_left2{
	float:right;
	width:380px;	
}
.ls_left2 ul{
	clear:both;
}
.ls_left2 ul li{
	width:188px;
	float:left;
	height:130px;
}
.ls_left2 ul li img:hover{
	transform:translateX(-5px);
	transition:0.6s ease;
}
.ls_left2 ul li:nth-of-type(1){
	position:relative;
	border-bottom:1px solid #e6e6e6;
	border-right:1px solid #e6e6e6;
}
.ls_left2 ul li:nth-of-type(1) p:nth-of-type(1){
	color:#eeb924;
	font-size:14px;
	position:absolute;
	top:25px;
	left:25px;
	z-index:6;
}
.ls_left2 ul li:nth-of-type(1) p:nth-of-type(2){
	color:#666;
	font-size:12px;
	position:absolute;
	top:50px;
	left:25px;
	max-width:50px;
	overflow:hidden;
	z-index:6;
}
.ls_left2 ul li:nth-of-type(1) img{
	position:absolute;
	bottom:10px;
	right:5px;
	z-index:5;
}
.ls_left2 ul li:nth-of-type(2){
	position:relative;
	border-bottom:1px solid #e6e6e6;
}
.ls_left2 ul li:nth-of-type(2) p:nth-of-type(1){
	color:#eeb924;
	font-size:14px;
	position:absolute;
	top:25px;
	left:25px;
	z-index:6;
}
.ls_left2 ul li:nth-of-type(2) p:nth-of-type(2){
	color:#666;
	font-size:12px;
	position:absolute;
	top:50px;
	left:25px;
	max-width:50px;
	overflow:hidden;
	z-index:6;
}
.ls_left2 ul li:nth-of-type(2) img{
	position:absolute;
	bottom:10px;
	right:5px;
	z-index:5;
}
.ls_left2 ul li:nth-of-type(3){
	position:relative;
	border-right:1px solid #e6e6e6;
}
.ls_left2 ul li:nth-of-type(3) p:nth-of-type(1){
	color:#eeb924;
	font-size:14px;
	position:absolute;
	top:25px;
	left:25px;
	z-index:6;
}
.ls_left2 ul li:nth-of-type(3) p:nth-of-type(2){
	color:#666;
	font-size:12px;
	position:absolute;
	top:50px;
	left:25px;
	max-width:50px;
	overflow:hidden;
	z-index:6;
}
.ls_left2 ul li:nth-of-type(3) img{
	position:absolute;
	bottom:10px;
	right:5px;
	z-index:5;
}
.ls_left2 ul li:nth-of-type(4){
	position:relative;
}
.ls_left2 ul li:nth-of-type(4) p:nth-of-type(1){
	color:#eeb924;
	font-size:14px;
	position:absolute;
	top:25px;
	left:25px;
	z-index:6;
}
.ls_left2 ul li:nth-of-type(4) p:nth-of-type(2){
	color:#666;
	font-size:12px;
	position:absolute;
	top:50px;
	left:25px;
	max-width:50px;
	overflow:hidden;
	z-index:6;
}
.ls_left2 ul li:nth-of-type(4) img{
	position:absolute;
	bottom:10px;
	right:5px;
	z-index:5;
}
.ls_left3{
	float:left;
	margin-top:10px;
	overflow:hidden;
}
.ls_left3 a{
	display:inline-block;
	width:183px;
	overflow:hidden;
	margin-right:10px;
}
.ls_left3 a:nth-of-type(3){
	margin-right:0;
}
.ls_left3 a:hover img{
	transform:translateX(-5px);
	transition:0.6s ease;
}
.ls_right{
	float:left;
	margin:10px 0;
}
.ls_right1{
	float:left;
	width:183px;
	overflow:hidden;
}
.ls_right1{
	margin-right:10px;
	margin-bottom:10px;
}
.ls_right1:hover img{
	transform:translateX(-10px);
	transition:0.6s ease;
}
.ls_right2{
	float:right;
	width:188px;
}
.ls_right2 ul{
	width:100%;
}
.ls_right2 ul li{
	float:left;
	width:100%;
}
.ls_right2 ul li{
	float:right;
	height:130px;
}
.ls_right2 ul li:nth-of-type(1){
	position:relative;
	border-bottom:1px solid #e6e6e6;
}
.ls_right2 ul li:nth-of-type(1) p:nth-of-type(1){
	color:#eeb924;
	font-size:14px;
	position:absolute;
	top:25px;
	left:25px;
	z-index:6;
}
.ls_right2 ul li:nth-of-type(1) p:nth-of-type(2){
	color:#666;
	font-size:12px;
	position:absolute;
	top:50px;
	left:25px;
	max-width:50px;
	overflow:hidden;
	z-index:6;
}
.ls_right2 ul li:nth-of-type(1) img{
	position:absolute;
	right:5px;
	bottom:10px;
}
.ls_right2 ul li:nth-of-type(2){
	position:relative;
	padding-bottom:12px;
}
.ls_right2 ul li:nth-of-type(2) p:nth-of-type(1){
	color:#eeb924;
	font-size:14px;
	position:absolute;
	top:25px;
	left:25px;
	z-index:6;
}
.ls_right2 ul li:nth-of-type(2) p:nth-of-type(2){
	color:#666;
	font-size:12px;
	position:absolute;
	top:50px;
	left:25px;
	max-width:50px;
	overflow:hidden;
	z-index:6;
}
.ls_right2 ul li:nth-of-type(2) img{
	position:absolute;
	right:5px;
	bottom:10px;
}
.ls_right2 ul li img:hover{
	transform:translateX(-5px);
	transition:0.6s ease;
}
.ls_right3{
	margin-top:10px;
}
.ls_right3 a{
	display:inline-block;
	overflow:hidden;
	width:183px;
}
.ls_right3 a:hover img{
	transform:translateX(-5px);
	transition:0.6s ease;
}
.ls_right3 a:nth-of-type(1),.ls_right3 a:nth-of-type(2){
	margin-right:10px;
}
.life1{
	width: 390px;
	background: #fff;
}
.life1 .life1_head{
	margin-top: 8px;
	width: 390px;
	height: 38px;
	position: absolute;
	top: 0;
	background: rgba(0,0,0,.57);
	z-index: 10;
}
.life1 .life1_head a{
	position: absolute;
	top: 0;
	left: 0;
	width: 390px;
	height: 38px;
	line-height: 38px;
	color: #fff;
	text-decoration: none;
}
.life1 .life1_head a h4{
	line-height: 38px;
	font-size: 16px;
	font-weight: 400;
	text-indent: 24px;
}
.life1 .life1_head a  span{
	position: absolute;
	right: 20px;
	top: 0;
	line-height: 38px;
	padding-right: 24px;
	font-size: 12px;
}
.life1 .life1_head a  span i{
	position: absolute;
	right: 0;
	top: 11px;
	background: url(../images/bg2.png) -154px -40px no-repeat;
	width: 15px;
	height: 16px;
	font-size: 12px;
}
