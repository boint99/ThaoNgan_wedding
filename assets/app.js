const submitBtn = document.querySelector("#form-control");
const load = document.querySelector("#wish-box")
const navBar = document.querySelector(".header__nav--bar i");
let imageTag = document.querySelector(".slide");

submitBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputData = document.getElementById("fullName").value;
  let textareaData = document.getElementById("textarea").value;
  let objectData = {
    Name: inputData,
    Describe: textareaData,
  };
  fetch("https://sheet.best/api/sheets/8bcf9d42-7f12-4546-9cf6-d7c0a039c749", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(objectData),
  }).then((response) => response.json());

  setTimeout(() => {
    location.reload()
  }, 500);
  
});

const fetchData = async () => {
  const response = await fetch(
    "https://sheet.best/api/sheets/8bcf9d42-7f12-4546-9cf6-d7c0a039c749",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const result = await response.json();
  const data = result.map(item => (

  `<div class="wish-box-item">
      <strong class="name">${item.Name}</strong>
      <p class="happy">${item.Describe}</p>
    </div>`
  ))
  const divElement = document.querySelector(".wish-box");
  divElement.innerHTML = data.join("")
};
fetchData();

//nav
navBar.addEventListener("click", () => {
  document.querySelector(".open-menu").classList.toggle("fa-bars");
  document.querySelector(".open-menu").classList.toggle("fa-xmark");
  document.querySelector(".header__nav--menu").classList.toggle("open-nav");
});
//end nav

//runsile background
var i = 0;
var imgArr = [
  "./assets/images/background-1.jpg",
  "./assets/images/background-2.jpg",
  "./assets/images/background-3.jpg",
];

function slideShow_auto() {
  imageTag.setAttribute("src", imgArr[i]);
  imageTag.style.animation =
    "5s linear 0s infinite alternate backwards running kenburns-top";
  imageTag.style.transition = "all 0.5s";
  i++;
  if (i === imgArr.length) {
    i = 0;
  }
}
setInterval(slideShow_auto, 5000);
//runsile background

// khỏi tạo thư viện
new WOW().init();
// //khỏi tao funcy box

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

// if (inputData && textareaData) {
//   let arrHTML = `
//   <div class="wish-box-item">
//       <strong class="name">${inputData}</strong>
//       <p class="happy">${textareaData}</p>
//   </div>
//   `;
//   let wishBox = document.querySelector(".wish-box");
//   wishBox.insertAdjacentHTML("beforeend", arrHTML);
//   document.querySelector("#form-control").reset();
// }
// else {
//   alert("Vui lòng nhập thông tin của bạn vào đây")
// }
