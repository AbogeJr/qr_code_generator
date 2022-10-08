const qr = document.getElementById("qrcode");
const form = document.getElementById("form");
const container = document.getElementById("container");
const btn = document.getElementById("btn");

var qrcode = new QRCode("qrcode");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("url");
  if (input.value === "") {
    alert("Please enter a URL");
    input.focus();
  } else {
    generateCode(input.value);
    btn ? hideBtn() : showButton();
  }

  console.log(input.value);
});

const generateCode = (text) => {
  qrcode.makeCode(text);
};

const showButton = (saveUrl) => {
  const btn = document.createElement("button");
  btn.innerHTML = "Download";
  btn.classList = "btn btn-primary";
  btn.id = "btn";
  const saveBtn = document.getElementById("btn");
  if (saveBtn) {
    saveBtn.remove();
  }

  container.appendChild(btn);
};
