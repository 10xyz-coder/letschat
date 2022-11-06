const firebaseConfig = {
  apiKey: "AIzaSyDr6hXmkEamtZJ20G3-9Ky5tNl9YI3kvj8",
  authDomain: "testy-deedc.firebaseapp.com",
  databaseURL: "https://testy-deedc-default-rtdb.firebaseio.com",
  projectId: "testy-deedc",
  storageBucket: "testy-deedc.appspot.com",
  messagingSenderId: "1039526731924",
  appId: "1:1039526731924:web:274ad592f1ce52025c5481"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig); 

function getData() {
	firebase.database().ref("/").on('value', function(snapshot) 
	{
		document.getElementById("output").innerHTML = "";
		snapshot.forEach(function(childSnapshot) 
		{childKey  = childSnapshot.key;
			Room_names = childKey;
			//Start code
			console.log("Room - " + Room_names)
			row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoom(this.id)' > #" + Room_names + "</div> <hr>"
			document.getElementById('output').innerHTML += row;
			//End code
  	});
	})
;}
getData();

function bodyOnLoad()
{
	username = localStorage.getItem("kwitter_username");
	document.getElementById('username').innerHTML = "Welcome " + username + "!";
}

function redirectToRoom(name) 
{
	console.log(name)
	localStorage.setItem('kwitter_room_name', name)
	window.location.assign("../view/")
}

function logout()
{
	localStorage.removeItem('kwitter_username');
	localStorage.removeItem('kwitter_room_name');
  window.location.assign("../?redirect=logout")
}

function addRoom()
{
	room_name = document.getElementById('room_name').value

	firebase.database().ref("/").child(room_name).update(
		{
			purpose: "adding room name"
		}
	)

	localStorage.setItem('kwitter_room_name', room_name)

	window.location.pathname = "/view/"
}
