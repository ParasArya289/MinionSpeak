var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var apiURL = "https://api.funtranslations.com/translate/minion.json/";

function getTranslationURL(input) {
  return apiURL + "?" + "text=" + input;
}

function errorHandler(err) {
  console.log("Error", err);
  alert("something wrong with server! try again after some time");
}

function clickHandler() {
  var inputText = txtInput.value; // taking input

  // calling server for processing
  fetch(getTranslationURL(inputText))
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
