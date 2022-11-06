function addUser()
{
  var name = document.getElementById("username").value;

  localStorage.setItem("kwitter_username", name);

  window.location.pathname = "/room/";
}

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'), 
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
};

function bodyOnLoad() {
var x = getUrlParameter('redirect');
document.getElementById('join').innerHTML = "Join Kwitter today";

if (typeof x === "undefined") {
  //Nothing
} else {
    if(x !="" && x != true)
    {
    console.log(x)
    document.getElementById('join').innerHTML = "Login back to Kwitter";
    }
    else
    {
    //Nothing
    }
}
}
