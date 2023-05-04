 /*function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (name == "" || emial == "") {
        alert("Please fill in all fields");
        return false;
    }
 }*/
//console.log("helooow maaneno")

//console.log('name')
function nawal() {
 let name =document.querySelector('#name').value;
 let email =document.querySelector('#email').value;
 let address =document.querySelector('#address').value;
 let Comments =document.querySelector('#Comments').value;

 localStorage.setItem("name", name);
 localStorage.setItem("email",email);
 localStorage.setItem("address",address);
 localStorage.setItem("Comments",Comments);

}
let thename = localStorage.getItem('name');
let themail = localStorage.getItem('email');
let theaddress = localStorage.getItem('address');
let theCommnet = localStorage.getItem('Comments');

let mama = document.getElementById('myname');
let mamm = document.getElementById('myad');
let mma = document.getElementById('mye');
let ma= document.getElementById('myC');

//console.log(mamm);

if (thename && theaddress){
    if(theaddress && theCommnet){
        mama.innerHTML = `Name:${thename}`;
        mamm.innerHTML = `Email:${themail}`;
        mma.innerHTML =` Address:${theaddress}`;
        ma.innerHTML = `Comments:${theCommnet}`;

    }
}





