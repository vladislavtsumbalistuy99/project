function pagination() {
  numOfPages = Math.round(getRequest("http://localhost:3000/content").length/10);
  var pages = document.getElementById("pagination-pages");
  var html = '';
  for (var i = 0; i < numOfPages; i++){
    html+= `<div id=page${i+1} onclick="paginationPages(${i+1})">${i+1}</div>`;
  }
  pages.innerHTML = html;

  var page1 = getRequest("http://localhost:3000/content?_page=1&_limit=10");
  document.getElementById('main-content').innerHTML = '';
  renderContent(page1);
}

function paginationPages(page) {
  page = getRequest(`http://localhost:3000/content?_page=${page}&_limit=10`);
  document.getElementById('main-content').innerHTML = '';
  renderContent(page);
}

pagination();