var firebaseConfig = {
    apiKey: "AIzaSyBYKE34cxU8g7nfXkaPzqlfBCqaruQLYzE",
    authDomain: "gatotoon-beta.firebaseapp.com",
    databaseURL: "https://gatotoon-beta-default-rtdb.firebaseio.com",
    projectId: "gatotoon-beta",
    storageBucket: "gatotoon-beta.appspot.com",
    messagingSenderId: "550527110060",
    appId: "1:550527110060:web:6fac3bdc94e43c6bd4c809"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="¡Hola "+user_name+"!💕";
function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
 purpose : "adding room name" 
});
localStorage.setItem("room_name" , room_name);
window.location="kwitter_page.html";
}
function getData(){
    firebase.database().ref("/").on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
        Room_names = childKey;
     console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
         }); 
        }); }
        getData();
        function redirectToRoomName(name){                                   
        console.log(name)
        localStorage.setItem("room_name",name);
        window.location="kwitter_page.html";
        }
        function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location="index.html";

        }

        
