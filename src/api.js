// Get the entire data of all the users
export const getUsersData = () => fetch("http://localhost:4000/").then(res => res.json());

// Save the new information of the users
export const newUserRegister = (newUserData) => fetch("http://localhost:4000/register", {
    method: "POST",
    headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
    },
    body: JSON.stringify(newUserData)
});

// Update the information of the user by id
export const updateUserData = (data, id) => fetch(`http://localhost:4000/${id}`, {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
});


// Get the id of the user
export const getData = (id) => fetch(`http://localhost:4000/${id}`).then(res => res.json());
