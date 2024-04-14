const quotewrapper = document.querySelector(".Quote-wrapper");
const refreshbtn=document.querySelector('.refresh');
const loadertext=document.querySelector('.loader');



function showLoader(){
loadertext.classList.add('show');
quotewrapper.classList.add('hide');
}
function removeLoader(){
loadertext.classList.remove('show');
quotewrapper.classList.remove('hide');
}


function fetchRandomQuote() {
    showLoader();
  fetch("https://api.quotable.io/quotes/random")
    .then((response) => response.json())
    .then((result) => {
        if(result){
            removeLoader()
            displayQuote(result[0])
            
        }
    })
    .catch((e) => console.log(e));
}


function displayQuote(getQuote){
    console.log(getQuote);
    quotewrapper.innerHTML=`
    <div class="quote-item">
    <p>${getQuote.author}</p>
    <p>${getQuote.content}</p>
    <p>${getQuote.dateAdded}</p>
    <p>${getQuote.tags}</p>
    
    </div>
    `
}

fetchRandomQuote();


refreshbtn.addEventListener("click",()=>{
    fetchRandomQuote();
});
