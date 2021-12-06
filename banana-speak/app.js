var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txtInput");
var outputArea = document.querySelector("#output");

function hancdleClick(){
    var text = txtInput.value;
    var url = "https://api.funtranslations.com/translate/minion.json?text="+text;
    fetch(url)
    .then((res)=>res.json())
    .then((json)=>{
        outputArea.innerText = json.contents.translated;
    });
}

btnTranslate.addEventListener("click",hancdleClick);
