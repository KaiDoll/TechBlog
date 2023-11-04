const logout = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/'); //sends user back to the homepage when they logout
  } else {
    alert(response.statusText); //STRING ALERT!
  }
};

document.querySelector('#logout-link').addEventListener('click', logout);
