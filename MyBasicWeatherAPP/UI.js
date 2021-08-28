class UI{
    constructor (){
        this.weathershow = document.querySelector(".weathershow");
        this.alertx =document.querySelector("#alert")
    }

    show (data){
        weathershow.innerHTML=`
        <div class="card" style="width: 18rem;">
        <div class="card-header text-center">
        ${data.location.name}
        </div>
        <ul class="list-group list-group-flush text-center">
          <li class="list-group-item">Temprature : ${data.current.temp_c}</li>
          <li class="list-group-item">Wind : ${data.current.wind_mph}</li>
          <li class="list-group-item">Humidty : ${data.current.humidity}</li>
        </ul>
      </div>
        `;
    }

    showalert (letter){
        this.alertx.innerHTML=`${letter} is not Found.`
    }
    clear (){
        weathershow.innerHTML="";
        this.alertx.innerHTML="";
    }
    
}