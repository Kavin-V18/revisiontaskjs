async function UsersFunction() {
        let res = await fetch(
                "https://jsonplaceholder.typicode.com/users"
        ).then(result => { return result.json() })
                .then(res => {
                        displayAll(res)
                })
}
function displayAll(users) {
        let container = document.getElementById("userContainer")
        container.innerHTML = ""
        users.map(user => {
                let details = document.createElement("div")
                details.className = "detail"
                details.innerHTML = `
<h3>${user.name} </h3>
 <p> mail:${user.email}</p>
<p>phone: ${user.phone} </p>
`
 container.appendChild(details)
 })
}