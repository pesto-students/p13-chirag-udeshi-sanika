//Generators

function* generatorFunc(arr){
    for(let a of arr){
        yield Symbol(a);
   }
}

const iterator = generatorFunc(["hello" , "world" , "javascript"]);

console.log(iterator.next().value); //Output : Symbol(hello)
console.log(iterator.next().value);  //Output : Symbol(world)
console.log(iterator.next()).value;  //Output : Symbol(world)
console.log(iterator.next()).value;  //Output : undefined