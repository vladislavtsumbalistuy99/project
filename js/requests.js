function getRequest(url){ 
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send();
  if (xhr.status != 200) {
    alert( xhr.status + ': ' + xhr.statusText ); 
  } else {
  xhr = JSON.parse(xhr.responseText);
  return xhr;
  }
}

function postRequest(data,url){ 
data = JSON.stringify(data);
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.open("POST", url);
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "635061e4-55a2-b848-bb49-6009135d249d");
xhr.send(data);
}

function patchRequest(data,url){
  var data = JSON.stringify(data);
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.open("PATCH", url);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.setRequestHeader("postman-token", "0e012963-488f-cd16-adbb-850af0b0b9c4");
  xhr.send(data);
}