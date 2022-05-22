
// smoothscroll
var scroll = new SmoothScroll('a[href*="#"]');

// menu
var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";
menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0px";
    }
    else{
        sideNav.style.right = "-250px";
    }
}

// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
loader.style.display = "none"; 
}) 

// firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCeFCoyQmpT_oLcldQBw_mi133PFouBgvs",
    authDomain: "rski-ace5f.firebaseapp.com",
    databaseURL: "https://rski-ace5f-default-rtdb.firebaseio.com",
    projectId: "rski-ace5f",
    storageBucket: "rski-ace5f.appspot.com",
    messagingSenderId: "1068574938978",
    appId: "1:1068574938978:web:fdbdd6c48279c294693e3b",
    measurementId: "G-RH9TDLZHDZ"
  };

const app = firebase.initializeApp(firebaseConfig);
// const analytics = firebase.getAnalytics(app);
const database = firebase.database();

// subscribe
var subscribe = document.getElementById('subscribe')
var name_subscribe = document.getElementById('name')
var email_subscribe = document.getElementById('email')
var phone_subscribe = document.getElementById('phone')

subscribe.addEventListener('click', validation )

function validation() {
    if (name_subscribe.value.length != 0 && email_subscribe.value.length != 0 && phone_subscribe.value.length != 0) {
        upload(name_subscribe.value, email_subscribe.value, phone_subscribe.value)
    }
    else {
        alert('please fill all the fields')
    }
}

function upload(name, email, phone){
    var userId = new Date().getTime()
    database.ref('users/' + userId).set({
        name: name,
        email: email,
        phone: phone,
        timestamp: userId,
      });
    alert('Thank you for subscribing to our newsletter')
    name_subscribe.value = ""
    email_subscribe.value = ""
    phone_subscribe.value = ""
}