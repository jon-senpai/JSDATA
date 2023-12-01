// PART 1
let id1 = 42;
let name1 = "Bruce";
let occupation1 = "Knight";
let age1 = "41";
const csv = [
    { ID: 42, Name: "Bruce", Occupation: "Knight", Age: 41 },
    { ID: 57, Name: "Bob", Occupation: "Fry Cook", Age: 19 },
    { ID: 63, Name: "Blaine", Occupation: "Quiz Master", Age: 58 },
    { ID: 98, Name: "Bill", Occupation: "Doctor’s Assistant", Age: 26 }
  ];
  
  for (const person of csv) {
    for (const key in person) {
      console.log(`${key}: ${person[key]}`);
    }
    console.log('\n'); 
  }

// PART 2
