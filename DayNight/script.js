const outer =document.querySelector("#outer");
const btn =document.querySelector("#inner");
// const heading =document.querySelector("#heading");
const txt = document.querySelector("h1");
const icon =document.querySelector("img");
const back= document.querySelector("body");
let a = true;
btn.addEventListener('click',() =>{
  if(a)
    {
      btn.style.justifyContent="end";
    icon.setAttribute("src","full-moon.png");
    btn.style.backgroundImage = 'linear-gradient(rgb(77, 73, 146), rgb(122,122,197),rgb(180, 178, 236))';

    txt.innerText="GOOD  NIGHT";
    back.style.backgroundImage="url('night.jpg')";
    a=false;
   }
   else
   {
        btn.style.justifyContent="start";
    icon.setAttribute("src","sun.png");
    btn.style.backgroundImage = 'linear-gradient(rgb(230, 230, 127),rgb(250, 195, 45),orange)';

    txt.innerText="GOOD MORNING";  
    back.style.backgroundImage="url('day-sky.png')";
    a=true;
   }
})
