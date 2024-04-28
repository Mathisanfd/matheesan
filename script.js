const selectorList = document.getElementById('selector__list');
const selectorText = document.querySelector('.selector__text');
const selectorIcon = document.getElementById('selector__icon');

const selectorItems = document.querySelectorAll('.selector__item');

selector.addEventListener('click', () => {
    selectorList.classList.toggle('hidden');
    selectorIcon.classList.toggle('rotate');
})

selectorItems.forEach( selectItem => {
    selectItem.addEventListener('click', () => {
        selectorText.innerHTML = selectItem.innerHTML;
        selectorList.classList.add('hidden');
    });
});

