function ManipulateString() {
    /**finds the div element in index.htm with the class name "InputContainer" */
    let inputContainer : HTMLDivElement = <HTMLDivElement> document.getElementsByClassName("InputContainer")[0];
    /**finds the ul elements in index.htm with the class name "Results" */
    let resultContainer : HTMLUListElement = <HTMLUListElement> document.getElementsByClassName("Results")[0].getElementsByTagName("ul")[0];
    /**creates a string in the inputContainer with the tagname "input" and returns the value of the current index */
    let string : string = inputContainer.getElementsByTagName("input")[0].value;
    /**creates a string in the inputContainer with the tagname "select" and returns the value of the current index */
    let option : string = inputContainer.getElementsByTagName("select")[0].value;

    /**switch to set the output to either uppercase or lowercase */
    switch (option) {
        case "UpperCase":
            string = string.toUpperCase();    
            break;
        case "LowerCase":
            string = string.toLowerCase();
            break;
    }
    /**takes the corresponding case or "option" of "string" and add its to the resultContainer */
    resultContainer.appendChild(CreateResultNode(string));
}

/**assigning an initial value to nextResultId */
let nextResultId : number = 0;
/**Function used to create result node */
function CreateResultNode(result : string) {
    /**Creates an instance of "li" */
    let newLi = document.createElement("li");
    /**Creates an instance of "div" */
    let divId = document.createElement("div");
    /**converts the text in divId to a string */
    divId.innerText = nextResultId.toString();
    /**creates an instance of divId */
    newLi.appendChild(divId);
    /**creates an instance of "div" */
    let resultDiv = document.createElement("div");
    /**takes the resultDiv string and assigns it to "result" */
    resultDiv.innerText = result;
    /**creates a new copy of the "li" and adds the new result to the list */
    newLi.appendChild(resultDiv);
    
    newLi.id = nextResultId.toString();
    /**% 2 == 0 will loop through and check if the nextResultId is even and then change color */
    if (nextResultId % 2 == 0)
        newLi.setAttribute("style", "background: #e52165; color: #0d1137;");
    /**adds 1 to the current id and then returns it afterwards*/
    nextResultId++;
    return newLi;
}
/**Inserts the Input into the DOM */
document.getElementsByClassName("InputContainer")[0].getElementsByTagName("input")[1].addEventListener("click", ManipulateString);