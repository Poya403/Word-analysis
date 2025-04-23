//consts
const text = document.querySelector('.textbox');
const chars_count = document.querySelector('.chars_count');
const chars_nospace_count = document.querySelector('.chars_nospace_count');
const words_count = document.querySelector('.words_count');
const sentences_count = document.querySelector('.sentences_count');
const paragraphs_count = document.querySelector('.paragraphs_count');

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
    //sentences_count
    sentences_count.textContent = text.value.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    //paragraph_count
    paragraphs_count.textContent = text.value.split(/\ns*\n/).filter(paragraph => paragraph.trim().length > 0).length;
});

