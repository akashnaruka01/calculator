let string = "";
let ans = 0;
let buttons = document.querySelectorAll('.Button');
let display = document.querySelector('.display');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(event)=>{
        
        if(event.target.innerHTML === "AC")
        {   string = '';
            display.style.color = "white";            
            // display.style.textAlign = "start";
        }

        else if(event.target.innerHTML === '⌫')
            string = string.slice(0,-1);

        else if(event.target.innerHTML === '=')
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
