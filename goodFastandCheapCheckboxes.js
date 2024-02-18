let checkBoxes =  Array.from(document.querySelectorAll(".checkbox"));
let balls =  Array.from(document.querySelectorAll(".ball"));
let headings = Array.from(document.querySelectorAll("h4"))
let check = 0;
let checkings = [false]

console.log(checkBoxes);
console.log(balls);
console.log(headings);




for(let i=0;i<checkBoxes.length;i++)
    checkBoxes[i].addEventListener("click",()=>checker(i));

//defining the function
let checker = (i)=>
{
    if(i==0)
    {
        if(checkBoxes[1].classList.contains("ColorActivation")&&checkBoxes[2].classList.contains("ColorActivation"))
        {
            let number = 1 + Math.floor( Math.random() * 2);
            checkBoxes[number].classList.remove("ColorActivation")
            balls[number].classList.remove("active")
        }
    }
    else if(i==1)
    {
        if(checkBoxes[0].classList.contains("ColorActivation")&&checkBoxes[2].classList.contains("ColorActivation"))
        {

            let number = [0,2] 
            let random = number[Math.floor( Math.random() * 2)]
            checkBoxes[random].classList.remove("ColorActivation")
            balls[random].classList.remove("active")
        }
    }
    else if(i==2)
    {
        if(checkBoxes[1].classList.contains("ColorActivation")&&checkBoxes[0].classList.contains("ColorActivation"))
        {
            let number = Math.floor( Math.random() * 2);
            checkBoxes[number].classList.remove("ColorActivation")
            balls[number].classList.remove("active")
        }
    }
    balls[i].classList.toggle("active")
    checkBoxes[i].classList.toggle("ColorActivation")
}