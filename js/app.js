$(document).foundation();


 /* you must supply your own immages */
var bgimages = new Array()
bgimages[0] = 'http://placehold.it/1920x1080&text=[Background%20Image1]';
bgimages[1] = 'http://placehold.it/1920x1080&text=[Background%20Image2]';
bgimages[2] = 'http://placehold.it/1920x1080&text=[Background%20Image3]';
bgimages[3] = 'http://placehold.it/1920x1080&text=[Background%20Image4]';
//preload images
var pathToImg = new Array()
for (i = 0; i < bgimages.length; i++) {
		pathToImg[i] = new Image()
		pathToImg[i].src = bgimages[i]
}
 
var inc = -1

function bgSlide() {
		if (inc < bgimages.length - 1)
				inc++
		else
				inc = 0
		$('#img-container').css('background-image', 'url(' + bgimages[inc] + ')');
}

$(document).ready(function()
{
		 setInterval("bgSlide()", 2000);
		//$('#divContact').hide();

		$("div#subnav li a").click(function(event)
				{
					
						 setSubNav();
						
				});

		
		resizeImgContainer();

		window.onresize = function(event) {
			resizeImgContainer();
	};


 window.onscroll = function (event) {
			setSubNav();
};

});

 
function showInfoDiv() {
				$('#infoDiv').fadeIn();
				$('.navRow').css('background-color','#fff');
}

function showProjectDiv() {
		if ($('#infoDiv').css('display') == "none")
		{
				showInfoDiv();
		}
		else
		{
				hideAboutDiv();
				hideContactDiv();
		}

		 addOrbitImages();
		addOrbitImageThumbnails();
		$('#ProjectDiv').show();
		$('#bottomNav').show();
		

		$(document).foundation('orbit');
		resizeOrbitImages();

	 
}



function showAboutDiv() {
		if ($('#infoDiv').css('display') == "none") {
				showInfoDiv();
		}
		else {
				hideProjectDiv();
				hideContactDiv();
		}
		$('#AboutDiv').show();
}

function showContactDiv() {
		if ($('#infoDiv').css('display') == "none") {
				showInfoDiv();
		}
		else {
				hideProjectDiv();
				hideAboutDiv();
		}
		$('#ContactDiv').show();
}

function hideInfoDiv() {
		$('#infoDiv').fadeOut();
		hideProjectDiv();
		hideAboutDiv();
		hideContactDiv();
		
}

function hideProjectDiv() {
		$('#ProjectDiv').hide();
		 $('#bottomNav').hide();
}

function hideAboutDiv() {
		$('#AboutDiv').hide();
			 $('#bottomNav').hide();
}

function hideContactDiv()
{
		$('#ContactDiv').hide();
			 $('#bottomNav').hide();
}

function resizeOrbitImages()
{
		 var height= $('.orbit-container').height();

		$('.orbit-container').children('img').css

		$('div.orbit-container img').each(function() {
		
				$(this).height(height);
		
});
}



var projectImages = new Array()
projectImages[0] = 'http://placehold.it/1920x1080&text=[Img1]';
projectImages[1] = 'http://placehold.it/1920x1080&text=[Img2]';
projectImages[2] = 'http://placehold.it/1920x1080&text=[Img3]';
projectImages[3] = 'http://placehold.it/1920x1080&text=[Img4]';
projectImages[4] = 'http://placehold.it/1920x1080&text=[Img5]';
projectImages[5] = 'http://placehold.it/1920x1080&text=[Img6]';
projectImages[6] = 'http://placehold.it/1920x1080&text=[Img7]';
function addOrbitImages()
{
		$('#ProjectDiv').empty();
		 var html='<ul id="imageOrbit" data-orbit data-options="bullets:false; timer:false" >';
			 
	
		for(var i=0; i< projectImages.length; i++)
		{
				html += '<li data-orbit-slide="img'+(i+1)+'"><img src="'+projectImages[i]+'" /><div class="orbit-caption">Img '+(i+1)+'.</div></li>'
					
		}
		html += '</ul>'
		 $('#ProjectDiv').append(html);
 
}

function addOrbitImageThumbnails()
{
		$('#thumbnialesDiv').empty();
		var html= '<ul class="small-block-grid-3 medium-block-grid-6 large-block-grid-12">';
		 

		 for(var i=0; i< projectImages.length; i++)
		{
				html+= '<li><a data-orbit-link="img'+(i+1)+'"><img class="th" src="'+projectImages[i]+'"></a></li>'
					
		}

		 html+='</ul>';

			$('#thumbnialesDiv').html(html);
}

function ToogleNavInfoDiv()
{
		if($('#navInfoDiv').css('display') == "none")   
		{
				 
				 $('#navInfoDiv').slideDown()
						 
					 
	 
		}
		else
		{
			 $('#navInfoDiv').slideUp( "slow", function() {
				 
						
				});
	 
		}
	 



}


function resizeImgContainer()
{
		var ViewPortHeight= $(window).height();
		 var ViewPortWidth= $(window).width();

		 $("#img-container").height(ViewPortHeight - 90);
}

function setSubNav()
{
		if($(window).scrollTop()>=($("div.wrapper").position().top-45))
		{
			 //set subnav to be fixed at top
			 $("#subnav").addClass("is_stuck");
			 $("span.arrow").css("opacity","1");
			
			 //set arrow position
			 if($(window).scrollTop()>=$("div#aurahome").position().top && $(window).scrollTop()<$("div#difference").position().top-135) 
			 {
					 //set why aura position

						var left = $("#subnav ul li:nth-child(1)").position().left +$("#subnav ul li:nth-child(1)").width()*2/3
					 $("span.arrow").css("left",left);
			 }
			 if($(window).scrollTop()>=$("div#difference").position().top-135 && $(window).scrollTop()<$("div#commitment").position().top-135) 
			 {
					 //set why aura position

						var left = $("#subnav ul li:nth-child(2)").position().left +$("#subnav ul li:nth-child(2)").width()*2/3
					 
					 $("span.arrow").css("left",left);
			 }
				if($(window).scrollTop()>=$("div#commitment").position().top-135 && $(window).scrollTop()<$("div#communities").position().top-135) 
			 {
					 //set why aura position

						var left = $("#subnav ul li:nth-child(3)").position().left +$("#subnav ul li:nth-child(3)").width()*2/3
					 
					 $("span.arrow").css("left",left);
			 }
				if($(window).scrollTop()>=$("div#communities").position().top-135) 
			 {
					 //set why aura position

						var left = $("#subnav ul li:nth-child(4)").position().left +$("#subnav ul li:nth-child(4)").width()*2/3
					 
					 $("span.arrow").css("left",left);
			 }


		}
		else if($(window).scrollTop()<($("div.wrapper").position().top))
		{
				$("#subnav").removeClass("is_stuck");
				$("span.arrow").css("opacity","0");
		}

		

}