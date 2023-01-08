// this file don't add into main dev
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnSignup = document.querySelector(".btn-signup");
let btnLogin = document.querySelector(".btn-login");

btnSignup.addEventListener("click", (e) => {
    e.preventDefault();
    fetch("https://6369cb9028cd16bba72488d3.mockapi.io/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            let location = document.querySelector(".location");
            if (!username.value || !email.value || !password.value) {
                location.innerHTML = "<h4 >Vui lòng điền thông tin</h4>";
            } else {
                location.innerHTML = `<h4 style="color: #03e9f4" >Đăng kí thành công</h4>`;
                setTimeout(() => {
                    window.location.href = "../login/signup.html";
                }, 4000);
            }
        })
        .catch((error) => console.log(error));
});
