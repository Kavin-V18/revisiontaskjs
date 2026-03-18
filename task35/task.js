let contentContainer = document.getElementById("content-container");
let loader = document.getElementById("loader");
let itemCount = 1;
let isLoading = false;

function loadMoreContent() {
    if (isLoading) return;
    isLoading = true;
    setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            let item = document.createElement("div");
            item.classList.add("item");
            item.textContent = `item ${itemCount++}`;
            contentContainer.appendChild(item);
        }
        isLoading = false;
    }, 500);
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadMoreContent();
    }
});
loadMoreContent();
