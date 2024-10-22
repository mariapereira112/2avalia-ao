
function openModal(title, description, price, imageUrl) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('modal-image').src = imageUrl;
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}


window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
