const question = document.querySelectorAll('.question');


question.forEach((e) => {
    console.log(e);

    const btn = e.querySelector('.qes-btn');

    console.log(btn);

    btn.addEventListener('click', () => {
        
        e.classList.toggle('show');
    });
});
