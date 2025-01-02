//services 
const cardsList = [
  {
    id: 1,
    title: "إلغاء رخصة نشاط تجاري",
    desc: "في مرحلة إنهاء ممارسة العمل التجاري يتوجب على المستفيد إلغاء رخصته التجارية المرتبطة بالمنشأة، ومن خلال ",
    img: "./imgs/card.png",
    category: ["خدمات رخص الأنشطة التجارية"],
  },
  {
    id: 2,
    title: "قبول نقل ملكية رخصة تجارية",
    desc: "في مرحلة إنهاء ممارسة العمل التجاري يتوجب على المستفيد إلغاء رخصته التجارية المرتبطة بالمنشأة، ومن خلال ",
    img: "./imgs/card.png",
    category: ["خدمات رخص الأنشطة التجارية", "خدمات بلدي"],
  },
  {
    id: 3,
    title: "إلغاء رخصة نشاط تجاري",
    desc: "في مرحلة إنهاء ممارسة العمل التجاري يتوجب على المستفيد إلغاء رخصته التجارية المرتبطة بالمنشأة، ومن خلال ",
    img: "./imgs/card.png",
    category: ["خدمات رخص الأنشطة التجارية"],
  },
  {
    id: 4,
    title: "قبول نقل ملكية رخصة تجارية",
    desc: "في مرحلة إنهاء ممارسة العمل التجاري يتوجب على المستفيد إلغاء رخصته التجارية المرتبطة بالمنشأة، ومن خلال ",
    img: "./imgs/card.png",
    category: ["خدمات رخص الأنشطة التجارية", "خدمات بلدي"],
  },
];

// Variables for Pagination
const pageSize = 3;
let currentPage = 1;
// Function to render cards based on the current page
function renderCards() {
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedCards = cardsList.slice(startIndex, startIndex + pageSize);

  const cardsHTML = paginatedCards
    .map((card) => {
      return `
      <div class="col-lg-4 col-md-2 col-6 mb-3">
          <div class="card">
              <div class="card-body d-flex flex-column row-gap-3">
                  <div class="logo d-flex">
                      <img src="${card.img}" alt="icon" loading="lazy" width="50px" height="50px" />
                  </div>
                  <h5 class="card-title m-0">${card.title}</h5>
                  <p class="card-text">${card.desc}</p>
                  <div class="sub-services d-flex gap-2">
                      ${card.category
                        .map((category, index) => {
                          return `<p class="sub-text fw-bold rounded ${
                            index === 0 ? "primary" : "secondary"
                          }">${category}</p>`;
                        })
                        .join("")}
                  </div>
                  <div class="btns d-flex gap-2">
                      <a href="#" class="w-50 btn btn-outline-primary">تفاصيل الخدمة</a>
                      <a href="#" class="w-50 btn btn-primary">ابدأ الخدمة</a>
                  </div>
              </div>
          </div>
      </div>`;
    })
    .join("");

  document.querySelector(".cards .row").innerHTML = cardsHTML;

  renderPagination();
}

// Function to render pagination controls
function renderPagination() {
  const totalPages = Math.ceil(cardsList.length / pageSize);
  const paginationHTML = Array.from({ length: totalPages }, (_, i) => {
    const page = i + 1;
    return `
      <li class="page-item ${currentPage === page ? "active" : ""}">
          <a class="page-link" href="#" data-page="${page}">${page}</a>
      </li>`;
  }).join("");

  document.querySelector(".pagination").innerHTML = `
    <li class="page-item prev-link ${currentPage === 1 ? "disabled" : ""}">
        <a class="page-link" href="#" data-page="${currentPage - 1}">السابق</a>
    </li>
    ${paginationHTML}
    <li class="page-item next-link ${currentPage === totalPages ? "disabled" : ""}">
        <a class="page-link" href="#" data-page="${currentPage + 1}">التالي</a>
    </li>`;
}

// Event listener for pagination
document.querySelector(".pagination").addEventListener("click", (e) => {
  e.preventDefault();
  const page = parseInt(e.target.getAttribute("data-page"));
  if (!isNaN(page) && page > 0 && page <= Math.ceil(cardsList.length / pageSize)) {
    currentPage = page;
    renderCards();
  }
});

// Initial Render
renderCards();