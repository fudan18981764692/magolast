// (()=>{
//     $("#header").load("header.html",()=>{
//         window.addEventListener("scroll",function() {
//             console.log("from header");
//             var scrollTop =
//                 document.documentElement.scrollTop
//                 || document.body.scrollTop;
//             var headerTop =
//                 document.getElementById("header-top");
//             //如果scrollTop>=384
//             if (scrollTop >= 384)
//             //让header-top变为fixed定位，固定在文档显示区顶部
//                 headerTop.className = "clear fixed";
//             else//否则
//             //让header-top变回原定位方式
//                 headerTop.className = "clear";
//         } );
//
//     }
// })();
(()=>{

$(".hd-search .icon-protype").click(function(){
//头部搜索框的显示产品的点击事件

    if($(".hd-wrap .hd-search .drop-down-list").css("display")=="none"){
        $(".hd-wrap .hd-search .drop-down-list").fadeIn();
    }else{
        $(".hd-wrap .hd-search .drop-down-list").fadeOut();
    }
});
//导航条鼠标移入
$("#hd-mainnav  .n3 .nav-link ").hover(function(){
    $("#hd-mainnav .n3 .nav-box a").css("display","block")
},function(){ $("#hd-mainnav .n3 .nav-box a").css("display","none")});
$("#hd-mainnav  .n7 .nav-link ").hover(function(){
    $("#hd-mainnav .n7 .nav-box a").css("display","block")
},function(){ $("#hd-mainnav .n7 .nav-box a").css("display","none")});
$("#hd-mainnav  .n8 .nav-link ").hover(function(){
    $("#hd-mainnav .n8 .nav-box a").css("display","block")
},function(){ $("#hd-mainnav .n8 .nav-box a").css("display","none")});
	//搜索功能
	//
var aSearch=document.getElementById("btn-search"),
 txtSearch=document.getElementById("myInput");
//搜索图标的点击事件

 
  aSearch.onclick=e=>{
    e.preventDefault();
	console.log("aaaa");
    if(txtSearch.value.trim()!=="")
    location=
      "search.html?kw="+txtSearch.value.trim();
  }
  if(location.search.indexOf("kw=")!=-1){
    txtSearch.value=decodeURI(
      location.search.split("=")[1]
    );
  }
  txtSearch.onkeydown=e=>{
   if(e.keyCode==13)
     aSearch.onclick(e)
 }


})();
