const newFormHandler = async (event) => { //id not defined
    event.preventDefault();
  
    //const username = document.querySelector('#post-username').value.trim();
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {4
      const response = await fetch(`/api/post/${id}`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create a post');
      }
    }
  };
  
  // const delButtonHandler = async (event) => {
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');
  
  //     const response = await fetch(`/api/post/${id}`, {
  //       method: 'DELETE',
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/dashboard');
  //     } else {
  //       alert('Failed to delete post');
  //     }
  //   }
  // };
  
  const editFormHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }
  };
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);

  document
    .querySelector('.post-list')
    .addEventListener('submit', editFormHandler);
  