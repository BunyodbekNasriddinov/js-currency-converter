var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elSelect = document.querySelector(".js-select");
var elButton = document.querySelector(".js-button");
var elRes = document.querySelector(".js-result");

var RUB_TO_UZS = 1;
var USD_TO_UZS = 1;
var EUR_TO_UZS = 1;

function course() {
  fetch(
    `https://v6.exchangerate-api.com/v6/db9dd06ef07d2112693c914d/latest/${elSelect.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      RUB_TO_UZS = data.conversion_rates.UZS;
      USD_TO_UZS = data.conversion_rates.UZS;
      EUR_TO_UZS = data.conversion_rates.UZS;
    });
}

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  course();

  var elInputVal = elInput.value;
  var elSelectVal = elSelect.value;

  if (isNaN(elSelectVal)) {
    if (elSelectVal === "usd") {
      elRes.textContent = (+elInputVal / USD_TO_UZS).toFixed(2);
    } else if (elSelectVal === "rub") {
      elRes.textContent = (+elInputVal / RUB_TO_UZS).toFixed(2);
    } else if (elSelectVal === "eur") {
      elRes.textContent = (+elInputVal / EUR_TO_UZS).toFixed(2);
    }
  } else {
    elRes.textContent = "Nimadir xato ketdi!";
  }

  switch (elSelectVal) {
    case "usd":
      elRes.textContent = `${elRes.textContent} $`;
      break;
    case "rub":
      elRes.textContent = `${elRes.textContent} ₽`;
      break;
    case "eur":
      elRes.textContent = `${elRes.textContent} €`;
      break;
    default:
      elRes.textContent = `Nimadir xato ketdi!`;
  }
});

// console.log(fetch);
