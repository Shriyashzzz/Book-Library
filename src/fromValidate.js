import { doc } from "prettier";



export function vlaidationBook(){
  
    const authorName = document.getElementById("book-author")
    const bookName = document.getElementById("book-name")
    let validateNoNumArr = [authorName]
    checkMinEmpty(authorName, bookName);

    function checkMinEmpty(...elements){
        elements.forEach(element =>{element.addEventListener("input", (event)=>{
                const helpElement = document.querySelector(`#${element.id} + .showError`)
                    if( element.validity.valueMissing){
                            userHelp(helpElement,`${element.name}  cannot be empty!`)
                            element.setCustomValidity(`${element.name}  cannot be empty!`)
                        }    
                    else if(element.validity.tooShort){
                        userHelp(helpElement,`${element.name}  needs to be more than  2 characters long!`);
                        element.setCustomValidity(`${element.name}  needs to be more than  2 characters long!`)

                    }
                    else if(validateNoNumArr.includes(element)){
                            validateNoNumbers(element)
                        }else{
                            userHelp(helpElement,"That works")
                            element.setCustomValidity(``)


                        }
                        
                    
                })
            })
    }

    
}




function validateNoNumbers(...elements){
    const checkRegex = /^[a-zA-Z\s]+$/i;
    elements.forEach(element=>{
            element.addEventListener("input", (event)=>{
            const helpElement = document.querySelector(`#${element.id} + .showError`)
            console.log(checkRegex.test(element.value))
            if(!checkRegex.test(element.value)){
                userHelp(helpElement,`${element.name}  cannot have numbers!`)
                element.setCustomValidity(`${element.name}  cannot have numbers!`)

            }else{
                userHelp(helpElement,"That works")

                element.setCustomValidity(``)


            }
        })
    })
}


function userHelp(helpElement, errorMessage) {
   helpElement.textContent = errorMessage
}