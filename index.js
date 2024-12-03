// Add your code here
function submitData(userName, userEmail){
    const userInput = {
        name: userName,
        email: userEmail,
    }

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInput),
    }

    return fetch("http://localhost:3000/users", configurationObject)
    .then(resp => resp.json())
    .then(userData => {
        const id = userData.id
        document.querySelector("body").append(id)
    })
    .catch(error =>{
        const errorMsg = error.message;
        document.querySelector("body").append(errorMsg)
    })
}

