let numbers = Array.from(document.querySelectorAll(".number"))

let result = document.getElementById("resutLabel")

let equal = document.getElementById("equal")



numbers.map(number =>{
    number.addEventListener("click",function(e){

        console.log(e.target.value)
        switch(e.target.value){
            case 'Del':
                result.textContent = result.textContent.slice(0,-1)
                break;
            case '=':
                try{
                    result.textContent = eval(result.textContent);
                    break
                }
                catch{
                    result.textContent = 'Error!'
                    break
                }
                
            case 'REST':
                result.textContent = "" ;
                break;   
            default:
                result.textContent += e.target.value;
                break;

        }
    })
})
let x = "5/3"
let y = eval(x)
console.log(y)
// for(let i = 0 ; i <15;i++){
//     let resultSave = 0 ;
// if(i!=6 && i !=10 && i!=13 && i !=14){
//         numbers[i].addEventListener("click",function(){
            
//             result.textContent = parseInt(result.textContent);
            
//             result.textContent += parseInt(numbers[i].value)
   
//             })
// }else if (i == 6){
//      resultSave +=parseInt(result.textContent)
//      console.log(resultSave)
// }
// }





