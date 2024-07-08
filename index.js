const fullname = document.getElementById("fullname");
const submit = document.getElementById("submit");

submit.onclick = function(){
    let firstname1 = fullname.value.slice(0, fullname.value.indexOf(" "));
    let lastname1 = fullname.value.slice(fullname.value.indexOf(" "));

    document.getElementById("firstname").textContent = `Firstname: ${firstname1}`;
    document.getElementById("lastname").textContent = `Lastname: ${lastname1}`;
}


// console.log(firstname);
// console.log(lastname.trim());


