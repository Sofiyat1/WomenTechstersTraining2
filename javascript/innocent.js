const btn = document.querySelector("#openModalButton");
const modal = document.getElementById('modal');
const modalContent = document.getElementById("modalContent")
const pSign = document.querySelector("#openSignInPage")
const signin = document.getElementById("signIn")
const signInContent = document.getElementById("signInContent")
const repeatbtn = document.querySelector("#repeatModalButton")
const iconSignIn = document.querySelector("#closeSignInIcon")
const iconSignUp = document.querySelector("#closeSignUpIcon")

const openModal = () =>{
    modal.style.display = "flex"
}

const closeModal = () =>{
    modal.style.display = "none"
}

const openSignIn = () => {
    signin.style.display = "flex"
    modal.style.display = "none"
}

const closeSignIn = () =>{
    signin.style.display = "none"
}

const btnClickEventHandler = () =>{
    openModal();
}

const signInClickEventHandler = () => {
    openSignIn();
}

modalContent.addEventListener('click', (e)=>{
    e.preventDefault()
    e.stopPropagation()
})

signInContent.addEventListener('click', (e)=>{
    e.preventDefault()
    e.stopPropagation()
})


const repeatBtnClick = () => {
    signin.style.display = "none"
    openModal();

}

const closeSignInIcon =() =>{
    signin.style.display = "none";
    modal.style.display = "none";
}


btn.addEventListener("click", btnClickEventHandler)
modal.addEventListener("click", closeModal)
signin.addEventListener("click", closeSignIn)
pSign.addEventListener("click", signInClickEventHandler)
repeatbtn.addEventListener("click", repeatBtnClick)
iconSignUp.addEventListener("click", closeSignInIcon)
iconSignIn.addEventListener("click", closeSignInIcon)
