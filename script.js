// Abre el canal de YouTube
function openChannel(url) {
  window.open(url, '_blank');
}

// Función para filtrar los canales
function filterChannels() {
  const searchInput = document.getElementById('search').value.toLowerCase();
  const categoryFilter = document.getElementById('categoryFilter').value;
  const channelCards = document.querySelectorAll('.channel-card');

  channelCards.forEach(card => {
    const channelName = card.querySelector('h2').innerText.toLowerCase();
    const channelCategory = card.getAttribute('data-category');

    if (
      (channelName.includes(searchInput) || searchInput === '') &&
      (channelCategory === categoryFilter || categoryFilter === '')
    ) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}