/*let buttonSubmit = document.getElementsByClassName('btSubmit');
buttonSubmit.addEventListener("click", function {
    var password = document.getElementsByClassName('password').value,
        passwordConfirmation = document.getElementsByClassName('confirmPassword').value;

    if (password == "") {
        alert("Field cannot be empty.");
    }
})
*/
document.querySelector('.btSubmit').onclick = () => {
    var password = document.querySelector('.pw').value,
        confirmPassword = document.querySelector('.pwConfirmation').value;

    if (password != confirmPassword) {
        alert("Password didn't match. Try agin.");
        return false
    }
    return true
}