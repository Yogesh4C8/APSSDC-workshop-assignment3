let student = {
    name:"Yogesh Kumar",
    qualification:"B.tech",
    stream:"ECE",
    college:"Aditya College of Engineering and Technology",
    contact:{
        email:"kumaryogesh4c8@gmail.com",
        mobile:7794012167
    },
    skills:["HTML5","CSS3","Bootstrap","MaterializeCSS","vanilla JS","JQuery","PHP","MySQL","Git","GitHub","Python","C","React"]
}
let root = document.querySelector(".root")
root.style.fontSize = "18px"
let  leftDiv = document.createElement("div")
let  section = document.createElement("section")
root.append(leftDiv)
leftDiv.id = "leftDiv"
leftDiv.style.border = "2px solid black"
leftDiv.style.height = "100vh"
leftDiv.style.width = "30%"

leftDiv.style.backgroundColor = "skyblue"

let profileImg = document.createElement("img")
leftDiv.append(profileImg)
profileImg.setAttribute("src","profile.jpg")
profileImg.style.borderRadius = "50%"
// leftDiv.style.alignItems = "center"
profileImg.style.height = "10em"
profileImg.style.padding = "20%"
let details = document.createElement("div")
leftDiv.append(details)
let studentName = document.createElement("h4")
let studentQualification = document.createElement("h4")
let studentStream = document.createElement("h4")
let studentCollege = document.createElement("h4")
studentName.style.color = "white"
studentQualification.style.color = "white"
studentStream.style.color = "white"
studentCollege.style.color = "white"
studentName.style.padding = "0% 20%"
studentQualification.style.padding = "0% 20%"
studentStream.style.padding = "0% 20%"
studentCollege.style.padding = "0% 14%"
details.append(studentName)
details.append(studentQualification)
details.append(studentStream)
details.append(studentCollege)
studentName.innerText = student.name
studentQualification.innerText = student.qualification
studentStream.innerText = student.stream
studentCollege.innerText = student.college

root.style.display = "flex"

let  rightDiv = document.createElement("div")
root.append(rightDiv)
rightDiv.id = "leftDiv"
rightDiv.style.border = "2px solid black"
rightDiv.style.height = "100vh"
rightDiv.style.width = "70%"
let heading = document.createElement("h2")
heading.style.padding = "0 0 0 4%"
heading.style.color = "coral"
let career = document.createElement("div")
career.style.padding = "0 0 0 4%"
career.style.color = "skyblue"
rightDiv.append(heading)
rightDiv.append(career)
let eDetails = document.createElement("h2")
rightDiv.append(eDetails)
eDetails.innerText = "Skills"
eDetails.style.padding = "1% 0 0 4%"
eDetails.style.color = "coral"
eDetails.innerText = "Education Details"
heading.innerText = "Career Objective"
career.innerText = "Secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company"

let educationImg = document.createElement("img")
rightDiv.append(educationImg)
educationImg.style.paddingLeft = "20%"
educationImg.setAttribute("src","educationDetails.png")

let skillsH = document.createElement("h2")
rightDiv.append(skillsH)
skillsH.innerText = "Skills"
skillsH.style.padding = "4% 0 0 4%"
skillsH.style.color = "coral"
let list = document.createElement("ul")
rightDiv.append(list)
student.skills.forEach(myList)

function myList(item, index){
    list.innerHTML += `<li style="display:inline">${item}, </li>`
}
rightDiv.style.color = "skyblue"
let contact = document.createElement("h2")
rightDiv.append(contact)
contact.innerText = "Contact"
contact.style.padding = "4% 0 0 4%"
contact.style.color = "coral"
contact.style.display = "inline"
let mobile = document.createElement("span")
rightDiv.append(mobile)
mobile.innerText = student.contact["mobile"]
let email = document.createElement("span")
rightDiv.append(email)
email.innerText = student.contact["email"]
email.style.paddingLeft = "3%"
mobile.style.paddingLeft = "3%"
mobile.style.color = "skyblue"
email.style.color = "skyblue"