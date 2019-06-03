var selectedValue = selectBox.options[selectBox.selectedIndex].value;

function typePost() {
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  var addPicture = document.getElementById("addPicture");
  var addVideo = document.getElementById("addVideo");
  if (selectedValue == "image"){
    addVideo.style.display = "none";
    addPicture.style.display = "block"
  } else if (selectedValue == "video"){
    addPicture.style.display = "none"
    addVideo.style.display = "block";
  }
 
}
typePost();

var addPostBtn = document.getElementById("addPostBtn");
addPostBtn.addEventListener("click",
function addNewPost(e){
  var title = document.getElementById("add-title").value;
  var imgSrc = document.getElementById("imgSrc").value;
  var videoSrc = document.getElementById("videoSrc").value;
  var audioSrc = document.getElementById("audioSrc").value;
  var tag = document.getElementById("tag").value;
  var description = document.getElementById("descriptionTextarea").value;
  var author = sessionStorage.getItem("login");
  postRequest({
    "label": title,
    "type": selectedValue,
    "imageSrc": imgSrc,
    "videoSrc": videoSrc,
    "audioSrc": audioSrc,
    "tag": tag,
    "author": author,
    "likes": "0",
    "description": description,
    "coments": []
  },"http://localhost:3000/content");
  e.preventDefault();
  alert("Пост додано!");
  location.reload();
})
