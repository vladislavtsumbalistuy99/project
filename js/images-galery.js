function printImages(){
  var imagesContent = document.getElementById("imagesContent");
  var images = getRequest("http://localhost:3000/content");

  for( var i = 0; i < images.length; i++){
    var image = document.createElement("img");
    if (images[i].imageSrc != ""){
      image.src = `.${images[i].imageSrc}`;
      image.className += "galeryImg"
    }
    
    imagesContent.appendChild(image);
  }
}
