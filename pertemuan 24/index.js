//Array

let nilai = {90, 80, 75, 95, 85};

for (let i=0; i < nilai length; i++) {
    console.log("Nilai = ", nilai[i] + 5);
}

console.log(nilai);

//nilai[2] = 90;
//console.log(nilai[nilai.length - 1]);

let john = ["john", "Doe", 33, true];
console.leg(john[john.length - 1]);
console.log(john);

//toString()
console.log(john.toString());
//join()
console.log(john.join(" - "));

//pop()
john.pop();
console.log(john.join(" - "));
//push()
john.push();
john.push("Hello");
console.log(john.join(" - "));

//shift()
john.shift();
console.log(john.join(" - "));

//unshift()
john.unshift("John");
john.unshift("Prof");
console.log(john.join(" - "));

//concat()
let buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
buah.splice(2, 0, "Lemon", "Kiwi");
console.log(buah);

let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];
let makanan = buah.concat(sayur, biji);
console.log(makanan);

//slice()
let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
let cemilanGurih = cemilan.slice(0, 3);
let cemilanManis = cemilan.slice(3);
console.log(cemilanGurih);
console.log(cemilanManis);

let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
let cemilanGurih = cemilan.slice(0, 3);
let cemilanManis = cemilan.slice(3);
console.log(cemilanGurih);
console.log(cemilanManis);

////sort()
let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];
buah.sort();
console.log(buah);

let bilangan = [30, 1, 2, 3.5, 10, 100];
bilangan.sort();
console.log(bilangan);

let bilangan = [30, 1, 2, 3.5, 10, 100];
let urutDariTerkecil = function(a, b) {
  return a - b;
};
let urutDariTerbesar = function(a, b) {
  return b - a;
};
console.log(bilangan.sort(urutDariTerkecil));
console.log(bilangan.sort(urutDariTerbesar));

//reverse()
let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];
buah.reverse();
console.log(buah);

let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];
buah.sort().reverse();
console.log(buah);