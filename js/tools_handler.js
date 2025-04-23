// clear handler
document.querySelector('.clear').addEventListener('click', function () {
    text.value = '';
    chars_count.textContent = '0';
    chars_nospace_count.textContent = '0';
    words_count.textContent = '0';
    sentences_count.textContent = '0';
    paragraphs_count.textContent = '0';
});

document.querySelector('.uppercase').addEventListener('click', function () {
    text.style.textTransform = 'uppercase';
});

document.querySelector('.lowercase').addEventListener('click', function () {
    text.style.textTransform = 'lowercase';
});

document.querySelector('.capitalize').addEventListener('click', function () {
    text.style.textTransform = 'capitalize';
});

document.querySelector('.align_left').addEventListener('click', function () {
    text.style.textAlign = 'left';
});

document.querySelector('.align_center').addEventListener('click', function () {
    text.style.textAlign = 'center';
});

document.querySelector('.align_right').addEventListener('click', function () {
    text.style.textAlign = 'right';
});