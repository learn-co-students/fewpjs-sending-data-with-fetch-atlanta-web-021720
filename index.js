
// function submitData( name, email ) {
//     return fetch( 'http://localhost:3000/users', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify( {
//           name,
//           email
//         } )
//       } )
//       .then( function ( response ) {
//         return response.json()
//       } )
//       .then( function ( object ) {
//         document.body.innerHTML = object[ "id" ]
//       } )
//       .catch( function ( error ) {
//         document.body.innerHTML = error.message
//       } )
//   }

function submitData(uName, uEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: uName,
            email: uEmail
        })
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        const newP = document.createElement('p')
        newP.textContent = object.id
        document.body.appendChild(newP)
    })
    .catch(function(error) {
        document.body.innerHTML = error.message
    }
    )
}