var temp =new Temps();
var ui = new UI();
var Reader = document.querySelector(".form-control");
Reader.addEventListener("keyup",(event)=>{
    ui.clear(); 
    let text =event.target.value ; 
    if(!text ==""){
        temp.getweather(text).then(res=>{
            ui.show(res.info)
        }).catch(err=>{
            ui.showalert(text)
        })
    }
});





