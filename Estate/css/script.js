const labelNewsletter = document.querySelector('.Newsletter__mid_form_labelInput_label')
const inputNewsletter = document.querySelector('.Newsletter__mid_form_labelInput_input')

function MoveLabel() {
    labelNewsletter.style.top = "-24px";
}
function MoveLabelBack() {
    if(inputNewsletter.value==''){
        labelNewsletter.style.top = "0px";
    }
}
inputNewsletter.addEventListener('focusin', MoveLabel)
inputNewsletter.addEventListener('focusout', MoveLabelBack)

////////////////////Newsletter/Label/Move/////////////////////// 

const labelZipcode = document.querySelector('.Zipcode_search_LabelInput_Label')
const inputZipcode = document.querySelector('.Zipcode_search_LabelInput_Input')

function MoveLabelZip() {
    labelZipcode.style.top = "-20px";
}
function MoveLabelBackZip() {
    if(inputZipcode.value==''){
        labelZipcode.style.top = "0px";
    }
}
inputZipcode.addEventListener('focusin', MoveLabelZip)
inputZipcode.addEventListener('focusout', MoveLabelBackZip)

////////////////////Zipcode/Label/Move/////////////////////// 

const LeftArrow = document.querySelector('.LeftArrow')
const RightArrow = document.querySelector('.RightArrow')
const OfficeImg = document.getElementById('OfficeImg')

function ToggleActiveArrow() {
    LeftArrow.classList.toggle('ArrowButtonActive')
    RightArrow.classList.toggle('ArrowButtonActive')
    LeftArrow.classList.toggle('ArrowButtonUnActive')
    RightArrow.classList.toggle('ArrowButtonUnActive')
}
function RightArrowImgChange() {
    if (RightArrow.classList.contains('ArrowButtonUnActive')){
        ToggleActiveArrow()
        OfficeImg.src = "/css/img/head/head_image_2.jpg"
    }
}
function LeftArrowImgChange() {
    if (LeftArrow.classList.contains('ArrowButtonUnActive')){
        ToggleActiveArrow()
        OfficeImg.src = "/css/img/head/head_image.png"
    }
}

LeftArrow.addEventListener('click', LeftArrowImgChange)
RightArrow.addEventListener('click', RightArrowImgChange)


////////////////////Head/Arrows/toggle/////////////////////// 

const home = document.querySelector('.head');
const GoToHomeBTN = document.querySelectorAll('.GoToHome');
GoToHomeBTN.forEach(element => {
  element.addEventListener('click', () => {
      home.scrollIntoView({
        block: "start",
        inline: "start",
        behavior: "smooth"
      });
  });
});

const about = document.querySelector('.HowItWorks');
const GoToAboutBTN = document.querySelectorAll('.GoToAbout');
GoToAboutBTN.forEach(element => {
  element.addEventListener('click', () => {
      about.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth"
      });
  });
});

const service = document.querySelector('.Feature');
const GoToServiceBTN = document.querySelectorAll('.GoToService');
GoToServiceBTN.forEach(element => {
  element.addEventListener('click', () => {
      service.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth"
      });
  });
});

const portfolio = document.querySelector('.Service');
const GoToPortfolioBTN = document.querySelectorAll('.GoToPortfolio');
GoToPortfolioBTN.forEach(element => {
  element.addEventListener('click', () => {
      portfolio.scrollIntoView({
        block: "start",
        inline: "start",
        behavior: "smooth"
      });
  });
});

const blog = document.querySelector('.Testimonial');
const GoToBlogBTN = document.querySelectorAll('.GoToBlog');
GoToBlogBTN.forEach(element => {
  element.addEventListener('click', () => {
      blog.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth"
      });
  });
});

const contact = document.querySelector('.Newsletter');
const GoToContactBTN = document.querySelectorAll('.GoToContact');
GoToContactBTN.forEach(element => {
  element.addEventListener('click', () => {
      contact.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth"
      });
  });
});

////////////////////BTNS/////////////////////// 

const BurgerBTN = document.querySelector('.burger')
const header_menu = document.querySelector('.header__menu')

function ToggleBurger(){
  BurgerBTN.classList.toggle('active')
  header_menu.classList.toggle('active')
}

BurgerBTN.addEventListener('click', ToggleBurger)

////////////////////Burger 16:30/////////////////////// 

