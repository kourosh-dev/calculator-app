export function calculation() {
  // set DOM variable
  const operationKeys = document.querySelectorAll('.js-operation-key');
  const screen = document.getElementById('js-display');
  const equalKey = document.getElementById('js-equal-key');
  const resetKey = document.getElementById('js-reset-key');
  const deleteKey = document.getElementById('js-delet-key');

  /* // add to screen
    * seperate intered value from screen value//
    * prevent adding more than one operator
    * prevent adding operation if not exist any number//
    * if operator exist remove last operator and add current//
    * if value is equal to x convert it to * //
    * if accure text over flow decrease size of text
  */

  // check if current intered value is operator if it is return it
  function isOperator(value) {
    return ['-', '+', '/', 'x', '.'].includes(value.toLowerCase());
  }

  // convert X operation to *
  function isX(operator) {
    if (operator.toLowerCase() === 'x') {
      return '*';
    } else {
      return operator;
    }
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
    // get last charecter of screen value
    const lastChar = screen.value.slice(-1);

    // perevent add second operator
    if (!(value === '.' && isNaN(value))) {
      const parts = screen.value.split('');
      for (const part of parts) {
        if (isOperator(part) && !isOperator(lastChar)) {
          return;
        }
      }
    }

    // check if it is first value
    if (screen.value === '0') {
      // if value is not operator save it
      if (!isOperator(value)) {
        experation = value;
        screen.value = value;
      }

    } else {
      // if current and last value is operator replace it
      if (isOperator(value) && isOperator(lastChar)) {
        screen.value = screen.value.slice(0, -1) + value;
        experation = experation.slice(0, -1) + isX(value);

      } else {
        // add entered value to screen and experation value
        screen.value += value;
        experation += isX(value);
      }
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