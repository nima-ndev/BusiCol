// ________________________number of projects
let total_number=10000/520;
let going_number=10000/244;
let success_number=10000/95;


function set_total(){
    if(total.textContent<520){
        total.textContent++;
        setTimeout(set_total,total_number);
    }
    else return;
}
function set_going(){
    if(going.textContent<244){
        going.textContent++;
        setTimeout(set_going,going_number);
    }
    else return;
}
function set_success(){
    if(success.textContent<95){
        success.textContent++;
        setTimeout(set_success,success_number);
    }
    else return;
}
// ______________________________________cases
function set_current_slide(current){
    if(current==numberOfslide){
        return;
    }
    const before=numberOfslide;
    numberOfslide=current; //set the correct numberOfslide
    if(current>2){
        numberOfslide=0;
    }
    else if(current<0){
        numberOfslide=2;
    }
    for(let j=0;j<3;j++){  
        paragraphs_ch[j].classList.remove("exit");
    }
    paragraphs_ch[before].classList.add('exit');
    setTimeout(change,300) 
}
function inactivef(i){
    for(let j=1;j<4;j++){   
        document.querySelector(`.inactive-${j}`).style.display='inline';
        document.querySelector(`.case-icon-${j}`).style.transform= 'scale(0.6)';
    }
    document.querySelector(`.inactive-${i+1}`).style.display='none';
    document.querySelector(`.case-icon-${i+1}`).style.transform= 'scale(1)';
}
function change(){
    for(let i=0;i<3;i++){   
        paragraphs[i].style.display='none';
    }
    inactivef(numberOfslide);
    paragraphs_ch[numberOfslide].classList.add('enter');
    paragraphs[numberOfslide].style.display='block';
}

