function handleLogin() {
    console.log('login');
    let inputEmail = document.getElementById('inputName').value
    let inputPwd = document.getElementById('inputPassword').value
    console.log(inputEmail, inputPwd);
    if (inputEmail === 'aptech' && inputPwd === 'aptech') {
        window.location.href = './list.html?islogin=1'

        localStorage.setItem("islogin", 1); 
        alert('login thanh cong')
    }else{
        alert('login that bai')
    }
}