function openModal(title, description, price, imageUrl) {
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const modalImage = document.getElementById('modal-image');
    const modal = document.getElementById('myModal');

    modalTitle.innerText = title;
    modalDescription.innerText = description;
    modalPrice.innerText = price;
    modalImage.src = imageUrl;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal(); 
    }
};

window.onkeydown = function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
};
