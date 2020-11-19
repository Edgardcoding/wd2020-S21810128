//Operator Aritmatika

//Penjumlahan
let bilangan1 = 10;
let bilangan2 = 3;

console.log(bilangan1 + bilangan2);

//Pengurangan
let bilangan1 = 10;
let bilangan2 = 3;

console.log(bilangan1 - bilangan2);

//Perkalian
let bilangan1 = 10;
let bilangan2 = 3;

console.log(bilangan1 * bilangan2);

//Pembagian
let bilangan1 = 10;
let bilangan2 = 3;

console.log(bilangan1 / bilangan2);

//Eksponen (Pangkat)
let bilangan1 = 10;
let bilangan2 = 3;

console.log(bilangan1 ** bilangan2);

//Modulus
let bilangan1 = 10;
let bilangan2 = 3;

console.log(bilangan1 % bilangan2);

//Increment (Tambah 1)
let bilangan = 10;

bilangan++;

console.log(bilangan);

//tanpa operator increment
let bilangan = 10;

bilangan = bilangan + 1;

console.log(bilangan);

//Decrement (Kurang 1)
let bilangan = 10;

bilangan--;

console.log(bilangan);

//tanpa operator decrement
let bilangan = 10;

bilangan = bilangan - 1;

console.log(bilangan);

//Assignment Operator
let nama = "Budi";
let umur = 20;
let apakahSudahMenikah = false;
let jumlahAnak;

console.log(nama);
console.log(umur);
console.log(apakahSudahMenikah);
console.log(jumlahAnak);

//Addition Assignment +=
let bilangan = 10;

bilangan += 5;

console.log(bilangan);

//Subtraction Assignment -=
let bilangan = 10;

bilangan -= 5;

console.log(bilangan);

//Multiplication Assignment *=
let bilangan = 10;

bilangan *= 5;

console.log(bilangan);

//Division Assignment /=
let bilangan = 10;

bilangan /= 5;

console.log(bilangan);

//Modulus Assignment %=
let bilangan = 10;

bilangan %= 5;

console.log(bilangan);

//Exponent Assignment **=
let bilangan = 10;

bilangan **= 5;

console.log(bilangan);

//String Operator

//operator +
let namaDepan = "Albert";
let namaBelakang = "Einstein";

console.log(namaDepan + " " + namaBelakang);

//operator +=
let kata = "Halo ";

kata += "Dunia";

console.log(kata);

//jika kita menggabungkan data string dengan data number
let kata = "Kambing ada ";
let bilangan = 5;

console.log(kata + bilangan);

//Operator Perbandingan

//Operator == (Loose Equality)
let bilangan = 10;

console.log(bilangan == 10);
console.log(bilangan == 8);
console.log(bilangan == "10");

//Operator === (Strict Equality)
let bilangan = 10;

console.log(bilangan === 10);
console.log(bilangan === "10");

//Operator !=
let bilangan = 10;

console.log(bilangan != 8);
console.log(bilangan != "8");
console.log(bilangan != 10);
console.log(bilangan != "10");

//Operator !==
let bilangan = 10;

console.log(bilangan !== 8);
console.log(bilangan !== "8");
console.log(bilangan !== 10);
console.log(bilangan !== "10");

//Operator >(Lebih Dari)
let bilangan = 10;

console.log(bilangan > 10);
console.log(bilangan > 11);
console.log(bilangan > 8);

//Operator < (Kurang Dari)
let bilangan = 10;

console.log(bilangan < 10);
console.log(bilangan < 8);
console.log(bilangan < 11);

//Operator >=(Lebih Dari atau Sama Dengan)
let bilangan = 10;

console.log(bilangan >= 10);
console.log(bilangan >= 8);
console.log(bilangan >= 11);

//Operator <= (Kurang Dari atau Sama Dengan)
let bilangan = 10;

console.log(bilangan <= 10);
console.log(bilangan <= 11);
console.log(bilangan <= 8);

//Operator Ternary
let makanan = "daging";

let jenisHewan = makanan === "daging"  ? "karnivora" : "herbivora";

console.log(jenisHewan);

//Operator Logika
let bilangan1 = 6;
let bilangan2 = 4;

console.log(bilangan1 === 6 && bilangan2 === 4);
console.log(bilangan1 === 6 && bilangan2 < 4);
console.log(bilangan1 < 6 && bilangan2 === 4);
console.log(bilangan1 < 6 && bilangan2 < 4);

console.log(bilangan1 === 6 || bilangan2 === 4);
console.log(bilangan1 === 6 || bilangan2 < 4);
console.log(bilangan1 < 6 || bilangan2 === 4);
console.log(bilangan1 < 6 || bilangan2 < 4); 

console.log(!true);
console.log(!false);
