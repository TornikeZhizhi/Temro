


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

	 	var x = Math.floor(100 + event.pageX/$(window).width()*8) + "%";
	 	var y = Math.floor(80 +event.pageY/$(window).height()*8) + "%";



	 	$("#home_main_fluid").
	 	css("background-position","70% top ,100% 100%, 50% 100%,"+ y +"  "+ x+" ");


	 	// $(".header_decor").css("transform","translate("+x+", 2px)")
	 })


	 $(".search_fluid input").on("focus",function(){
	 	$(".search_fluid").addClass("active");
	 })

	 $(".search_fluid input").blur(function(){
		$(".search_fluid").removeClass("active");
		
	 })

new Chart(document.getElementById("mixed-chart"), {
    type: 'bar',
    data: {
      labels: ["12:00", "13:00", "14:00", "15:00"],
      datasets: [{
         
          type: "line",
          borderColor: "#8e5ea2",
          data: [312,42,3,734],
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'საათობრივი პროგნოზი ტემპერატურის გრაფა'
      },
      legend: { display: false }
    }
});




$(document).ready(function(){
			$('.calendar_fluid').owlCarousel({
		    loop:true,
		    margin:0,
		    smartSpeed:1300,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		})

	})


})


