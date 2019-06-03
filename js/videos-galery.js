function printVideos(){
  var videosContent = document.getElementById("videosContent");
  var videos = getRequest("http://localhost:3000/content");

  for( var i = 0; i < videos.length; i++){
    var video = document.createElement("video");
    video.setAttribute("controls","");
    var element = video.setAttribute("class","hideVideos");
    if (videos[i].videoSrc != ""){
      video.src = `.${videos[i].videoSrc}`;
      video.classList.replace("hideVideos","galeryVideo");
      // video.className += "galeryVideo"
    }
    
    videosContent.appendChild(video);
  }
}