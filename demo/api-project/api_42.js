var accessKey = "812193ef71ca946e361ed541979a0cfd91e9419a19235fd05f51ea14233f020a";
var perPage = 60;

var utm = "&utm_source=Photo-app&utm_medium=referral";

var container = document.querySelector(".container");

function searchPhotos() {
  var searchInput = document.getElementById("searchInput").value;
  var searchUrl = "https://api.unsplash.com/search/photos/?client_id=" + accessKey + "&query=" + searchInput + "&per_page=" + perPage;

  makeRequest(searchUrl);
}

function makeRequest(url) {
  container.innerHTML = ""; // 清空容器內的內容

  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var response = JSON.parse(this.responseText);
    console.log(response);
    var results = response.results;

    for (var i = 0; i < results.length; i++) {
      if (results[i].height > results[i].width) {
        var img = document.createElement("img");
        img.setAttribute("src", results[i].urls.thumb + utm);
        container.appendChild(img);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

makeRequest("https://api.unsplash.com/photos/?client_id=" + accessKey + "&per_page=" + perPage);
