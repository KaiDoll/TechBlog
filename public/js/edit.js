const editFormHandler = async (event) => {
  event.preventDefault();

    //const username = document.querySelector('#post-username').value.trim();
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    if (title && content) {4
      const response = await fetch('/api/post/:id', {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update the post');
      }
    }
  };

// 
document
  .querySelector('#new-post-form')
  .addEventListener('click', editFormHandler);


