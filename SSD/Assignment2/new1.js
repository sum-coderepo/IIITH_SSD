////alert("Hello")
//let generalBtn = document.getElementById("genral");
//let businessBtn = document.getElementById("business");
//const sportsBtn = document.getElementById("sport");
//const entertainmentBtn = document.getElementById("entertainment");
//const technologyBtn = document.getElementById("technology");
//const scienceBtn = document.getElementById("Science");
//const searchBtn = document.getElementById("searchBtn");
//const healthBtn = document.getElementById("Health");
//
//
//var newsDataArr = [];
//
//const API_KEY = "87cfa36624e448a08cfea3390e59feb7";
//
//
//const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
//const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
//const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
//const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
//const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
//const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
//const SCIENCE_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey="
//const HEALTH_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey="
//
//
//
//const newsType = document.getElementById("newsType");
//const newsdetails = document.getElementById("newsdetails");
//
//if(generalBtn != null){
//    generalBtn.addEventListener("click",function() {
//        displayDate();
//        fetchTechnologyNews(GENERAL_NEWS);
//    });
//}
//if(businessBtn != null){
//    businessBtn.addEventListener("click",function() {
//        displayDate();
//        fetchTechnologyNews(BUSINESS_NEWS);
//    });
//}
//if(technologyBtn != null){
//    technologyBtn.addEventListener("click",function() {
//        displayDate();
//        fetchTechnologyNews(TECHNOLOGY_NEWS);
//    });
//}
//if(sportsBtn != null){
//    sportsBtn.addEventListener("click",function() {
//        displayDate();
//        fetchTechnologyNews(SPORTS_NEWS);
//    });
//}
//
//if(entertainmentBtn != null){
//    entertainmentBtn.addEventListener("click",function() {
//        displayDate();
//        fetchTechnologyNews(ENTERTAINMENT_NEWS);
//    });
//}
//
//if(healthBtn != null){
//    healthBtn.addEventListener("click",function() {
//        displayDate();
//        fetchTechnologyNews(HEALTH_NEWS);
//    });
//}
//
//if(scienceBtn != null){
//    scienceBtn.addEventListener("click",function() {
//        displayDate();
//        fetchTechnologyNews(SCIENCE_NEWS);
//    });
//}
//
//
//
//    function displayDate() {
//    document.body.style.color = "white";
//    document.getElementById("demo").innerHTML = "Hello There12"
//}
//
//const fetchTechnologyNews = async (name) => {
//    const response = await fetch(name+API_KEY);
//    newsDataArr = [];
//    if(response.status >=200 && response.status < 300) {
//        const myJson = await response.json();
//        newsDataArr = myJson.articles;
//    } else {
//        // handle errors
//        console.log(response.status, response.statusText);
//        newsdetails.innerHTML = "<h5>No data found.</h5>"
//        return;
//    }
//
//    displayNews();
//}
//
//function displayNews() {
//
//    newsdetails.innerHTML = "";
//
//
//    newsDataArr.forEach(news => {
//
//        var date = news.publishedAt.split("T");
//
//        var col = document.createElement('div');
//        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";
//
//        var card = document.createElement('div');
//        card.className = "p-2";
//
//        var image = document.createElement('img');
//        image.setAttribute("height","matchparent");
//        image.setAttribute("width","100%");
//        image.src=news.urlToImage;
//
//        var cardBody = document.createElement('div');
//
//        var newsHeading = document.createElement('h5');
//        newsHeading.className = "card-title";
//        newsHeading.innerHTML = news.title;
//
//        var dateHeading = document.createElement('h6');
//        dateHeading.className = "text-primary";
//        dateHeading.innerHTML = date[0];
//
//        var discription = document.createElement('p');
//        discription.className="text-muted";
//        discription.innerHTML = news.description;
//
//        var link = document.createElement('a');
//        link.className="btn btn-dark";
//        link.setAttribute("target", "_blank");
//        link.href = news.url;
//        link.innerHTML="Read more";
//
//        cardBody.appendChild(newsHeading);
//        cardBody.appendChild(dateHeading);
//        cardBody.appendChild(discription);
//        cardBody.appendChild(link);
//
//        card.appendChild(image);
//        card.appendChild(cardBody);
//
//        col.appendChild(card);
//
//        newsdetails.appendChild(col);
//    });
//
//}
//
//