const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

const generateQR = () => {
  if (qrText.value.length === 0) {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
    return;
  }

  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${qrText.value}`;
};
