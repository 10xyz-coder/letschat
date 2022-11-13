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
  room_name = localStorage.getItem("kwitter_room_name")
  firebase.database().ref("/"+room_name).on('value', function(snapshot) 
	{
		document.getElementById("output").innerHTML = "";
		snapshot.forEach(function(childSnapshot) 
		{childKey  = childSnapshot.key;
      firebase_message_id = childKey;
      message_data = childData;

      senderName = message_data('name');
      senderMessage = message_data('message');
      like = message_data('likes');
      name_with_tag = "<h4> "+senderName+"</h4>"
      message_with_tag = "<h4 class='message_h4>" + senderMessage + "</h4>"
      like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onlclick='addLike(this.id)'>"
      span_tag = "<span class='glyphicon glyphicon-thumbs-up'>"+like+"</span></button><hr>"
			//Start code
			console.log("Room - " + Room_names)
			row = name_with_tag+message_with_tag+like_button+span_tag;
			document.getElementById('output').innerHTML += row;
			//End code
  	});
	})
}

function send() {
  msg = document.getElementById("msg").value;
  room_name = localStorage.getItem("kwitter_room_name")
  user_name = localStorage.getItem("kwitter_username")
  firebase.database().ref(room_name).push({
    name : user_name,
    likes : 0,
    message : msg
  });

  document.getElementById("msg").value = "";
}

function logout()
{
	localStorage.removeItem('kwitter_username');
	localStorage.removeItem('kwitter_room_name');
  window.location.assign("../?redirect=logout")
}