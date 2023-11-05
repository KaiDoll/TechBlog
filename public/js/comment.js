const commentFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#user-login').value.trim();
    //const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }), //grab username and pass from the login form
        headers: { 'Content-Type': 'application/json' },
      });
  //send the information to api folder-user-routes
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace(`/post/${id}`); 
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', commentFormHandler);
  
  //Look at login-handle bars for . and # mentioned.
