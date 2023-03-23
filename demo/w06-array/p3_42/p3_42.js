const userInput = document.querySelector('#input-number');
const cBtn = document.querySelector('#btn-c');
const fBtn = document.querySelector('#btn-f');
const result = document.querySelector('#current-calculation');





cBtn.addEventListener('click',()=>{
    const f = (getUserInput()*9/5+32);
    console.log('123',f);
    OutputC(f);
});



fBtn.addEventListener('click',()=>{
    const f = (getUserInput()*5/9-32);
    OutputF(f);
});


function getUserInput(){
    return parseInt(userInput.value);
}

function OutputC(text)
{
    result.textContent = `${Number(userInput.value).toFixed(2)} C = ${text.toFixed(2)}F`;
}

function OutputF(text)
{
    result.textContent = `${Number(userInput.value).toFixed(2)} F = ${text.toFixed(2)}C`;
}
console.log('btn-c',cBtn);