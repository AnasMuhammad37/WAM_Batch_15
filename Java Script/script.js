// Question 1
let studentName = []; 
// Question 2
let studentNames = new Array();
// Question 3
let student = ["cheetah","Sufi","Juni","Spider","Koka"]
// Question 4
let nmbersOfArr = [0,1,2,3,4,5,6,7,8,9,]
// Question 5
let booleanArr = [true, false, true, false, true];
// Question 6
let mixedArray = [42, "Hello", true, null, { name: "John" }, [1, 2, 3]];


// Question 7
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.getElementById("qualifications-list").innerHTML = `
<li>${qualifications[0]}</li>
<li>${qualifications[1]}</li>
<li>${qualifications[2]}</li>
<li>${qualifications[3]}</li>
<li>${qualifications[4]}</li>
<li>${qualifications[5]}</li>
<li>${qualifications[6]}</li>
<li>${qualifications[7]}</li>
`;

// Question 8
let students = ["Michael", "John", "Tony"];
let scores = [320, 230, 480];
let totalMarks = 500;
let percentage1 = (scores[0] / totalMarks) * 100;
let percentage2 = (scores[1] / totalMarks) * 100;
let percentage3 = (scores[2] / totalMarks) * 100;
document.getElementById("output").innerHTML = `
Score of ${students[0]} is ${scores[0]}. Percentage: ${percentage1}%
<br>
Score of ${students[1]} is ${scores[1]}. Percentage: ${percentage2}%
<br>
Score of ${students[2]} is ${scores[2]}. Percentage: ${percentage3}%
`;

