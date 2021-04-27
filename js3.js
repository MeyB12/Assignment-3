
let okGo = []

function formSubmitEvent() {
    
    var name= document.getElementById("custName").value;
    var city = document.getElementById("city").value;
    var paymentType = document.getElementById("paymentType").value;
   // console.log (name, city, paymentType)

    var allN = name + " "+ city + " " + paymentType;
    //console.log(allN)
    okGo.push(allN);
    console.log(okGo);
    let Ul = document.getElementById("printOn");

    Ul.innerHTML = "";

    for (let i = 0; i < 3; i++) {
       // okGO.push();

        let anotherLi = document.createElement("li");//.innerHTML= okGo;
        anotherLi.appendChild(document.createTextNode(okGo[i]));
      
        Ul.appendChild(anotherLi);
        


}
}

