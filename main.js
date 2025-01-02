$(document).ready(function () {
  $(".dropdown-toggle").dropdown();
});
// const cardsList = [
//     {
//         title: "خدمة 1",
//         desc: "هذه الخدمة 1",
//         img: "card1.jpg",
//         category: "category1"
//     },
//     {
//         title: "خدمة 2",
//         desc: "هذه الخدمة 2",
//         img: "card2.jpg",
//         category: "category1"
//     },
//     {
//         title: "خدمة 3",
//         desc: "هذه الخدمة 3",
//         img: "card3.jpg",
//         category: "category2"
//     },
//     {
//         title: "خدمة 4",
//         desc: "هذه الخدمة 4",
//         img: "card4.jpg",
//         category: "category2"
//     }
// ];

// const cardsHTML = cardsList.map(card => {
//     return `
//         <div class="col-md-3">
//             <div class="card">
//                 <img src="${card.img}" class="card-img-top" alt="${card.title}">
//                 <div class="card-body">
//                     <h5 class="card-title">${card.title}</h5>
//                     <p class="card-text">${card.desc}</p>
//                     <a href="#" class="btn btn-primary">اطلب الخدمة</a>
//                 </div>
//                 <div class="card-footer">
//                     <small class="text-muted">${card.category}</small>
//                 </div>
//             </div>
//         </div>
//     `;
// }).join("");

// document.querySelector(".categories .row").insertAdjacentHTML("beforeend", cardsHTML);
