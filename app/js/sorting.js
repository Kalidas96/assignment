
 const  randomNumbers = [4, 2, 5, 1, 3, 8, 7, 6, 9];
document.getElementById("randomNumbers").innerHTML = randomNumbers;
/* shuffle fuction array */
function shuffleFunction() {
   /* Randomize array in-place using Durstenfeld shuffle algorithm */
          let arryLength=9;
	  const numbers = [4, 2, 5, 1, 3, 8, 7, 6, 9];
   		 for (let i = arryLength; i > 0; i--) {
       		   var j = Math.floor(Math.random() * (i + 1));
       		   var temp = numbers[i];
      		   numbers[i] = numbers[j];
      		   numbers[j] = temp;
    		}
	console.log(numbers);
     document.getElementById("shuffleAnswer").innerHTML = numbers; 
   }


/* normal fuction array sort */
function bubbleSort() {
 const numbers = [4, 2, 5, 1, 3, 8, 7, 6, 9];
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < numbers.length; i += 1) {
      if (numbers[i - 1] > numbers[i]) {
        done = false;
        var tmp = numbers[i - 1];
        numbers[i - 1] = numbers[i];
        numbers[i] = tmp;
      }
    }
  }

 console.log(numbers);
 document.getElementById("answer").innerHTML = numbers; 
}


/* inbuild fuction array sort */
function sortFunction() {
/* inbuild fuction array sort */
   const numbers = [4, 2, 5, 1, 3, 8, 7, 6, 9];
   numbers.sort(function(a, b) {
      return a - b;
   });
	console.log(numbers);
     document.getElementById("answer").innerHTML = numbers; 
   }
