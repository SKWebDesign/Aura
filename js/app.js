$(document).foundation();


 /* you must supply your own immages */
var bgimages = new Array()
bgimages[0] = 'http://placehold.it/1920x1080&text=[Background%20Image1]';
bgimages[1] = 'http://placehold.it/1920x1080&text=[Background%20Image2]';
bgimages[2] = 'http://placehold.it/1920x1080&text=[Background%20Image3]';

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
    $('body').css('background-image', 'url(' + bgimages[inc] + ')');
}

$(document).ready(function()
{
     setInterval("bgSlide()", 2000);
    $('#divContact').hide();
});

 window.onresize = function(event) {
    if($('#ProjectDiv').css('display') !="none")
       resizeOrbitImages();
  };

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
projectImages[7] = 'http://placehold.it/1920x1080&text=[Img8]';
projectImages[8] = 'http://placehold.it/1920x1080&text=[Img9]';
projectImages[9] = 'http://placehold.it/1920x1080&text=[Img10]';
projectImages[10] = 'http://placehold.it/1920x1080&text=[Img11]';
projectImages[11] = 'http://placehold.it/1920x1080&text=[Img12]';

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
    var html= '<ul class="small-block-grid-4 medium-block-grid-8 large-block-grid-12">';
     

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
