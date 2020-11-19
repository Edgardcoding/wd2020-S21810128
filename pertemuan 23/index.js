//Mendeklarasikan Fungsi
// Fungsi yang berdiri sendiri
// Fungsi yang berdiri sendiri
function sapa() {
    return "Selamat Pagi!";
}
console.log(sapa()); 

// Fungsi disimpan di dalam variabel
let berkenalan = function() {
    return "Hallo, nama saya Sarah.";
};
console.log(berkenalan());

//jika kita tidak menulis perintah return
let umur = 21;

function ulangTahun() {
    umur += 1;
}
console.log(ulangTahun());

//Parameter & Argument
function operasiPerkalian(angka1, angka2){
    return angka1 * angka2;
  }
  
console.log(operasiPerkalian(2, 6))

//Function Hoisting
console.log(operasiPerkalian(5, 5));

function operasiPerkalian(angka1, angka2) {
  return angka1 * angka2;
}

//Lingkup Global
const olahraga = 'basketball';

function namaAtlet() {
  let atlet = 'Lionel Messi';
  const noMessi = 10;
  console.log(olahraga);
  if (olahraga === 'basketball') {
     atlet = 'Kobe Bryant';
     const noKobe = 24;
     console.log(olahraga);
  }
  return atlet;
}

console.log(namaAtlet());
console.log(olahraga);

//Lingkup Lokal
const olahraga = 'basketball';

function namaAtlet() {
  let atlet = 'Lionel Messi';
  const noMessi = 10;
  if (olahraga === 'basketball') { 
     atlet = 'Kobe Bryant';
     const noKobe = 24;
     console.log(noMessi); 
  }
  console.log(noKobe);
  return atlet;
}

namaAtlet();
