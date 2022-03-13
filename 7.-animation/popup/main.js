const btn_close = document.getElementById('close_popup');
const btn_open = document.getElementById('open_popup');
const popup = document.getElementById('popup');

btn_close.addEventListener('click', closePopup);
btn_open.addEventListener('click', openPopup);

function openPopup() {
    popup.classList.add("open-popup");
};

function closePopup() {
    popup.classList.remove('open-popup');
};