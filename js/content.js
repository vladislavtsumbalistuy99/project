var posts = getRequest("http://localhost:3000/content");

function renderContent(posts){
  // mainContentSection = document.getElementsByClassName("main-content-section");
  document.getElementById('main-content').innerHTML= ''
  for (var i = 0; i < posts.length; i++){
    const comId = `coments${posts[i].id}`
      document.getElementById('main-content').innerHTML+=`    
      <section class="main-content-section">
      <h2>${posts[i].label}</h2>
      <div class="img-container">
        <img class="content-img" onerror="this.style.display = 'none'" src=${posts[i].imageSrc} >
      </div>
      <video controls onerror="this.style.display = 'none'" src=${posts[i].videoSrc}></video>
      <audio controls onerror="this.style.display = 'none'" src=${posts[i].audioSrc}></audio>
      <div class="description">
        <p>${posts[i].description}</p>
      </div>
      <div class="icons-section">
        <i class="far fa-comments" onclick="showComents(${comId})"></i>
        <p><i class="fas fa-hashtag icons"></i>${posts[i].tag}</p>
        <p class="author"><i class="fas fa-user icons"></i>${posts[i].author}</p>
        <p id="like${i+1}"><i class="far fa-heart icons" onclick="addLike(${i+1},${posts[i].likes})"></i><span id="numOfLikes${i+1}">${posts[i].likes}</span></p>
        <p style="display:none" id="newLike${i+1}"><i class="fas fa-heart icons" onclick="removeLike(${i+1},${posts[i].likes})"></i><span id="numOfNewLikes${i+1}">${posts[i].likes}</span></p>
      </div>
      <div class='coments' id="coments${posts[i].id}"></div>
      <div id="addComents${posts[i].id}"></div>
      </section>`;
      for(var j = 0; j < posts[i].coments.length; j++){
        document.getElementById(`coments${posts[i].id}`).innerHTML+=`<div class="item">
        <h5>
        <p><i class="fas fa-user icons"></i>${posts[i].coments[j].user} <p class="coment-likes"><i class="far fa-heart icons"></i> ${posts[i].coments[j].comentLikes}</p>
        </h5>
        <span>
        ${posts[i].coments[j].comentText}
        </span>
        </div>`;
      }
      document.getElementById(`addComents${posts[i].id}`).innerHTML +=`<form>
      <textarea class="comentTextarea" id="comentTextarea${i+1}" cols="70" rows="2" placeholder="Введіть коментарій"></textarea><br>
      <input value="Додати коментарій" type="submit" id = "addCmntBtn${i+1}" onclick="addComent(${i+1}); return false;">
      </form>`; 
      
  }
}

function showComents(id){
  id.classList.toggle("showComents");
}

function addLike(postId,numOfLikes){
  numOfLikes = numOfLikes + 1;
  likes = document.getElementById(`numOfNewLikes${postId}`);
  likes.innerHTML = numOfLikes
  document.getElementById(`like${postId}`).style.display = "none";
  document.getElementById(`newLike${postId}`).style.display = "block";
  let data = { 
    "likes": numOfLikes
  }
  patchRequest(data,`http://localhost:3000/content/${postId}`);
  
}

function removeLike(postId,numOfLikes){
  document.getElementById(`like${postId}`).style.display = "block";
  document.getElementById(`newLike${postId}`).style.display = "none";
  let data = { 
    "likes": numOfLikes
  }
  patchRequest(data,`http://localhost:3000/content/${postId}`);
}

function addComent(id){
  var text = document.getElementById(`comentTextarea${id}`).value;
  var prevComents = getRequest(`http://localhost:3000/content/${id}`).coments;
  var newComent =     {
    "user": sessionStorage.getItem("login"),
    "comentLikes": "0",
    "comentText": text
  }
  prevComents.push(newComent);
  var data = { 
    "coments":prevComents
  } 
  console.log(data);
  patchRequest(data,`http://localhost:3000/content/${id}`);
  
}