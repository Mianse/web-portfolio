let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
menu.classList.toggle('open-menu');
menu.classList.toggle('move');
}

window.onscroll = ()=> {
    menu.classList.remove('open-menu');
    menu.classList.remove('move');
}

//reviews swiper
var swiper = new Swiper(".review-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });
  //email js
  function validate(){
    let name= document.querySelector('.name')
    let email= document.querySelector('.email')
    let msg= document.querySelector('.message')
    let sendBtn= document.querySelector('.send-btn')

    sendBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        if(name.value == "" ||email.value == ""||msg.value == ""){
            emptyerror();
        }else{
            sendmail(name.value, email.value, msg.value);
            success();
        }
    })
  }
  validate();

  function sendmail(name, email, msg){
    emailjs.send("service_q0uhv5u","template_n2jwsir",{
        to_name: name,
        from_name: email,
        message: msg,
        });
  }

  function emptyerror(){
    swal({
        title: "oh no.....!",
        text: "field cannot be empty!",
        icon: "error",
        
      });
  }

  function success(){
    swal({
        title: "Email sent successfully",
        text: "we try to reply in 24hours",
        icon: "success",
        
      });
  }

  //header background
  let header = document.querySelector('header');

  window.addEventListener('scroll', () =>{
    header.classList.toggle('header-active', window.scrollY > 0)
  })

  //scroll top

  let scrollTop = document.querySelector('.scroll-top');
  

  window.addEventListener('scroll', () =>{
    scrollTop.classList.toggle('scroll-active', window.scrollY >= 400)
  })

