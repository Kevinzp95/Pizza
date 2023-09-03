const cuponModal = document.querySelector("#cuponModal");
// const cuponInfo = document.querySelector(".cupon__info");
// const cupon = document.querySelector(".cupon");
// const cuponCloseBtn = document.querySelector(".cupon__closeBtn");
// const cuponBody = document.querySelector(".cupon__body");

const cost = document.querySelector(".cost");
const amountPizza = document.querySelector(".amount__pizza");
const pizzaAddBtn = document.querySelector(".pizzaAddBtn");
const pizzaRemoveBtn = document.querySelector(".pizzaRemoveBtn");
const addDiscountbtn = document.querySelector("#addDiscountBtn");
const discount = document.querySelector(".discount");
const sunIcon = document.querySelector(".daytime__sun");
const moonIcon = document.querySelector(".daytime__moon");
const container = document.querySelector(".container");
const inscriptions = document.querySelectorAll(".left__fields span");
const form = document.querySelector(".orderDetails");
const reservation = document.querySelector(".formHeader span");
const reservationSubtitle = document.querySelector(".formSubtitle");
const reservationBorder = document.querySelector(".dataCustomer");
const search = document.querySelector(".search");
const currentTime = new Date().toLocaleTimeString();
const nightTime1 = new Date("Sun Sep 03 2023 19:00:00").toLocaleTimeString();
const nightTime2 = new Date("Sun Sep 03 2023 06:00:00").toLocaleTimeString();

let cuponNumber = "";
let totalBill = 0;

// cuponModal.addEventListener("click", createCuponNumber);
// cuponCloseBtn.addEventListener("click", createCuponNumber);
// cupon.addEventListener("click", createCuponNumber);
// cuponBody.addEventListener("click", createCuponNumber);

// cuponCloseBtn.classList.add("cursor");

// function createCuponNumber(e) {
//   console.log(e);
//   if (e.target == cuponBody) {
//     return;
//   }
//   cupon.classList.toggle("hide");
//   e.preventDefault();
//   e.stopPropagation();
//   document.body.classList.toggle("overflowYhidden");
// }

// Array.from(menuItemAddBtn);
cuponModal.addEventListener("click", createCupon);
pizzaAddBtn.addEventListener("click", plusPizza);
pizzaAddBtn.addEventListener("click", plusCost);
pizzaRemoveBtn.addEventListener("click", minusPizza);
pizzaRemoveBtn.addEventListener("click", minusCost);
addDiscountbtn.addEventListener("click", addDiscount);
moonIcon.addEventListener("click", toggleTimeMode);
sunIcon.addEventListener("click", toggleTimeMode);

function createCupon(e) {
  for (i = 0; i < 8; i++) {
    cuponNumber += Math.round(Math.random() * 10);
  }
  Swal.fire({
    title: "Discount 30%",
    text: "Your promo code:" + " " + cuponNumber,
    // text: "Something went wrong!",
    // imageUrl: "img/sale.jpg",
    // imageWidth: 400,
    // imageHeight: 320,
    // imageAlt: "Custom image",
    background: "#2F2F2F",
    color: "#FF8C42",
    confirmButtonColor: "#FF8C42",
    icon: "success",
    showCloseButton: true,
  });
  e.preventDefault();
  e.stopPropagation();
}

function plusPizza() {
  let currentValue = parseInt(amountPizza.innerHTML);
  let newValue = currentValue + 1;
  amountPizza.innerHTML = newValue;
}

function minusPizza() {
  let currentValue = parseInt(amountPizza.innerHTML);
  let newValue = currentValue - 1;
  if (newValue < 1) {
    return;
  } else {
    amountPizza.innerHTML = newValue;
  }
}

function plusCost() {
  totalBill += parseInt(this.previousElementSibling.innerText);
  cost.innerText = totalBill;
}

function minusCost() {
  totalBill -= parseInt(this.nextElementSibling.innerText);
  cost.innerText = totalBill;
}

function addDiscount(e) {
  if (discount.value == cuponNumber) {
    cost.innerText = totalBill * 0.7;
  }
  e.preventDefault();
  discount.value = "";
}

function toggleTimeMode() {
  moonIcon.classList.toggle("hide");
  sunIcon.classList.toggle("hide");
  container.classList.toggle("bgBlack");
  container.classList.toggle("bgWhite");

  if (container.classList.contains("bgWhite")) {
    inscriptions.forEach((el) => {
      el.style.color = "black";
    });
    form.style.background = "#434343";
    reservation.style.color = "#434343";
    reservationSubtitle.style.color = "black";
    reservationBorder.style.border = "1px solid black";
    search.style.background = "white";
    search.style.color = "black";
  } else {
    inscriptions.forEach((el) => {
      el.style.color = "white";
    });
    form.style.background = "rgb(255, 255, 255, 0.2)";
    form.style.color = "#dddddd";
    reservationSubtitle.style.color = "white";
    reservationBorder.style.border = "1px solid rgb(255, 255, 255, 0.5)";
    search.style.background = "#151515";
    search.style.color = "white";
  }
}
if (currentTime < nightTime1 && currentTime > nightTime2) {
  toggleTimeMode();
}
