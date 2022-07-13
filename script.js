const btnTranslate = document.querySelector("#btnTranslate");
const inputText = document.querySelector("#inpTextArea");
const output = document.querySelector(".outputArea");
const errormsg =document.querySelector(".errormsg");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text)
{
    return serverURL+ "?" + "text=" + text
}

function errorHandler(error)
{
    console.log("error occured", error);
    errormsg.innerHTML= "something wrong with server ! try again after some time";
}

function clickHandler()
{
    var inpText= inputText.value;

    fetch(getTranslationURL(inpText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerHTML= translatedText;
    })
    .catch(errorHandler)


    // console.log("clicked");
    // console.log(inputText.value);
    // output.innerHTML=inputText.value;

};

btnTranslate.addEventListener("click", clickHandler);