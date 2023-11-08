const delButtonHandler = async (event) => {


      if (event.target.querySelector('btn-danger')) {
        event.preventDefault();
        const response = await fetch('/api/post/:id', {
          method: 'DELETE',
          body: JSON.stringify({ title, content }),
          headers: {
            'Content-Type': 'application/json',
          }
          
        });
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to delete project');
        }
      }
    };
    
    document
  .querySelector('btn-danger').addEventListener('click', delButtonHandler);