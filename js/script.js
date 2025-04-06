//consts
const text = document.querySelector('.textbox');
const chars_count = document.querySelector('.chars_count');
const chars_nospace_count = document.querySelector('.chars_nospace_count');
const words_count = document.querySelector('.words_count');
const sentences_count = document.querySelector('.sentences_count');
const paragraphs_count = document.querySelector('.paragraphs_count');
// clear operation
document.querySelector('.clear').addEventListener('click', function () {
    text.value = '';
    chars_count.textContent = '0';
    chars_nospace_count.textContent = '0';
    words_count.textContent = '0';
    sentences_count.textContent = '0';
    paragraphs_count.textContent = '0';
});

text.addEventListener('input', function () {
    //prevent of typing scripts tag
    if(text.value.includes('<script>')){
        alert('you cant type script tags!');
        text.value = text.value.replace('<script>','');
    }
    // characters counting
    chars_count.textContent = text.value.length;
    // characters with no space counting
    chars_nospace_count.textContent = text.value.replace(/ /g, '').length;
    // words counting
    words_count.textContent = text.value.split(' ').filter(word => word.length > 0).length;
});

