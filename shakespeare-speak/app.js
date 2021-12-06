var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txtInput");
var outputArea = document.querySelector("#output");

function hancdleClick(){
    var text = txtInput.value;
    var url = "https://api.funtranslations.com/translate/shakespeare.json?text="+text;
    fetch(url)
    .then((res)=>res.json())
    .then((json)=>{
        outputArea.innerText = json.contents.translated;
    }).catch(err=>{
        console.error("Error fetching translation, error:"+err);
        outputArea.innerText = "Error fetching translation"
    });
}

btnTranslate.addEventListener("click",hancdleClick);
