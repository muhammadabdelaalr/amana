document.addEventListener("DOMContentLoaded", () => {
  const servicesData = [
    {
      title: "خدمة رخصة البناء",
      description: "خدمة تقديم طلب للحصول على رخصة بناء جديدة",
      imgSrc: "./imgs/card.png",
      primaryText: "خدمات الرخص الأنشطة التجارية",
      secondaryText: "خدمات بلدي",
    },
    {
      title: "خدمة تجديد الرخصة",
      description: "تجديد رخصة بناء قائمة بسهولة",
      imgSrc: "./imgs/card.png",
      primaryText: "تجديد الرخص",
      secondaryText: "خدمات بلدي",
    },
    {
      title: "خدمة إلغاء الرخصة",
      description: "إلغاء رخصة بناء حالية",
      imgSrc: "./imgs/card.png",
      primaryText: "إلغاء الرخص",
      secondaryText: "خدمات بلدي",
    },
  ];

  const carousel = document.getElementById("servicesCarousel");

  // Generate cards dynamically
  servicesData.forEach((service) => {
    const card = `
      <div class="card text-end shadow-sm">
        <div class="card-body d-flex flex-column row-gap-3">
          <div class="logo">
            <img
              src="${service.imgSrc}"
              alt="icon"
              loading="lazy"
              width="50"
              height="50"
            />
          </div>
          <h5 class="card-title">${service.title}</h5>
          <p class="card-text">${service.description}</p>
          <div class="sub-services d-flex gap-2">
            <p class="sub-text fw-bold rounded primary">
              ${service.primaryText}
            </p>
            <p class="sub-text fw-bold rounded secondary">
              ${service.secondaryText}
            </p>
          </div>
          <div class="btns d-flex gap-2">
            <a href="#" class="w-50 btn btn-outline-primary">تفاصيل الخدمة</a>
            <a href="#" class="w-50 btn btn-primary">ابدأ الخدمة</a>
          </div>
        </div>
      </div>
    `;
    carousel.innerHTML += card;
  });

  // Initialize Owl Carousel
  $("#servicesCarousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    navText: ["<", ">"],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
});
