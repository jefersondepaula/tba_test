new WOW().init();

const select = (el) => document.querySelector(el);
const selectAll = (el) => document.querySelectorAll(el);

select('.menu-mobile').addEventListener('click',(i)=>{
    select('.menu').style.width = '100%';
    select('.menu ul').style.display = 'flex';
    select('.close-mobile').style.display = 'block';
    select('.menu-mobile').style.display = 'none';

    setTimeout(function(){
        select('.menu ul').style.opacity = 1;                              
    },800)            
})

select('.close-mobile').addEventListener('click',()=>{
    select('.menu').style.width = '0';
    select('.menu ul').style.opacity = 0; 
    select('.menu ul').style.display = 'none'; 
    select('.close-mobile').style.display = 'none';            
    select('.menu-mobile').style.display = 'block';
})

selectAll('section>div').forEach((e)=>{
    //wow fadeInUp" data-wow-offset="90"
    e.classList.add('wow','fadeInUp');
    e.setAttribute('data-wow-offset','100');
    e.setAttribute('data-wow-duration','2s');
});
