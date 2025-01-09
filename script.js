let bt1=document.querySelector("#mybutton1");
let bt2=document.querySelector("#mybutton2");
let cd=document.querySelector(".copyCode");
let rgb1="rgb(92,145,229)";
let rgb2="rgb(152,63,198)";


let hexValues=()=>{
    let myHex="0123456789abcdef";
    let colors='#';
    for(let i=0;i<6;i++){
        colors=colors+(myHex[Math.floor(Math.random()*16)]);
    }
    return colors;
};
const handleButton1=()=>{
    rgb1=hexValues();
    console.log(rgb1);
    document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1} ,${rgb2})`;
    cd.innerHTML=`background-image:linear-gradient(to right, ${rgb1},${rgb2})`;
    bt1.innerText=`${rgb1}`;
};

const handleButton2=()=>{
    rgb2=hexValues();
    console.log(rgb2);

    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
    cd.innerHTML=`background-image:linear-gradient(to right,${rgb1},${rgb2})`;
    bt2.innerText=`${rgb2}`;
};

bt1.addEventListener('click',handleButton1);
bt2.addEventListener('click',handleButton2);

cd.addEventListener('click',()=>{
    navigator.clipboard.writeText(cd.innerText);
});