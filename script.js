const reviews = document.querySelector('.review_wrapper');
const dots = document.querySelectorAll('.dot');
let dots_d = document.querySelector('.dots');

dots[0].classList.add('dot_active');

function offset(out_pos, number) {
    pos = out_pos;
    reviews.style.left = -(pos-1)*100+'%';
    for(d of dots) {
        d.classList.remove('dot_active');
    }
    dots[pos-1].classList.add('dot_active');
}

dots_d.addEventListener('click', function(event){
    if (event.target.closest('.dot')){
        offset(event.target.getAttribute('number'));
    }
 });
