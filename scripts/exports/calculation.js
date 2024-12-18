export function calculation() {
  // set DOM variable
  const operationKeys = document.querySelectorAll('.js-operation-key');
  const screen = document.getElementById('js-display');
  const equalKey = document.getElementById('js-equal-key');
  const resetKey = document.getElementById('js-reset-key');
  const deleteKey = document.getElementById('js-delete-key');

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
  let experation = '0';

  // add value to screen and experation element
  function addValue(value) {
    const lastChar = experation.slice(-1);

    // perevent add second operator
    if (!isOperator(lastChar) 
      && isOperator(value) 
      && value !== '.') {
      const operators = ['+', '-', '/', 'X'];

      for (const operator of operators) {
        if (experation.includes(operator)) {
          return;
        }
      }
    }

    // prevent adding two floting point
    const splited = experation.split(/([+\-X/])/);
    if (value === '.') {
      if (splited[splited.length-1].includes('.') || isOperator(lastChar)) {
        return;
      }
    }

    if (lastChar === '.' && isOperator(value)) {
      return;
    }

    // check if it is first value
    if (experation === '0') {
      // if value is not operator save it
      if (!isOperator(value)) {
        experation = value;
      }

    } else {
      // if current and last value is operator replace it
      if (isOperator(value) && isOperator(lastChar)) {
        experation = experation.slice(0, -1) + value;
      } else {
        // add entered value to screen and experation value
        experation += value;
      }
    }

    if (experation.length > 14) {
      screen.style.fontSize = '1.7rem';
    }

    screen.value = formating(experation);

    if (value === '.') {
      screen.value += '.';
    }
  }

  function formating(experation) {
    const parts = experation.split(/([+\-X/])/);

    return parts.map(part => {
      if (!isNaN(part) && part !== '') {
        const number = Number(part.replace(/,/g, ''));
        return number.toLocaleString();
      }

      return part;
    }).join('');
  }

  // removing last character when delete button clicked
  deleteKey.addEventListener('click', () => {
    if (experation.length === 1) {
      experation = '0';
    } else {
      experation = experation.slice(0, -1);
    }

    screen.value = formating(experation);
  });

  // reseting value 
  resetKey.addEventListener('click', () => {
    experation = '0';
    screen.value = experation;
  });

  // calculate the experation and render it
  equalKey.addEventListener('click', () => {
    const result = eval(experation.replace('X', '*'));
    experation = result.toString();
    screen.value = Number(result).toLocaleString();
  });
}
