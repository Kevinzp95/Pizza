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

let cuponNumber = "";
let totalBill = 0;

// cuponModal.addEventListener("click", createCuponNumber);
// cuponCloseBtn.addEventListener("click", createCuponNumber);
// cupon.addEventListener("click", createCuponNumber);
// cuponBody.addEventListener("click", createCuponNumber);

// cuponCloseBtn.classList.add("cursor");

cuponModal.addEventListener("click", function (e) {
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
});

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

pizzaAddBtn.addEventListener("click", plusPizza);
pizzaAddBtn.addEventListener("click", plusCost);
pizzaRemoveBtn.addEventListener("click", minusPizza);
pizzaRemoveBtn.addEventListener("click", minusCost);
addDiscountbtn.addEventListener("click", addDiscount);

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
