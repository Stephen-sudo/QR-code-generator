let QRtext = document.getElementById("qrText");
let Imgbox = document.getElementById("imgBox");
let QRimage = document.getElementById("qrImage");
let btn = document.getElementById("btn");

btn.addEventListener("click", function generator() {
  if (QRtext.value.length > 0) {
    QRimage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      QRtext.value;

    Imgbox.classList.add("show-img");
  } else {
    QRtext.classList.add("error");
    setTimeout(() => {
      QRtext.classList.remove("error");
    }, 1000);
  }
});
