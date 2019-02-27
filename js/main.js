


$(document).ready(function(){
	//Login Js
	 $(".login_img_box, .login_box span").on("click",function(e){
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

	 })


	 $(".search_fluid input").on("focus",function(){
	 	$(".search_fluid").addClass("active");
	 })

	 $(".search_fluid input").blur(function(){
		$(".search_fluid").removeClass("active");
		
	 })


// Owl

$(document).ready(function(){
			$('.calendar_fluid').owlCarousel({
		    loop:true,
		    margin:0,
		     autoplay:true,
		    autoplayTimeout:3000,
		    autoplayHoverPause:true,
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



// Chart

	var temricha ={
	"12:00":'40',
	'13:00': "35",
	'14:00': '33',
	"15:00": '30',
	'16:00':  '31',
	'17:00':  '29',
	'18:00':  '38',

	}
    var lableTitle= "საათობრივი პროგნოზი ტემპერატურის გრაფა"
	var chatTime = Object.keys(temricha)
	var tempricha = Object.values(temricha)


	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: chatTime,
        datasets: [{
            label: lableTitle,
            data: tempricha,
            fill: false,
            lineTension: 0, 
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
    	bezierCurve : false,
    	legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false,
                    fontSize: 16,

                },
                scaleLabel: {
                display: true,
                labelString: 'Temperature'
            },
            afterTickToLabelConversion : function(q){
        for(var tick in q.ticks){
            q.ticks[tick] += '\u00B0C';
            }
           }
            }],
          xAxes: [{

            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
             position: 'top' ,
             ticks: {
                  fontColor: "#1ac1b0", 
                  fontSize: 16,
                },
        },

        ],
        }
    }
});


