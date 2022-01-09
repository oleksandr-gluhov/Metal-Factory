const btn_prev = document.querySelector(".prev")
const btn_next = document.querySelector(".next")
const slider_line = document.querySelector(".slider_line");
const slider_element = document.querySelector(".slider_element");
const many_element = document.getElementsByClassName("slider_element").length;
const w_slider = slider_line.clientWidth;
const w_element =slider_element.clientWidth + 12.5;
const w_all_slider = w_element * many_element ;
const out_element = w_all_slider -  w_slider ;
console.log(w_all_slider)
let scrol = 0;
chekc_prew()
console.log(w_element)
function prev(){
    stop_prew()
    slider_line.style.left = scrol + "px";
    chekc_next()
    chekc_prew()
    console.log(w_element)
}
function next(){
    stop_next()
    slider_line.style.left = scrol + "px";
    chekc_next()
    chekc_prew()
    console.log(scrol)
}
function chekc_next(){
    if (scrol <= -out_element ) {
        btn_next.style.filter = "grayscale(100%)"
    }
    else {
        btn_next.style.filter = "grayscale(0%)"
    }
}
function stop_next(){
    if (scrol <= -997.5 ) {
       scrol -= 0
    }
    else {
       scrol -= w_element
    }
}
function chekc_prew(){
    if (scrol >= 0 ) {
        btn_prev.style.filter = "grayscale(100%)"
    }
    else {
        btn_prev.style.filter = "grayscale(0%)"
    }
}
function stop_prew(){
    if (scrol >= 0 ) {
       scrol += 0
    }
    else {  
        scrol +=  w_element
    }
}
