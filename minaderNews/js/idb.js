const news = [
  {
    id: 1,
    name: "drh",
    title: "titre de l'article",
    content: "adsasdasdasdasadasdasd",
    hastag: ["refgis1", "regis2", "regis3"],
    like: 5,
    time: 2
  }
];

function createCard(item) {
  var card = document.createElement("div");
  var direction_sigle = document.createElement("span");
  var title = document.createElement("div");
  var h4 = document.createElement("h4");
  var article_text = document.createElement("article");
  var para = document.createElement("p");
  var hastag = document.createElement("div");

  hastag.setAttribute("class", "hastag");
  article_text.setAttribute("class", "text");
  h4.setAttribute("class", "title-post");
  title.setAttribute("class", "title");
  direction_sigle.setAttribute("class", "direction-sigle");
  card.setAttribute("class", "card");

  // title apppencDgil
  direction_sigle.textContent = item.name;
  h4.textContent = item.title;
  title.append(direction_sigle);
  title.append(h4);

  // article appenchild
  para.textContent = item.content;
  article_text.appendChild(para);

  // hastaf apppend child
  item.hastag.forEach(element => {
    var spanElt = document.createElement("span");
    spanElt.textContent = element;
    hastag.appendChild(spanElt);
  });

  // appendchild card

  card.appendChild(title);
  card.appendChild(article_text);
  card.appendChild(hastag);

  return card;
}

var idbApp = (function() {
  if (!("indexedDB" in window)) {
    console.log("This brower doesn't support indexedDB");
    return;
  }

  var request = window.indexedDB.open("MINADER", 1);

  request.onerror = function(event) {
    console.log("indexed db create error");
  };

  request.onupgradeneeded = function(event) {
    var db = event.target.result;

    var objectStore = db.createObjectStore("news", { keyPath: "id" });

    objectStore.createIndex("direction", "direction", {
      unique: false
    });
    objectStore.createIndex("title", "title", {
      unique: false
    });
    objectStore.createIndex("content", "content", {
      unique: false
    });
    objectStore.createIndex("hastag", "hastag", {
      unique: false
    });
    objectStore.createIndex("like", "like", { unique: false });
    objectStore.createIndex("time", "time", {
      unique: false
    });

    // initial add
    objectStore.transaction.oncomplete = function(event) {
      var tx = db.transaction("news", "readwrite");
      var newsObjectStore = tx.objectStore("news");

      news.forEach(news_item => {
        newsObjectStore.add(news_item);
      });

      var data = [];
      var tx = db.transaction("news");
      var newsReadCursor = tx.objectStore("news").openCursor();
      newsReadCursor.onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
          data.push(cursor.value);
          cursor.continue();
        }
      };

      var newsSection = document.querySelector(".news");
      var card = null;

      setTimeout(() => {
        data.map(function(news_item, index) {
          console.log(index);
          card = createCard(news_item);
        });

        console.log(card);
        newsSection.appendChild(card);
      }, 3000);
    };
  };
})();
