function openModal(imageElement) {
    document.getElementById('myModal').style.display = "block";
    document.getElementById('img01').src = imageElement.src;
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}
