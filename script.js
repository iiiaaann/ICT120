document.querySelector('.btSubmit').onclick = () => {
    var password = document.querySelector('.pw').value,
        confirmPassword = document.querySelector('.pwConfirmation').value;

    if (password != confirmPassword) {
        alert("Password didn't match. Try again.");
        return false
    }
    return true
}