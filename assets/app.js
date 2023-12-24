const submitBtn = document.querySelector("#form-control");
const navBar = document.querySelector(".header__nav--bar i");
let slideImage = document.querySelectorAll(".slide");

submitBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputData = document.getElementById("fullName").value;
  let textareaData = document.getElementById("textarea").value;
  if (inputData && textareaData) {
    let arrHTML = `
    <div class="wish-box-item">
        <strong class="name">${inputData}</strong>
        <p class="happy">${textareaData}</p>
    </div>
    `;
    let wishBox = document.querySelector(".wish-box");
    wishBox.insertAdjacentHTML("beforeend", arrHTML);
    document.querySelector("#form-control").reset();
  }
  else {
    alert("Vui lòng nhập thông tin của bạn vào đây")
  }
});

navBar.addEventListener("click", () => {
  document.querySelector(".open-menu").classList.toggle("fa-bars");
  document.querySelector(".open-menu").classList.toggle("fa-xmark");
  document.querySelector(".header__nav--menu").classList.toggle("open-nav");
});
//runsile background
setInterval(() => {
  let count = 0;
  slideImage[count].classList.remove("active");
  count = (count + 1) % slideImage.length;
  slideImage[count].classList.add("active");
}, 5000);

//runsile background

// Animation
// khỏi tạo thư viện
new WOW().init();
// end Animation
// //khỏi tao funcy box
// $(document).ready(function(){
//     $('.album__lists a').funcybox()
// });

Fancybox.bind("[data-fancybox]", {
  Infinity: false,
  keyboard: {
    Escape: "close",
    Delete: "close",
    Backspace: "close",
    PageUp: "next",
    PageDown: "prev",
    ArrowUp: "prev",
    ArrowDown: "next",
    ArrowRight: "next",
    ArrowLeft: "prev",
  },
  l10: {
    CLOSE: "đóng",
  },
  Carousel: {
    transition: "slide",
  },
  showClass: "f-fadeIn",
  Thumbs: {
    showOnStart: false,
  },
  Toolbar: {
    display: {
      right: ["close"],
    },
  },
});
Fancybox.defaults.showClass = "f-scaleIn";

//end khỏi tao funcy box
