const createBlogPost = async (data) => {
  try {
    const response = await fetch(`http://localhost:3118/blogPost/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    alert("Error: " + error.message);
  }
};

const getBlogPost = async (id) => {
  try {
    const response = await fetch(`http://localhost:3118/blogPost/${id}`);
    return await response.json();
  } catch (error) {
    alert("Error: " + error.message);
  }
};

export { getBlogPost, createBlogPost };
