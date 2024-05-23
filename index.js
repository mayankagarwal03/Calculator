let numbers=document.querySelectorAll('.nu');
let signs=document.querySelectorAll('.sig');
let eql=document.querySelector('.equal');
let clr=document.querySelector('.clear');
let disp=document.querySelector(".displayans");
let h=0;
let g=0;
let str=null;
const n=[1,2,3,4,5,6,7,8,9,0];
const s=['+','-','*','/'];
for(let nums of numbers){
    nums.addEventListener("click",()=>{
        let a=nums.textContent;
        disp.textContent=disp.textContent+a;
        for(let z of n){
            if(z==a){
                h=(h*10)+z;
            }
        }
    })
}
for(let sign of signs){
    sign.addEventListener("click",()=>{
        let a=sign.textContent;
        disp.textContent=disp.textContent+a;
        if(str==null){
            str=a;
            g=h;
            h=0;
        }else{
            if(str=='+'){
                g=g+h;
                h=0;
                str=a;
            }
            else if(str=='-'){
                g=g-h;
                h=0;
                str=a;
            }
            else if(str=='/'){
                g=g/h;
                h=0;
                str=a;
            }
            else if(str=='*'){
                g=g*h;
                h=0;
                str=a;
            }
        }
    })
}
eql.addEventListener("click",()=>{
    if(str=='+'){
        g=g+h;
        h=0;
        str=null;
    }
    else if(str=='-'){
        g=g-h;
        h=0;
        str=null;
    }
    else if(str=='/'){
        g=g/h;
        h=0;
        str=null;
    }
    else if(str=='*'){
        g=g*h;
        h=0;
        str=null;
    }
    disp.textContent=disp.textContent+" = "+g;
    for(let sign of signs){
        sign.disabled=true;
    }
    for(let nums of numbers){
        nums.disabled=true;
    }
})
clr.addEventListener("click",()=>{
    disp.textContent=null;
    g=0;
    h=0;
    str=null;
    for(let sign of signs){
        sign.disabled=false;
    }
    for(let nums of numbers){
        nums.disabled=false;
    }
})