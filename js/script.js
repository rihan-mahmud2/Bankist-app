document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  const passwordField = document.getElementById("user-password");
  password = passwordField.value;
  
  if (email === "rihanmahmud1415@gmail.com" && password === "1415") {
    document.getElementById('btn-submit').addEventListener('click', function () {
    window.location.href = 'inside.html'
    
    })
  
  } else {
    alert('Insert valid info to access')
  }
});
