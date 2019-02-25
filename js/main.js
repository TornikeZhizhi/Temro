


$(document).ready(function(){
	//Login Js

	 $(".login_box").on("click",function(e){
	 	$(".header_login_fluid").addClass("active");
	 	e.stopPropagation()
	 })
	 $(window).on("click",function(){
		$(".header_login_fluid").removeClass("active");
	 })
	 $(".header_login_fluid").on("click",function(e){
	 	e.stopPropagation();
	 })



	 $(window).mousemove(function(event){

	 	var x = Math.floor(event.pageX/$(window).width()*20) + "%"
	 	var y = Math.floor(event.pageY/$(window).height()*80) + "%"

	 	$("#home_main_fluid").
	 	css("background-position","70% top ,100% 100%, "+ x+" 100%,"+y+" 100%")
	 })


	 $(".search_fluid input").on("focus",function(){
	 	$(".search_fluid").addClass("active");
	 })

	 $(".search_fluid input").blur(function(){
		$(".search_fluid").removeClass("active");
		
	 })

})
