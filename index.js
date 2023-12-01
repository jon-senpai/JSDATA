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
const csv = [
    { ID: 42, Name: "Bruce", Occupation: "Knight", Age: 41 },
    { ID: 57, Name: "Bob", Occupation: "Fry Cook", Age: 19 },
    { ID: 63, Name: "Blaine", Occupation: "Quiz Master", Age: 58 },
    { ID: 98, Name: "Bill", Occupation: "Doctor’s Assistant", Age: 26 }
  ];
  

  if (csv.length > 0) {
  
    const firstRow = csv[0];
  
    const numberOfColumns = Object.keys(firstRow).length;
  
    const resultArray = [];

    const headingRow = Object.keys(firstRow);
    resultArray.push(headingRow);
  
   
    for (const person of csv) {
      const rowArray = [];
      for (const key in person) {
        rowArray.push(person[key]);
      }
      resultArray.push(rowArray);
    }
  
    
    console.log(`Number of Columns: ${numberOfColumns}\n`);
  
    
    console.log("Result Array:", resultArray);
  } else {
    console.log("CSV is empty.");
  }
// PART 3
const csv = [
    { ID: 42, Name: "Bruce", Occupation: "Knight", Age: 41 },
    { ID: 57, Name: "Bob", Occupation: "Fry Cook", Age: 19 },
    { ID: 63, Name: "Blaine", Occupation: "Quiz Master", Age: 58 },
    { ID: 98, Name: "Bill", Occupation: "Doctor’s Assistant", Age: 26 }
  ];
  
  if (csv.length > 0) {
   
    const firstRow = csv[0];
  
  
    const numberOfColumns = Object.keys(firstRow).length;
  

    const resultArray = [];
  
    const headingRow = Object.keys(firstRow);
    resultArray.push(headingRow);
  
   
    for (const person of csv) {
      const rowObject = {};
      for (const key in person) {
        rowObject[key.toLowerCase()] = person[key];
      }
      resultArray.push(rowObject);
    }
  
    console.log(`Number of Columns: ${numberOfColumns}\n`);
 
    console.log("Result Array:", resultArray);
  } else {
    console.log("CSV is empty.");
  }
//   PART 4
const csv = [
    ["ID", "Name", "Occupation", "Age"],
    [42, "Bruce", "Knight", 41],
    [57, "Bob", "Fry Cook", 19],
    [63, "Blaine", "Quiz Master", 58],
    [98, "Bill", "Doctor’s Assistant", 26]
  ];
 
  csv.pop();
  

  const newObjectAtIndex1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
  csv.splice(1, 0, Object.values(newObjectAtIndex1));
  
  const newObjectAtEnd = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
  csv.push(Object.values(newObjectAtEnd));
  
  console.log("Updated CSV Array:", csv);
//   PART 5 
const csv = [
    ["ID", "Name", "Occupation", "Age"],
    [42, "Bruce", "Knight", 41],
    [57, "Bob", "Fry Cook", 19],
    [63, "Blaine", "Quiz Master", 58],
    [98, "Bill", "Doctor’s Assistant", 26]
  ];
  
 
  csv.pop();
  
 
  const newObjectAtIndex1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
  csv.splice(1, 0, Object.values(newObjectAtIndex1));
  
 
  const newObjectAtEnd = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
  csv.push(Object.values(newObjectAtEnd));
  

  const csvString = csv.map(row => row.join(',')).join('\n');
  

  console.log("Final CSV String:\n", csvString);