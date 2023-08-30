let btn=document.getElementById("searchBar-btn");
//  weather fetch function
let searchBar=document.querySelector("#searBAr");
let searchButton=document.querySelector("#searchBar-btn");

let weatherCheck=async (cityName)=>{
   let weather=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a057690a143c2c8dead8c99f52fd72a3&units=metric`);
   
   if(weather.status==404){
    document.querySelector("#errorIn").style.display="block";
    let one=document.querySelector(".details").style=`
   display: none;
   

   `
    document.querySelector(".mainContainer").style.background="white"
   }
   {


   let data= await weather.json();
   document.querySelector(".details-name").innerHTML=data.name;
   document.querySelector(".details-temp").innerHTML=Math.round(data.main.temp)+" °C";
   console.log(data)
   document.querySelector(".humidity-percentage").innerHTML=data.main.humidity+" %";
   document.querySelector(".windSpeed-inkmp").innerHTML=data.wind.speed+" km/h";
   let imgM=document.getElementById("main-img");

   if(data.weather[0].main=="Clouds"){
         imgM.outerHTML=`<img id="main-img" src="/img/sunny-weather.png" alt="">`
   }
   if(data.weather[0].main=="Rain"){
    imgM.outerHTML=`<img id="main-img" src="/img/raining.png" alt="">`
   }
   if(data.weather[0].main=="Snow"){
    imgM.outerHTML=`<img id="main-img" src="/img/snow.png" alt="">`
   }
    document.querySelector(".mainContainer").style.background=" lightblue"
   let one=document.querySelector(".details").style=`
   display: flex;

   `
   document.querySelector("#errorIn").style.display="none";

}

}
searchButton.addEventListener('click',()=>{
   weatherCheck(searchBar.value);
})
