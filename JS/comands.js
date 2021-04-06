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

gsap.from('#text',{
    duration:5,
    // backgroundColor:'grey',
    opacity:0
});
gsap.from('.imagen',{
    duration:4,
    ease:"power4.out",
    y:-500,


});