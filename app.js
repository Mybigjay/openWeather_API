let button = document.querySelector('.button')
button.addEventListener('click',function(){

let inputValue = document.querySelector('.inputValue')
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');

    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&APPID=43065ca7011ca970a9e04bd358379607')
    
    .then(response => response.json())
    .then(data => {
        let nameValue= data['name'];
        let tempValue =data['main']['temp'];
        let descValue = data['weather'][0]['description'];

        name.innerHTML = nameValue;
        temp.innerHTML =tempValue;
        desc.innerHTML =descValue;


    })
        
        
    
    .catch(err => alert("press sumbit"))
})


   

   