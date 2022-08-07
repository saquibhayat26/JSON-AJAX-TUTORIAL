let btn = document.getElementById("btn");
let htmlContainer = document.getElementById("data__container");
let currentPage = 1;

btn.addEventListener("click", function () {
  /////////////   First Create a new xmlhttprequest
  let ourRequest = new XMLHttpRequest();

  ////now open method is added to ourRequest variable, it is used to invoke ourRequest it takes two args a) GET/POST  b) THE URL / DATA
  ourRequest.open(
    "GET",
    "https://learnwebcode.github.io/json-example/animals-" +
      currentPage +
      ".json"
  );

  ////when we get a response then onLoad is added which is set to an anonymous function inside of which we parse the request response text in actual json format
  ourRequest.onload = function () {
    let responseData = JSON.parse(ourRequest.response);
    renderHtml(responseData);
  };

  ourRequest.send();
  currentPage++;
  if (currentPage > 3) {
    btn.classList.add("hide-me");
  }
});

function renderHtml(datas) {
  //   console.log(datas[0].name);
  let htmlString = "";
  datas.map((data) => {
    // console.log(data);
    htmlString += `<h2> ${data.name} is a ${data.species} that's like to eat `;

    let favFood = data.foods.likes;
    console.log(favFood);
    let likeRes = "";
    for (let i = 0; i < favFood.length; i++) {
      let el = favFood[i];
      let next = favFood[i + 1];
      if (next) {
        likeRes += `${el}, `;
      } else {
        if (!next) {
          likeRes += el;
        } else {
          likeRes += el;
        }
      }
    }
    htmlString += likeRes;

    let unFavFood = data.foods.dislikes;
    let unLikeRes = "";
    for (let i = 0; i < unFavFood.length; i++) {
      let el = unFavFood[i];
      let next = unFavFood[i + 1];
      if (next) {
        unLikeRes += ` ${el}, `;
      } else {
        if (!next) {
          unLikeRes += el;
        } else {
          unLikeRes += el;
        }
      }
    }
    htmlString += ` & dislike ${unLikeRes}`;

    htmlString += ".</h2>";
  });
  htmlContainer.insertAdjacentHTML("beforeend", htmlString);
}
