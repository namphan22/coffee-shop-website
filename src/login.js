let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    fetch("https://6369cb9028cd16bba72488d3.mockapi.io/login")
        .then((res) => res.json())
        .then((data) => {
            let location = document.querySelector(".location");

            data.map((user) => {
                if (!username.value || !email.value || !password.value) {
                    location.innerHTML = "<h4 >Vui lòng điền thông tin</h4>";
                } else if (
                    username.value == user.username &&
                    email.value == user.email &&
                    password.value == user.password
                ) {
                    setTimeout(() => {
                        location.innerHTML = `<h4 style="color: #03e9f4" >Login Successfull</h4>`;
                        setTimeout(() => {
                            window.location.href = "../index.html";
                        }, 2000);
                    }, 1000);
                } else {
                    setTimeout(() => {
                        location.innerHTML = "<h4 >Login fail</h4>";
                        setTimeout(() => {
                            window.location.href = "../login/login.html";
                        }, 2000);
                    }, 1000);
                }
            });
        })
        .catch((error) => console.log(error));
});
