//Symbols

function generateTransactionId() {
  let counter = 0;
  let idString = "TRANSACTION_ID_";

  function idCreator() {
    counter++;
    return Symbol(idString.concat(counter));
  }

  return idCreator;
}

const newTransaction = generateTransactionId();
console.log(newTransaction()); // Symbol(TRANSACTION_ID_1)

console.log(newTransaction()); // Symbol(TRANSACTION_ID_2)

console.log(newTransaction()); // Symbol(TRANSACTION_ID_3)
