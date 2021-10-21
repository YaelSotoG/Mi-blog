// window.onload =function(){
//     let intro= document.getElementById("vista");
// }

document.querySelector('#menu').addEventListener("click",()=>{
    document.querySelector(".cont").classList.toggle("show");
    // document.getElementById("lista").classList.toggle("show_2");
    // lista.className="show_2";
    // cambiar.className="show";

    // console.log(cambiar.innerHTML);
});
// document.querySelector('#hab').addEventListener("click", ()=>{
//         document.querySelector('html,body').animate({ scrollTop: ("#habil")},100);
// });
// $("#hab").click(function() {
//     $('html, body').animate({
//     scrollTop: $("#habil").offset().top
//     }, 2000);
//    });


gsap.from('.texto',{
    duration:3,
    // backgroundColor:'grey',
    opacity:0,
    stagger:1,
});
gsap.from('.imagen',{
    duration:2,
    ease:"power4.out",
    y:-400,


});