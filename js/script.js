const qr = document.getElementById("qrcode");
const form = document.getElementById("form");

var qrcode = new QRCode("qrcode");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("url");
  if (input.value === "") {
    alert("Please enter a URL");
    input.focus();
  } else {
    generateCode(input.value);
  }

  console.log(input.value);
});

const generateCode = (text) => {
  qrcode.makeCode(text);
};
