function loadProfile() {
    fetch("https://randomuser.me/api/?results=1")
        .then(response => response.json())
        .then(data => {
            let user = data.results[0]
            document.getElementById("photo").src =
                user.picture.large;

            document.getElementById("name").textContent =
                user.name.title + " " +
                user.name.first + " " +
                user.name.last;

            document.getElementById("email").textContent =
                user.email;

            document.getElementById("phone").textContent =
                user.phone
            document.getElementById("address").textContent =
                user.location.country;

            document.getElementById("age").textContent =
                user.dob.age;

            document.getElementById("username").textContent =
                user.login.username;
            document.getElementById("error").textContent = " "

        })
        .catch(() => {
            document.getElementById("error").textContent = "sorry fil to load the profile."

        })
}

loadProfile();

