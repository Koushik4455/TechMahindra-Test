// <!-- get data from api -->

async function funcName() {
  fetch(
    "https://countriesnow.space/api/v0.1/countries/info?returns=unicode,currency,flag,dialCode"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data);
      showData(data.data);
    });
}

funcName();

// <!-- Dark Mode Script -->
function toggle_light_mode() {
  var app = document.getElementsByTagName("BODY")[0];
  if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
  } else {
    localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
  }
}

window.addEventListener(
  "storage",
  function () {
    if (localStorage.lightMode == "dark") {
      app.setAttribute("light-mode", "dark");
    } else {
      app.setAttribute("light-mode", "light");
    }
  },
  false
);
function showData(data) {
  data.forEach((country) => {
    const { currency, dialCode, name, flag } = country;
    var card = document.createElement("div");
    card.classList.add("card");
    var img = document.createElement("img");
    img.classList.add("img");
    img.src = flag;
    card.appendChild(img);

    var countryName = document.createElement("h3");
    countryName.innerHTML = name;
    card.appendChild(countryName);

    var price = document.createElement("h5");
    price.innerHTML = `Currency:${currency}`;
    card.appendChild(price);

    var code = document.createElement("h4");
    code.innerHTML = `DialCode:${dialCode}`;
    card.appendChild(code);

    var cards = document.getElementsByClassName("cards")[0];
    cards.appendChild(card);
  });
}
function search(ev) {
  var key = ev.target.value.toUpperCase();

  showData(
    jdata.filter((data) => {
      return data.data.name.toUpperCase() === key;
    })
  );
}


