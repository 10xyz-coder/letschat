function getData() {
	firebase.database().ref("/").on('value', function(snapshot) 
	{
		document.getElementById("output").innerHTML = "";
		snapshot.forEach(function(childSnapshot) 
		{childKey  = childSnapshot.key;
			Room_names = childKey;
			//Start code
			
			//End code
  	});
	})
;}
getData();

function logout()
{
  alert("logout");
}

function addRoom()
{
	alert("Added Room");
}