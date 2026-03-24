function highlightSearch() {
  const searchInput = document.getElementById('searchInput');
  const contentElement = document.getElementById('content');
  const searchTerm = searchInput.value.trim();

  if (!searchTerm) {
    contentElement.innerHTML = contentElement.textContent;
    return;
  }

  contentElement.innerHTML = contentElement.textContent;

  const regex = new RegExp(`(${searchTerm})`, 'gi');

  const highlightedContent = contentElement.innerHTML.replace(regex, (match) => {
    return `<mark>${match}</mark>`;
  });

  contentElement.innerHTML = highlightedContent;
}
