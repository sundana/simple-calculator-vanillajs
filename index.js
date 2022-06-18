const displayInput = document.getElementById("display-input");
const tambah = document.getElementById("tambah");
const kurang = document.getElementById("kurang");
const bagi = document.getElementById("bagi");
const kali = document.getElementById("kali");
const hapus = document.getElementById("hapus");
const samaDengan = document.getElementById("sama-dengan");
const satu = document.getElementById("satu");
const dua = document.getElementById("dua");
const tiga = document.getElementById("tiga");
const empat = document.getElementById("empat");
const lima = document.getElementById("lima");
const enam = document.getElementById("enam");
const tujuh = document.getElementById("tujuh");
const delapan = document.getElementById("delapan");
const sembilan = document.getElementById("sembilan");
const nol = document.getElementById("nol");

// Reset nilai setelah menekan tombol sama dengan
var reset = false;

// Mengganti operator akhir pada nilai input apabila ada
function replace(str) {
  let splitInput = displayInput.textContent.split("");
  splitInput.pop();
  splitInput.push(str);
  displayInput.textContent = splitInput.join("");
}

// Input angka pada nilai input
function inputAngka(str) {
  if (displayInput.textContent == 0) {
    displayInput.textContent = str;
  } else {
    displayInput.textContent += str;
  }
}

// Menghapus operator terakhir apabila akan dihitung. Contoh: 1+2+ hasilnya 3
function hapusOperatorTerakhir() {
  let splitInput = displayInput.textContent.split("");
  splitInput.pop();
  displayInput.textContent = splitInput.join("");
}

hapus.onclick = () => {
  displayInput.textContent = "0";
};

tambah.onclick = () => {
  switch (displayInput.textContent.slice(-1)) {
    case "+":
      return;
    case "-":
      replace("+");
      break;
    case "*":
      replace("+");
      break;
    case "/":
      replace("+");
      break;
    default:
      displayInput.textContent += "+";
      break;
  }
};

kurang.onclick = () => {
  switch (displayInput.textContent.slice(-1)) {
    case "-":
      return;
    case "+":
      replace("-");
      break;
    case "*":
      replace("-");
      break;
    case "/":
      replace("-");
      break;
    default:
      displayInput.textContent += "-";
      break;
  }
};

kali.onclick = () => {
  switch (displayInput.textContent.slice(-1)) {
    case "*":
      return;
    case "+":
      replace("*");
      break;
    case "-":
      replace("*");
      break;
    case "/":
      replace("*");
      break;
    default:
      displayInput.textContent += "*";
      break;
  }
};

bagi.onclick = () => {
  switch (displayInput.textContent.slice(-1)) {
    case "/":
      return;
    case "+":
      replace("/");
      break;
    case "*":
      replace("/");
      break;
    case "-":
      replace("/");
      break;
    default:
      displayInput.textContent += "/";
      break;
  }
};

samaDengan.onclick = () => {
  switch (displayInput.textContent.slice(-1)) {
    case "+":
      hapusOperatorTerakhir();
      displayInput.textContent = eval(displayInput.textContent);
      break;
    case "-":
      hapusOperatorTerakhir();
      displayInput.textContent = eval(displayInput.textContent);
      break;
    case "/":
      hapusOperatorTerakhir();
      displayInput.textContent = eval(displayInput.textContent);
      break;
    case "*":
      hapusOperatorTerakhir();
      displayInput.textContent = eval(displayInput.textContent);
      break;
    default:
      console.log("Operasi sebelumnya:", displayInput.textContent);
      displayInput.textContent = eval(displayInput.textContent);
      break;
  }
};

satu.onclick = () => {
  inputAngka("1");
};

dua.onclick = () => {
  inputAngka("2");
};

tiga.onclick = () => {
  inputAngka("3");
};

empat.onclick = () => {
  inputAngka("4");
};

lima.onclick = () => {
  inputAngka("5");
};
enam.onclick = () => {
  inputAngka("6");
};

tujuh.onclick = () => {
  inputAngka("7");
};

delapan.onclick = () => {
  inputAngka("8");
};

sembilan.onclick = () => {
  inputAngka("9");
};

nol.onclick = () => {
  inputAngka("0");
};
