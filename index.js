const asideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggleBtn = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  asideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  asideMenu.style.display = "none";
});

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggleBtn.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggleBtn.querySelector("span:nth-child(2)").classList.toggle("active");
});

Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${
      order.shipping === "Declined"
        ? "danger"
        : order.shipping === "Pending"
        ? "warning"
        : "success"
    }">${order.shipping}</td>
    <td class="primary">Details</td>
  `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
