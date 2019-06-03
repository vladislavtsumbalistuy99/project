var searchBtn = document.getElementById("search-btn");
var searchInput = document.getElementById("search-input");
var href = "";
var posts;
searchBtn.addEventListener("click",
function search(e){
  if (searchInput.value != ""){
    document.getElementById('main-content').innerHTML = '';
    href = `${href}label=${searchInput.value}&`;
    posts = getRequest(`${href}label=${searchInput.value}&`);
    renderContent(posts);
  }
  e.preventDefault();
})
