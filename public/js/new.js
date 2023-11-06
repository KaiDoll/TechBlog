// Route this page with NEWPOST

const addPost = async function (event) {
    event.preventDefault();
    const title= document.querySelector('#post-title').value;
    const content = document.querySelector('#post-content').value;

  await fetch("/api/post", {
    method: "Post",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { "Content-type": "application/json" },
  });

  document.location.replace("/dashboard");
};

document.querySelector(".new-post-form").addEventListener("submit", addPost);
