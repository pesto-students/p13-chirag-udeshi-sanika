//Javascript Maps
function calcWordFrequencies() {
   let input = prompt("Enter list of words separated by space");
   let wordsArray = input.split(" ");
   const wordsMap = new Map();

   if(input !== null && input !== ""){
    wordsArray.forEach(word => {
        if(wordsMap.has(word)){
            let freq = wordsMap.get(word);
            wordsMap.set(word, freq + 1);
            
        }
        else{
            wordsMap.set(word, 1);
        }
        
    });
    wordsMap.forEach(
        (freq, word) => {
            console.log(word + " " + freq);
        }
    )
   }
   else 
   console.log("Invalid input");
    
}
calcWordFrequencies();