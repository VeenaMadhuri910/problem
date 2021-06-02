
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAg2eiJ-xLGgZFkwK0QNOo_YTPFDnLJ-a8",
      authDomain: "kwitter-c19d4.firebaseapp.com",
      databaseURL: "https://kwitter-c19d4-default-rtdb.firebaseio.com",
      projectId: "kwitter-c19d4",
      storageBucket: "kwitter-c19d4.appspot.com",
      messagingSenderId: "1068300458894",
      appId: "1:1068300458894:web:43f5eebfe088ffa1f7a2df"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("username")
    document.getElementById("user_name").innerHTML = "welcome"+ user_name
    function addroom(){
          room_name = document.getElementById("room_name").value 
          firebase.database().ref("/").child (room_name).update({
                purpose:"adding room"
          })
          localStorage.setItem("room_name",room_name)
          window.location= "kwitter_page.html"
    }
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
  console.log("roomname" + Room_names)
  row = "<div class = 'room_name' id ='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
  document.getElementById("output").innerHTML+= row
  //End code
      });});}
getData();
function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem ("room_name",name)
      window.location = "kwitter_page.html"
}
function logout()
{
      localStorage. removeItem("username")
      localStorage. removeItem("room_name")
      window.location = "index.html"
}


