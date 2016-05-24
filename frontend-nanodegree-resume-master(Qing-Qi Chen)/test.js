//var declares a new variable for all data types
var firstName = "james";
var age = 32;


//clarify difference between append and prepend
var name ="Jason Chen";
var formattedName = HTMLheaderName.replace("%data%", name);
var Role ="Front-End Web developer";
var formattedRole = HTMLheaderRole.replace("%data%", Role);
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


// array demo

var skills = ["awesome", "programming"];
$("#main").append(skills[0]);

// object demo 

var bio = {
    "Name": name, // remember to format  "": ____ , var,array are okay
    "age" : "26", // new string
    "Skills": skills //array
};
$("#main").append(bio.Name);

// object for biograph

var name ="Jason Chen";
var formattedName = HTMLheaderName.replace("%data%", name);
var Role ="Front-End Web developer";
var formattedRole = HTMLheaderRole.replace("%data%", Role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["Semiconductor inspection", "programming"];
var contactinfo = ["email: r01941003@ntu.edu.tw",
                   "phone: +886-975392085"
                  ]
var formattedcontact = HTMLcontactGeneric.replace("%contact%",contactinfo);


var bio = {
    "Name": formattedName, 
    "Role" : formattedRole,
    "contactinfo":formattedcontact,
    "picture": "none",
    "welcomemessage": "Hi welecome to my website",
    "skills": skills
};
$("#main").append(bio.contactinfo);

// Another two ways to add properties into object

var work ={};
work.position = "Application Engineer"; // using dot notation to add 

work["name"] ="KLA-Tencor"; 
//using bracket notation to add

$("#main").append(work.Name);
$("#main").append(work["Name"]);
