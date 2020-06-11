// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input");


const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

const cellElements = document.querySelectorAll(".cell")

let rowElementsArray = [rowElements [cellElements]];
// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements (currentRowElement)
{
    return currentRowElement.querySelectorAll(".cell")
}

replaceAllButton.addEventListener("click", function()
{
    //Find the Input using .find-input...
  //Try to get the findInput, that's probably what's not working here...
    //Hook up the array. 
    //Find where in the array is the Element I need. 
  
   let findText = findInput.value;

   let replaceText = replaceInput.value;

    let numberInCell;

   console.log(findText);
   if(rowElements != null)
   {
    //Toggle through the rowElements
    for(childrenInRowElements = 0, childrenInRowElements < rowElements.length; childrenInRowElements++;)
        { 
      //Create array that gets children elements using getCellElements 
          let arrayOfCells = getCellElements(rowElements[childrenInRowElements]);
            //toggle through the cell elements
            for(cell = 0, cell < arrayOfCells.length; cell++;)
            {
                //Find if the element
                if(arrayOfCells[cell].innerHTML.includes(findText))
                {
                    //Initialize variable to assign to array place and using .replace for findText to ReplaceText
                    let replaceItem = arrayOfCells[cell].innerHTML.replace(findText, replaceText);
                    //Assign arrayOfCell position .innerHTML to replace Item.
                    arrayOfCells[cell].innerHTML =  Text(replaceItem);
                    arrayOfCells[cell].innerHTML += replaceItem.innerHTML; 
                }
            }
        }
   }
    //replace the input using .replace-input...
    //return replaced input in the location of the found input..

    //Assign elementINeed to currentRowElement
})
// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
