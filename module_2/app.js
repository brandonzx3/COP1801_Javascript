//Ask for first name and store in Fname
let fName = window.prompt("What's your first name?");
if (!fName || !fName.trim()) {
  fName = "anon";
} else {
  fName = fName.trim();
}

//Create constant piValue with π to 7 significant digits
const piValue = 3.1415926;

//Ask for favorite number; store in myFavNum.
let favNumRaw = window.prompt("What's your favorite number? (used as the circle radius)");
let favNum = Number(favNumRaw) || 0; //ensure favnum is a number

//ensure radius is non-negative
if (favNum < 0) {
  favNum = Math.abs(favNum);
}

//Calculate area using A = π * r^2
const area = piValue * Math.pow(favNum, 2);

//Build a message for the page.
const lines = [
  `Hello ${fName}, welcome!`,
  `You entered <strong>${favNum}</strong> as your favorite number.`,
  `If that number is a circle radius, the area would be <strong>${area.toFixed(6)}</strong>.`,
  "",
  // Show the variable contents and types so the team sees how JS infers types.
  `<span class="mono">Fname</span> = "${fName}" <em>(type: ${typeof fName})</em>`,
  `<span class="mono">piValue</span> = ${piValue} <em>(type: ${typeof piValue})</em>`,
  `<span class="mono">FavNum</span> = ${favNum} <em>(type: ${typeof favNum})</em>`,
  `<span class="mono">Area</span> = ${area} <em>(type: ${typeof area})</em>`
];

//Display everything on the webpage
const container = document.getElementById("output");
container.innerHTML = lines.map(p => `<p>${p}</p>`).join("");

console.log("Debug values:", { Fname: fName, piValue, FavNum: favNum, Area: area });