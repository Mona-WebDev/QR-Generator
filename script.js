function generateQR() {
    let userInput = document.getElementById("userInput");
    if (userInput.value.trim() === "") {
        userInput.classList.add('error');
        setTimeout(function () {userInput.classList.remove("error")
        },1000)

    } else {
      let qrImage = document.getElementById("qrImage");
      qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        userInput.value;
    }
}

