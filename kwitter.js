function addUser()
{
  var name = document.getElementById("username").value;

  localStorage.setItem("kwitter_username", name);

  window.location.pathname = "/letschat/room/";
}