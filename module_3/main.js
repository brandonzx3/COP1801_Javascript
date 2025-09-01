const output = document.getElementById("output");

output.innerHTML += "<h3>For Loop (0-10): Odd/Even</h3>";

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        output.innerHTML += `Count ${i} is even<br>`;
    } else {
        output.innerHTML += `Count ${i} is odd<br>`;
    }
}

let myNum = parseInt(prompt("Enter a number between 5 and 20:"));

if (isNaN(myNum) || myNum < 5 || myNum > 20) {
    alert("Invalid input, defaulting to 10.");
    myNum = 10;
}

output.innerHTML += "<h3>Do While Loop</h3>";

let counter = 1;
do {
    output.innerHTML += `Counter = ${counter}<br>`;
    counter++;
} while (counter <= myNum);


let subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

output.innerHTML += "<h3>Subjects (foreach display)</h3>";
subjects.forEach((subject, index) => {
    output.innerHTML += `${index + 1}. ${subject}<br>`;
});

output.innerHTML += "<h3>Subjects (comma separated)</h3>";
output.innerHTML += subjects.join(", ");