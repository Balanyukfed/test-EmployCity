document.getElementById('rangeInput').addEventListener('input', function() {
    const value = this.value;
    document.getElementById('rangeValue').textContent = value + '%';
});

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__menu-list");
  
    burger.addEventListener("click", function () {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
    });
  });
  