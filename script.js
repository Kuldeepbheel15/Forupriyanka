let currentPage = 1;

function toggleClass(el, className) {
  if (!el) return;
  el.classList.toggle(className);
}

function movePage(el, page) {
  if (!el) return;

  if (page === currentPage) {
    currentPage += 2;
    toggleClass(el, "left-side");
    toggleClass(el.nextElementSibling, "left-side");
  } 
  else if (page === currentPage - 1) {
    currentPage -= 2;
    toggleClass(el, "left-side");
    toggleClass(el.previousElementSibling, "left-side");
  }
}
