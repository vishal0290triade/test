<script>
jQuery(document).ready(function() {
jQuery('.product-wrapper').each(function() {
  var callout_link = jQuery(this).find('a').first().attr('href');
  jQuery(this).wrapInner('<a></a>');
  jQuery(this).find('a').first().attr('href',callout_link);
});
});


var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;


window.onload = function() { //executes this code after the DOM loads
   //--- this is the selector element. Feel free to change this if you don't want all video objects targeted.
  const vids = document.getElementsByTagName(`video`);
  const playbuttons = document.getElementsByClassName('mejs-layers');
  const bottombars = document.getElementsByClassName('videobarbottom');
  
   //--- Now we loop over all of the selected elements and add event listeners
  for (let i = 0; i < vids.length; i++) {
    
      //Loop Videoplay
    vids[i].addEventListener('ended', function(e) {
       vids[i].currentTime = 0.1; //setting to zero breaks iOS 3.2, the value won't update, values smaller than 0.1 was causing bug as well.
	   vids[i].play(); 
    });
    
    //Start Video on mouseover
    vids[i].addEventListener( `mouseenter`, function(e) { 
      vids[i].muted=true;
	  vids[i].play();
	  playbuttons[i].style.display='none';
    });
    //Stop Video on mouseout
    vids[i].addEventListener( `mouseleave`, function(e) {
      vids[i].pause();
	  playbuttons[i].style.display='block';
    });
  }
  
  //Loop over playbuttons, add event listeners.
  for (let j = 0; j < playbuttons.length; j++) {
    playbuttons[j].addEventListener( `mouseenter`, function(e) { 
      vids[j].muted=true;
	  vids[j].play();
	  playbuttons[j].style.display='none';
    });
    playbuttons[j].addEventListener( `mouseleave`, function(e) {
      vids[j].pause();
	  playbuttons[j].style.display='block';
    });
  }
  //Loop over bottombars, add event listeners.
  for (let k = 0; k < bottombars.length; k++) {
    bottombars[k].addEventListener( `mouseenter`, function(e) { 
      vids[k].play();
    });
    bottombars[k].addEventListener( `mouseleave`, function(e) {
      vids[k].pause();
    });
  }
  
  
}


</script>
