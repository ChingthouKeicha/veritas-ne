
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("site-search");
  if (!input) return;

  input.addEventListener("input", function () {
    const query = input.value.toLowerCase();
    const articles = document.querySelectorAll("article");
    articles.forEach(article => {
      const match = article.textContent.toLowerCase().includes(query);
      article.style.display = match ? "block" : "none";
    });
  });
});
