function showGreeting(){
  let name = document.getElementById('username').value;
  document.getElementById('greet').innerText = name ? `Hello, ${name}! Ready for JSP integration.` : "Please enter a name";
}
