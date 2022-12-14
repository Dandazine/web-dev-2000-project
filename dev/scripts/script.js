// Write your JavaScript here...
'use strict';

const headerSlide = {
    intervalDuration: 4000,
    int:null,
    num: 0,
    currentClassNum: ["img-1", "img-2", "img-3"],
    div: document.getElementById('white'),
    hero: document.getElementById('hero'),

    setup: ()=>{
        document.getElementById('button1').addEventListener('click', ()=>{
            clearInterval(headerSlide.int);
            headerSlide.num=0;
            headerSlide.changePic();
            headerSlide.setInt();
        });
        document.getElementById('button2').addEventListener('click', ()=>{
            clearInterval(headerSlide.int);
            headerSlide.num=1;
            headerSlide.changePic();
            headerSlide.setInt();
        });
        document.getElementById('button3').addEventListener('click', ()=>{
            clearInterval(headerSlide.int);
            headerSlide.num=2;
            headerSlide.changePic();
            headerSlide.setInt();
        });
    },

    setInt: ()=>{
        headerSlide.int=setInterval(() => {
            headerSlide.num++;
            headerSlide.numReset();
            headerSlide.changePic();
        }, headerSlide.intervalDuration);
    },

    numReset:()=>{
        if(headerSlide.num===3){
            headerSlide.num=0;
        }
    },

    changePic:()=>{
        headerSlide.div.style.backgroundColor= "rgba(255, 255, 255, .2)"
        setTimeout(() => {
            headerSlide.div.style.backgroundColor= "rgba(255, 255, 255, 0)"
            headerSlide.hero.classList.remove("img-1", "img-2", "img-3");
            headerSlide.hero.classList.add(headerSlide.currentClassNum[headerSlide.num])
        }, 200);
    }

}



headerSlide.setInt();
headerSlide.setup();

