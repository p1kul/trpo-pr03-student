const saveButton = document.getElementById("saveButton");
const changeStatusBtn = document.getElementById("changeStatusBtn");
const checkForm = document.getElementById("checkForm");

const email = document.getElementById("email");
const requestsCount = document.getElementById("requestsCount");

const toastElement = document.getElementById("saveToast");

const toast = bootstrap.Toast.getOrCreateInstance(toastElement);



saveButton.addEventListener("click", function () {

    const operationName =
        document.getElementById("operationName").value.trim();

    if (operationName === "") {

        alert("Введите название операции");

        return;

    }

    toast.show();

    const modalElement =
        document.getElementById("addModal");

    const modal =
        bootstrap.Modal.getOrCreateInstance(modalElement);

    modal.hide();


    let currentCount =
        Number(requestsCount.textContent);

    requestsCount.textContent =
        currentCount + 1;

});



changeStatusBtn.addEventListener("click", function () {

    if (changeStatusBtn.textContent.trim() === "Изменить заголовок") {

        changeStatusBtn.textContent = "Заголовок изменён";

    } else {

        changeStatusBtn.textContent = "Изменить заголовок";

    }

});


checkForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const emailValue =
        email.value.trim();


    if (
        emailValue === "" ||
        !emailValue.includes("@")
    ) {

        email.classList.remove("is-valid");

        email.classList.add("is-invalid");

    } else {

        email.classList.remove("is-invalid");

        email.classList.add("is-valid");

    }

});