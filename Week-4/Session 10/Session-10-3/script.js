//Javascript Loops

function drawTriangle(triangleSize) {
let line;
    for (let i = 1 ; i <= triangleSize ; i++){
        line = "";
        for( let j = 0 ; j < i ; j++){
            line = line + "*";
        }
        console.log(line);
    }
    
 }
 drawTriangle(5);