function tipamount(){
    var billAmount = parseFloat(document.getElementById("bill").value);
    var serviceQuality = parseFloat(document.getElementById("rating").value);
    var people = parseInt(document.getElementById("people").value);

    if(isNaN(billAmount) || isNaN(serviceQuality)|| isNaN(people) || billAmount<=0 || people<=0){
        alert("Please enter valid values");
        return;
    }

    var totalTip = billAmount*(serviceQuality/100);
    var tipToWaiter = totalTip/people;
    var element = document.createElement("p");
    element.innerText="Tip Amount";
    document.getElementById("tiptowaiter").innerHTML = tipToWaiter.toFixed(2);
}