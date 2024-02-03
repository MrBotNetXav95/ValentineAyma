const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Solo tu y tuuu seras mi valentin por el resto de mi vida, TE AMO AYMARA')
});

const NoBtn = document.querySelector('#noBtn');

NoBtn.addEventListener('mouseover',function () {
    const randomX = parseInt (Math.random()*100);
    const randomY = parseInt (Math.random()*100);
    NoBtn.style.setProperty('top',randomY+'%');
    NoBtn.style.setProperty('left',randomX+'%');
    NoBtn.style.setProperty('transform',`traslate(-${randomX}%,-${randomY}%)`);
})