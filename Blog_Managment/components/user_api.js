const getUserData = () => {
  return fetch("http://localhost:3118/users").then((response) =>
    response.json()
  );
};

const createUser = async (data) => {
  try {
    await fetch("http://localhost:3118/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return true;
  } catch (error) {
    alert(error.message);
  }
};

const Loginuser = async (data) => {
  try {
    let req = await fetch("http://localhost:3118/users/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    let res = await req.json();
    console.log(res);
    document.cookie = `id=${res._id}`;
    alert("login successful");
    return true;
  } catch (error) {
    alert("login failed");
    console.log("Error:", error);
  }
};

export { createUser, getUserData, Loginuser };
