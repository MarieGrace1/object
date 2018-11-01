/*var student = {name:"Alice",
Skills:"javascript",
 id:"758927520", 
phonenumber:"078987653"
};
//accessing the value
console.log(student["name"]);
//assigning the value
student.message="hello world";

let students= {
	student1= {
		name:"Grace",
		age:20,
		message:"Hello I am Grace",
		experience: {
			company:"Limitless",
			from:"2018-02-02",
			title:"Marketing manager"
		},
		skills:"javascript"
	}
}*/
 

 var students= {
 	student1:{
 		names:"Sonia Teta Rugira",
 		age:"19",
 		skills:["javascript", "html", "teamwork"],
 		Biography:"I am the second born and I live at Kimihurura",
 	},
 	student2:{
 		names:"Marie Grace Iradukunda",
 		age:"20",
 		skills:["javascript","html", "css"],
 		biography:"I am the last born and I live in Kimironko",

 	},
 };
 console.log(students.student1);
 console.log(students.student2);

for (let key in students) {
	console.log(students[key]);
}
// calling the object
console.log(students.student1.age);
console.log(students["students"]["student1"]["age"]);