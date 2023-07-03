const total=document.getElementById('total');
const going=document.getElementById('on-going');
const success=document.getElementById('success');

// const menu=document.querySelectorAll('.slide-area__front__menu li:not(#menu-icon)');
const menu=document.querySelectorAll('.slide-area__front__menu li');
const menu_lcon=document.getElementById('menu-icon')
const menu_back=document.querySelector('.slide-area__front__menu');

const paragraphs=document.getElementsByClassName('myslide');
const paragraphs_ch=document.getElementsByClassName('myslide__ch');



set_total();
set_going();
set_success();



let numberOfslide=0;
inactivef(0);
// paragraphs[0].style.display='block';
// console.log(menu[2].style.display.content);
// console.dir(menu);
menu_lcon.addEventListener('click',()=>{
    if(menu[2].style.display!='block'){
        menu_back.style.animation= "menu-show-back 1s forwards";
        for(let i=0;i<7;i++){   //show list animation
            menu[i].style.display='block';
            menu[i].style.animation= "menu-show-li 0.5s forwards";
        } 
    }
    else if(menu[1].style.display=='block'){
        // for(let i=1;i<7;i++){   //move to left animation
        //     setTimeout(()=>{
        //         menu[i].style.animation= "menu-hide-li 0.5s forwards";
        //     },i*200)
        // } 
        menu_lcon.style.animation='menu-hide-li 1s '
        setTimeout(()=>{    //hide list
            for(let i=1;i<7;i++){
                menu[i].style.display='none';
            }
        },400)
        menu_back.style.animation= "menu-hide-back 1s forwards";
    }
});


