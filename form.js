// exit feature
function exit_signup() {
    var exit = document.getElementById("auth__form-icon-exit-2");
    var signupform = document.querySelector('.container2');

    exit.addEventListener('click', () => {
        if (signupform.style.display === 'block') {
            signupform.style.display = 'none';
        }
    })
}

function exit_login() {
    //console.log("Clicked on toggleSignupAndLogin");
    var exit = document.getElementById("auth__form-icon-exit-1");
    var loginform = document.querySelector('.container1')

    exit.addEventListener('click', function () {
        if (loginform.style.display === 'block') {
            loginform.style.display = 'none';
        }
    });
}


function toggleSignupAndLogin() {
    // Lấy các phần tử cần điều khiển
    var registerButton = document.getElementById('container__signup');
    var loginButton = document.getElementById('container__login');
    var registerForm = document.querySelector('.container2');
    var loginForm = document.querySelector('.container1');

    // Bắt sự kiện khi nút "Đăng ký" được nhấn
    registerButton.addEventListener('click', () => {
        // Kiểm tra nếu form đăng ký hiện đang ẩn thì hiển thị và ẩn form đăng nhập, ngược lại ẩn form đăng ký
        if (registerForm.style.display === 'none' || !registerForm.style.display) {
            registerForm.style.display = 'block';
            loginForm.style.display = 'none';
        } else {
            registerForm.style.display = 'none';
        }
    });

    // Bắt sự kiện khi nút "Đăng nhập" được nhấn
    loginButton.addEventListener('click', () => {
        // Kiểm tra nếu form đăng nhập hiện đang ẩn thì hiển thị và ẩn form đăng ký, ngược lại ẩn form đăng nhập
        if (loginForm.style.display === 'none' || !loginForm.style.display) {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        } else {
            loginForm.style.display = 'none';
        }
    });
}

function registerUser() {
    var username = document.querySelector('.auth__form-sigin-input-user').value;
    var email = document.querySelector('.auth__form-signin-input-email').value;
    var password = document.querySelector('.auth__form-signin-input-password').value;
    var confirmPassword = document.querySelector('.auth__form-signin-input-password-confirm').value;
    var agreeCheckbox = document.querySelector('.auth__form-signin-checkbox');

    if (!username || !email || !password || !confirmPassword) {
        alert('Vui lòng điền đầy đủ thông tin');
        return;
    }

    if (password !== confirmPassword) {
        alert('Mật khẩu và xác nhận mật khẩu không khớp');
        return;
    }

    if (!agreeCheckbox.checked) {
        alert('Vui lòng đồng ý với các điều khoản dịch vụ để hoàn tất đăng ký');
        return;
    }

    // Create user object
    var user = {
        username: username,
        password: password
    };

    // Retrieve existing users from localStorage or initialize an empty array
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username is already taken
    if (existingUsers.some(u => u.username === username)) {
        alert('Tên đăng nhập đã tồn tại');
        return;
    }

    // Add the new user to the array
    existingUsers.push(user);

    // Save the updated user array to localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Hide the registration form
    document.querySelector('.container2').style.display = 'none';

    // Show the login form
    document.querySelector('.container1').style.display = 'block';

    alert('Đăng ký thành công');
    username = document.querySelector('.auth__form-sigin-input-user').value = "";
    email = document.querySelector('.auth__form-signin-input-email').value = "";
    password = document.querySelector('.auth__form-signin-input-password').value = "";
    confirmPassword = document.querySelector('.auth__form-signin-input-password-confirm').value = "";
}

// Function to handle user login
function loginUser() {
    var username = document.querySelector('.auth__form-login-username').value;
    var password = document.querySelector('.auth__form-login-pasword').value;

    // Retrieve existing users from localStorage or initialize an empty array
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the entered username and password match any user in the array
    var loggedInUser = existingUsers.find(u => u.username === username && u.password === password);

    if (loggedInUser) {
        // Successful login
        alert('Đăng nhập thành công');

        // hide login form
        document.getElementById("container__signup-form").style.display = 'none';
        document.getElementById('container__login-form').style.display = 'none';

        //show welcome
        document.getElementById('container_client').style.display = 'block';
        document.getElementById('auth__form-client').innerHTML = 'CHÀO, ' + username;

        document.getElementById('container_exit_client').style.display = 'block';
    } else {
        // Invalid username or password
        alert('Tên đăng nhập hoặc mật khẩu không đúng');
    }
    username = document.querySelector('.auth__form-login-username').value = null;
    password = document.querySelector('.auth__form-login-pasword').value = null;
}

function logoutUser() {
    document.getElementById('container__signup-form').style.display = 'block';
    document.getElementById('container__login-form').style.display = 'block';

    document.querySelector('.container1').style.display = 'none';
    document.getElementById('container_client').style.display = 'none';
    document.getElementById('container_exit_client').style.display = 'none';
}



