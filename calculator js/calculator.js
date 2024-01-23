let string " ";
let buttons = document.querySelectorAll('.row');
Array.from(buttons).forEach((row)=>{
    row.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eveal(string);
            document.querySelector('input').value = string;

        }
        else{
            console.log(e.target)
            string = string+e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
 