let statusIndex = 1;
const breedBlockId = document.getElementById("breederContainer");
const buttons = document.querySelectorAll(".radio-statusСhoiceButton_img");

function breederStatus() {
    if (statusIndex == 2) {
        statusIndex = 1;
        breedBlockId.style.display = "flex";
        buttons.forEach(i => i.classList.toggle('off'))
    };
};

function userStatus() {
    if (statusIndex == 1) {
        statusIndex = 2;
        breedBlockId.style.display = "none";
        buttons.forEach(i => i.classList.toggle('off'))
    };
};
// переписать, объединить функции в одну, применить addEventListener вместо oncklick


let errorMassageIndex = 0;

document.getElementById('loginButton').addEventListener('click', function () {
    const inputs = document.querySelectorAll('.login-input');
    inputs.forEach(i => i.classList.add('login-error_input'));
    document.getElementById('loginErrorMassage').style.display = "flex";
    errorMassageIndex = 1;
});

function deleteMessage() {
    if (errorMassageIndex == 1) {
        const inputs = document.querySelectorAll('.login-input');
        inputs.forEach(i => i.classList.remove('login-error_input'));
        document.getElementById('loginErrorMassage').style.display = "none";
        errorMassageIndex = 0;
    };
};
