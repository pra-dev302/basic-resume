const userInputData = document.querySelector(".userInputData");
const readyResume = document.querySelector(".readyResume");
const pdfResume = document.querySelector(".download");
readyResume.style.display = "none";
pdfResume.style.display = "none";

const inputName = document.querySelector("#inpName");
const inpNumber = document.querySelector("#inpNumber");
const inpAddress = document.querySelector("#inpAdd");
const inpEmail = document.querySelector("#inpEmail");
const inpEdu = document.querySelector("#inpEdu");
const inpSkill = document.querySelector("#inpSkill");
const inpAbout = document.querySelector("#inpAbout");
const inpProject = document.querySelector("#inpProject");
const inpExp = document.querySelector("#inpExp");

// for ready resume
const userName = document.querySelector("#forName");
const userNumber = document.querySelector("#userNumber");
const userAddress = document.querySelector("#userAddress");
const userEmail = document.querySelector("#userEmail");
const userEdu = document.querySelector("#forEducation");
const userSkill = document.querySelector("#forSkill");
const userAbout = document.querySelector("#forAboutMe");
const userProject = document.querySelector("#forProject");
const userExp = document.querySelector("#forExperience");

function btnClick() {
    userInputData.style.display = "none";
    readyResume.style.display = "block";
    pdfResume.style.display = "block";
    buildResume();
    window.scrollTo(0, 0);
}
function buildResume() {
    userName.innerText = inputName.value;
    userNumber.innerText = inpNumber.value;
    userAddress.innerText = inpAddress.value;
    userEmail.innerText = inpEmail.value;
    // for education...........
    const arrEduList = inpEdu.value.split("\n");
    arrEduList.forEach(list => {
        const trimmedList = list.trim();
        let year;
        let degree;
        if (trimmedList === "") return;
        const indexSpace = trimmedList.indexOf(" ");
        if (indexSpace !== -1) {
            year = trimmedList.slice(0, indexSpace);
            degree = trimmedList.slice(indexSpace + 1).trim();
        }
        const displayList = year + "\u00A0\u00A0\u00A0\u00A0\u00A0" + degree;
        console.log(displayList);
        const li = document.createElement("li");
        li.textContent = displayList;
        userEdu.appendChild(li);
    });
    userAbout.innerText = inpAbout.value;
    //for skills
    const arrSkills = inpSkill.value.split("\n");
    arrSkills.forEach(list => {
        if (list.trim() !== "") {
            const li = document.createElement("li");
            li.textContent = list;
            userSkill.appendChild(li);
        }
        else {
            return;
        }
    });
    //for project
    const arrProject = inpProject.value.split("\n");
    arrProject.forEach(list => {
        if (list.trim() !== "") {
            const li = document.createElement("li");
            li.textContent = list;
            userProject.appendChild(li);
        }
        else {
            return;
        }
    });
    // for experience
    const arrExp = inpExp.value.split("\n");
    arrExp.forEach(list => {
        if (list.trim() !== "") {
            const li = document.createElement("li");
            li.textContent = list;
            userExp.appendChild(li);
        }
        else {
            return;
        }
    });
}
function btnPdf(){
   const opt = {
        margin: 0,
        filename: 'My_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(readyResume).set(opt).save();

}