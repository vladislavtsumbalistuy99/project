var href = "http://localhost:3000/content?";
var sortBtn = document.getElementById("sort-btn");
sortBtn.addEventListener("click",
function sort(e){
  var label = document.getElementById("label").value;
  var tag = document.getElementById("tag").value;
  var author = document.getElementById("author").value;
  var chboxPictures = document.getElementById("chbox-pictures");
  var chboxVideos = document.getElementById("chbox-videos");
  if (label != ""){
    document.getElementById('main-content').innerHTML = '';
    href = `${href}label=${label}&`
    posts = getRequest(`${href}label=${label}&`);
    renderContent(posts);
  } 
  if (tag != ""){
    document.getElementById('main-content').innerHTML = '';
    href = `${href}tag=${tag}&`
    posts = getRequest(href);
    renderContent(posts);
  } 
  if (author != ""){
    document.getElementById('main-content').innerHTML = '';
    href = `${href}author=${author}&`
    posts = getRequest(href);
    renderContent(posts);
  } 
  if (chboxPictures.checked) {
    document.getElementById('main-content').innerHTML = '';
    href = `${href}type=image&`
    posts = getRequest(href);
    renderContent(posts);
  } 
  if (chboxVideos.checked) {
    document.getElementById('main-content').innerHTML = '';
    href = `${href}type=video&`
    posts = getRequest(href);
    renderContent(posts);
  }

})

function showFilters(){
  var filterBtn = document.getElementById("filterBtn");
  var sidebar = document.getElementById("sidebar");
  var index = false;
  filterBtn.addEventListener("click",
  function show(){
    if (index == false){
      sidebar.style.display = "block";
      index = true;
    } else if (index == true){
      sidebar.style.display = "none";
      index = false;
    }
  })
}

showFilters();