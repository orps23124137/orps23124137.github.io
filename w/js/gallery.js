/*Name this external file gallery.js*/

function upDate(previewPic){
   var img = previewPic.src;
   document.getElementById("image").style.backgroundImage = "url('"+ img +"')";

  var msg = previewPic.alt;
     document.getElementById("image").innerHTML = msg;


	}

	function unDo(){
        document.getElementById("image").style.backgroundImage  = "url('')";

        document.getElementById("image").innerHTML = "Hover over an image below to display here.";
	}