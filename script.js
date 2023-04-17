let string = "";
let ans = 0;
let buttons = document.querySelectorAll('.Button');
let display = document.querySelector('.display');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(event)=>{

        let current_input = event.target.innerHTML ;
        
        if(current_input === "÷") string += "/";
        else if(current_input === "×") string += "*";
        
        else if(current_input === "AC")
        {   string = '';
            display.style.color = "white";           
        }

        else if(current_input === '⌫')
            string = string.slice(0,-1);

        else if(current_input === '=')
        {
            try {
                string = JSON.stringify(
                  Math.round(eval(string) * 100) / 100
                );
              } catch {
                string = "⚠️ERROR";
              }
        }        

        else
        string += event.target.innerHTML;

        if(string === "⚠️ERROR")
        {
            display.style.color = "red";
            display.style.textAlign = "center";
            display.style.fontSize = "3rem";
        }

        console.log(string)
        display.value = string;
    })
})
