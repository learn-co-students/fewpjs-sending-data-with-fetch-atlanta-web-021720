// Add your code here
function submitData(username, userEmail) {
    let formData = {
        name: username,
        email: userEmail
    };
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        let newObj = document.createElement("h1");
        newObj.innerHTML = object.id
        document.querySelector("body").appendChild(newObj);
    })
    .catch(function(error) {
        alert("Everthing is on fire.");
        let newErr = document.createElement('h1');
        newErr.innerHTML = error.message;
        document.querySelector("body").appendChild(newErr);
    });

}