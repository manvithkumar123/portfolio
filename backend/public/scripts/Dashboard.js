
const skillPage = document.querySelector('#skillpage');
const certificatePage = document.querySelector('.certificatepage');
const showCertificateBtn = document.querySelector('#showcertificate');
const skillbtn=document.querySelector("#showskill")
const projectbtn= document.querySelector("#showproject")
const projectpage=document.querySelector('.Projectpage')
const contactpage=document.querySelector('.contactpage')
const contactbtn=document.querySelector("#showcontact")

if (showCertificateBtn) {
  showCertificateBtn.addEventListener('click', () => {
    skillPage.style.display = 'none';
    certificatePage.style.display = 'flex';
    projectpage.style.display='none'
    contactpage.style.display="none"
  });
}

if(skillbtn){
    skillbtn.addEventListener("click",()=>{
        certificatePage.style.display='none';
        skillPage.style.display="flex";
        contactpage.style.display="none"
        projectpage.style.display="none"
    })
}
if(projectbtn){
  projectbtn.addEventListener("click",()=>{
    projectpage.style.display='flex'
    certificatePage.style.display='none'
    skillPage.style.display='none'
    contactpage.style.display="none"
  })
}
if(contactbtn){
  contactbtn.addEventListener("click",()=>{
    projectpage.style.display="none"
    skillPage.style.display="none"
    certificatePage.style.display="none"
    contactpage.style.display="flex"
  })
}