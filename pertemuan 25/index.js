//console.log("JavaScript DOM");

// const person = ["John", 24, "programer", true];

const person = {
    name: "john",
    age: 24,
    job: "programer",
    isMarried: true,
    sayHello: function () {
        console.log("Hekki World");
    },
};

person.age = 25;
person["address"] = "Manado";

console.log(person.name);
console.log(person["age"]);

delete person.address;
console.log(person);

person.sayHello();

let title = document.getElementsByTagName("h1")[0].innerText;

title = document.getElementById("header2").innerText;
console.log(title);

let umur = document