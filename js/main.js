function loadFooter() {
  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    const footerPath =
      footerContainer.dataset.footerPath || "includes/footer.html";
    fetch(footerPath)
      .then((response) => response.text())
      .then((html) => {
        footerContainer.innerHTML = html;
      });
  }
}

document.addEventListener("DOMContentLoaded", loadFooter);
