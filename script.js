var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var apiURL = "	https://api.funtranslations.com/translate/minion.json";

function get(input) {
  return apiURL + "?" + "text=" + input;
}

function clickHandler() {
  var inputText = txtInput.value;

  fetch(get(inputText))
    .then((response) => {
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      return response.json();
    })
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; // output
    })
    .catch((err) => alert(err.message));
}
btnTranslate.addEventListener("click", clickHandler);
