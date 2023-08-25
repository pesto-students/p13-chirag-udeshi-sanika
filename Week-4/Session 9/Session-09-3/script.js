const isStrongPassword = (password) => {
  debugger;
  if (password.length > 7) {
    if (!password.toLowerCase().includes("password")) {
      let i;
      for (i = 0; i < password.length; i++) {
        let char = password.charAt(i);
        //check if the character is a letter
        if (/^[a-z]$/i.test(char)) {
          //if its a letter, check if it is uppercase
          if (char === char.toUpperCase()) {
            break;
          }
        }
      }
      if (i == password.length) return false;
      else return true;
    }
  }

  return false;
};
