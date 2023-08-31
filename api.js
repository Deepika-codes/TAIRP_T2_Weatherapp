link="https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=e8818fa77b616a89bff759929681ba5f";
var request= new XMLHttpRequest();
request.open('GET',link,true);
request.onload= function(){
    var obj= JSON.parse(this.response);
    console.log(obj);
    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('location').innerHTML = obj.name;
    document.getElementById('temp').innerHTML = Math.round(obj.main.temp - 273.15) ;
    document.getElementById('icon').src = " https://openweathermap.org/img/wn/10d@2x.png";
}
if(request.status >= 200 && request.status < 400){
var temp= obj.main.temp;
}
else{
    console.log("city data not available")
}
request.send();
