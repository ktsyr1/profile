function item_view(id , value){
    var app =  document.querySelector(id)
    document.querySelector(`#body_one`).style.display = "none"
    document.querySelector(`#body_two`).style.display = "none"
    document.querySelector(`#body_three`).style.display = "none"
    document.querySelector(`#body_four`).style.display = "none"
    
    if (app.style.display==value){
      app.style.display = "none"; 
    }else{
      app.style.display = value; 
    } 
} 