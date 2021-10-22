function loadCountry() {
    fetch("https://restcountries.com/v3.1/name/all").then(r => r.json()).then(showCountry);
}
function showCountry(country){
    // debugger;
    for (let j=0; j < country.length; j++){
    //console.log(country);
    console.log(country.length);
    console.log(j);
    //console.log(country[j].name.official);
    //const name = country[j].name.official;
    //console.log(name);
    //document.getElementById("name").textContent=name;
    }
}
window.addEventListener("load", loadCountry);