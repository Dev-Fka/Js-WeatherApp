class Temps {
    constructor(){

    }
    async getweather(name){
        let res = await fetch(`https://api.weatherapi.com/v1/current.json?key=0088a3666d1c48c2876110737212608&q=${name}&aqi=no`)
        let info = await res.json();
        return {
            info
        }
            
    }
}
//fetch 
//attention : key is mine key. if u use to please create your key.
