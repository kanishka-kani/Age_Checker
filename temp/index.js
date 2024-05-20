const myinput = document.getElementById("myinput");
const mysubmit = document.getElementById("mysubmit");
const resultElement = document.getElementById("resultElement");
let age;

mysubmit.onclick = function(){
    age = myinput.value;
    age = Number(age);

    if(age >= 100)
    {
        resultElement.textContent = `Your too old to Enter into the website `;
    }
    else if(age>=18)
    {
        resultElement.textContent = `You can enter the website`;
    }
    else if(age<18)
    {
        resultElement.textContent = `You cannot open this website`;
    }
    else
    {
        resultElement.textContent = `Enter your age`;
    }
}
