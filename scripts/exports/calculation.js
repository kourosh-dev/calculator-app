export function calculation() {
  // set DOM variable
  const operationKeys = document.querySelectorAll('.js-operation-key');
  const screen = document.getElementById('js-display');
  const equalKey = document.getElementById('js-equal-key');
  const resetKey = document.getElementById('js-reset-key');
  const deleteKey = document.getElementById('js-delet-key');

  /* // add to screen
    * seperate intered value from screen value//
    * prevent adding more than one operator//
    * prevent adding operation if not exist any number//
    * if operator exist remove last operator and add current//
    * if value is equal to x convert it to * //
    * if accure text over flow decrease size of text//
    * prevent adding floting point more than one in every operation //
  */

  // check if current intered value is operator if it is return it
  function isOperator(value) {
    return ['-', '+', '/', 'x', '.'].includes(value.toLowerCase());
  }

  // add event handler for each operation button 
  operationKeys.forEach(elm => {
    elm.addEventListener('click', () => {
      // saving value
      addValue(elm.innerText);
    });
  });

  // save experation value
  let experation = '';

  // add value to screen and experation element
  function addValue(value) {
    const valueScrn = screen.value;
    const lastChar = valueScrn.slice(-1);

    // perevent add second operator
    if (!isOperator(lastChar) 
      && isOperator(value) 
      && value !== '.') {
      const operators = ['+', '-', '/', 'X'];

      for (const operator of operators) {
        if (valueScrn.includes(operator)) {
          return;
        }
      }
    }

    // prevent adding two floting point
    const splited = valueScrn.split(/([+\-X/])/);
    if (value === '.') {
      if (splited[splited.length-1].includes('.') || isOperator(lastChar)) {
        return;
      }
    }

    if (lastChar === '.' && isOperator(value)) {
      return;
    }

    // check if it is first value
    if (screen.value === '0') {
      // if value is not operator save it
      if (!isOperator(value)) {
        screen.value = value;
      }

    } else {
      // if current and last value is operator replace it
      if (isOperator(value) && isOperator(lastChar)) {
        screen.value = screen.value.slice(0, -1) + value;
      } else {
        // add entered value to screen and experation value
        screen.value += value;
      }
    }

    if (valueScrn.length > 14) {
      screen.style.fontSize = '1.7rem';
    }
  }

  /* // formating
    * split value by operator and save it in an array
    * if value of array is an operator don't format it
    * if value of array is number format it 
  */

  /* // delete
    * delet last charecter from screen
    * delet last charecter from saved value
  */

  /* // reset
    * reset value of screen
    * reset value of variable
  */

  /* // calculation
    * convert value to actual code and save the result in variable
    * format result
    * display it on screen
  */
}
