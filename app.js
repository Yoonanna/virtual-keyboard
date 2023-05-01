let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

let caption = document.createElement('p');
caption.className = 'caption';
caption.innerText = 'RSS Virtual Keyboard';
wrapper.append(caption);

let textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.autofocus = true;
wrapper.append(textarea);
textarea.setAttribute('rows', 15);


let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
wrapper.append(keyboard);

let row1 = document.createElement('div');
row1.className = 'keyboard__row1';
row1.classList.add('row');
keyboard.append(row1);
let row2 = document.createElement('div');
row2.className = 'keyboard__row2';
row2.classList.add('row');
keyboard.append(row2);
let row3 = document.createElement('div');
row3.className = 'keyboard__row3';
row3.classList.add('row');
keyboard.append(row3);
let row4 = document.createElement('div');
row4.className = 'keyboard__row4';
row4.classList.add('row');
keyboard.append(row4);
let row5 = document.createElement('div');
row5.className = 'keyboard__row5';
row5.classList.add('row');
keyboard.append(row5);

let info = document.createElement('p');
info.className = 'info';
wrapper.append(info);
info.innerText = 'Клавиатура создана в ОС Windows';

(function () {


  const allKeys1 = [
    { keyCode: 'Backquote', keyName: '`' },
    { keyCode: 'Digit1', keyName: '1' },
    { keyCode: 'Digit2', keyName: '2' },
    { keyCode: 'Digit3', keyName: '3' },
    { keyCode: 'Digit4', keyName: '4' },
    { keyCode: 'Digit5', keyName: '5' },
    { keyCode: 'Digit6', keyName: '6' },
    { keyCode: 'Digit7', keyName: '7' },
    { keyCode: 'Digit8', keyName: '8' },
    { keyCode: 'Digit9', keyName: '9' },
    { keyCode: 'Digit0', keyName: '0' },
    { keyCode: 'Minus', keyName: '-' },
    { keyCode: 'Equal', keyName: '=' },
    { keyCode: 'Backspace', keyName: 'Backspace' },
  ];
  allKeys1.forEach(el => {

    let key = document.createElement('div');
    key.className = 'keyboard__key';
    key.classList.add(`${el.keyCode}`);
    row1.append(key);
    key.innerText = el.keyName;

    document.addEventListener('keydown', function keyDown(event) {
      if (event.code === el.keyCode) {
        key.classList.add('active');
        textarea.value += `${el.keyName}`;

      }
    });
    document.addEventListener('keyup', function keyUp(event) {
      if (event.code === el.keyCode) {
        key.classList.remove('active');
      }
    });

    key.addEventListener('mousedown', () => {
      key.classList.add('active');
      textarea.value += `${el.keyName}`;

    }
    );
    key.addEventListener('mouseup', () => {
      key.classList.remove('active');
    }
    );

  }
  );


  const allKeys2 = [
    { keyCode: 'Tab', keyName: 'Tab' },
    { keyCode: 'KeyQ', keyName: 'q' },
    { keyCode: 'KeyW', keyName: 'w' },
    { keyCode: 'KeyE', keyName: 'e' },
    { keyCode: 'KeyR', keyName: 'r' },
    { keyCode: 'KeyT', keyName: 't' },
    { keyCode: 'KeyY', keyName: 'y' },
    { keyCode: 'KeyU', keyName: 'u' },
    { keyCode: 'KeyI', keyName: 'i' },
    { keyCode: 'KeyO', keyName: 'o' },
    { keyCode: 'KeyP', keyName: 'p' },
    { keyCode: 'BracketLeft', keyName: '[' },
    { keyCode: 'BracketRight', keyName: ']' },
    { keyCode: 'Backslash', keyName: '\\' },
    { keyCode: 'Delete', keyName: 'Del' },
  ];
  allKeys2.forEach(el => {

    let key = document.createElement('div');
    key.className = 'keyboard__key';
    key.classList.add(`${el.keyCode}`);
    row2.append(key);
    key.innerText = el.keyName;

    document.addEventListener('keydown', function keyDown(event) {
      if (event.code === 'Tab') {
        textarea.value += ' ';

      } else
        if (event.code === el.keyCode) {
          key.classList.add('active');
          textarea.value += `${el.keyName}`;

        }
    });

    document.addEventListener('keyup', function keyUp(event) {
      if (event.code === el.keyCode) {
        key.classList.remove('active');
      }
    });
    key.addEventListener('mousedown', () => {
      if (el.keyCode === 'Tab') {
        textarea.value += ' ';

        key.classList.add('active');

      } else {
        key.classList.add('active');
        textarea.value += `${el.keyName}`;
      }
    }
    );


    key.addEventListener('mouseup', () => {
      key.classList.remove('active');
    }
    );


  }
  );


  const allKeys3 = [
    { keyCode: 'CapsLock', keyName: 'Caps' },
    { keyCode: 'KeyA', keyName: 'a' },
    { keyCode: 'KeyS', keyName: 's' },
    { keyCode: 'KeyD', keyName: 'd' },
    { keyCode: 'KeyF', keyName: 'f' },
    { keyCode: 'KeyG', keyName: 'g' },
    { keyCode: 'KeyH', keyName: 'h' },
    { keyCode: 'KeyJ', keyName: 'j' },
    { keyCode: 'KeyK', keyName: 'k' },
    { keyCode: 'KeyL', keyName: 'l' },
    { keyCode: 'Semicolon', keyName: ';' },
    { keyCode: 'Quote', keyName: "'" },
    { keyCode: 'Enter', keyName: 'Enter' },
  ];
  allKeys3.forEach(el => {

    let key = document.createElement('div');
    key.className = 'keyboard__key';
    key.classList.add(`${el.keyCode}`);
    row3.append(key);
    key.innerText = el.keyName;

    document.addEventListener('keydown', function keyDown(event) {
      if (event.code === el.keyCode) {
        key.classList.add('active');
        textarea.value += `${el.keyName}`;

      }
    });
    document.addEventListener('keyup', function keyUp(event) {
      if (event.code === el.keyCode) {
        key.classList.remove('active');
      }
    });

    key.addEventListener('mousedown', () => {
      key.classList.add('active');
      textarea.value += `${el.keyName}`;

    }
    );
    key.addEventListener('mouseup', () => {
      key.classList.remove('active');
    }
    );
  }
  );

  const allKeys4 = [
    { keyCode: 'ShiftLeft', keyName: 'Shift' },
    { keyCode: 'KeyZ', keyName: 'z' },
    { keyCode: 'KeyX', keyName: 'x' },
    { keyCode: 'KeyC', keyName: 'c' },
    { keyCode: 'KeyV', keyName: 'v' },
    { keyCode: 'KeyB', keyName: 'b' },
    { keyCode: 'KeyN', keyName: 'n' },
    { keyCode: 'KeyM', keyName: 'm' },
    { keyCode: 'Comma', keyName: ',' },
    { keyCode: 'Period', keyName: '.' },
    { keyCode: 'Slash', keyName: '/' },
    { keyCode: 'ArrowUp', keyName: '⮝' },
    { keyCode: 'ShiftRight', keyName: 'Shift' },
  ];
  allKeys4.forEach(el => {

    let key = document.createElement('div');
    key.className = 'keyboard__key';
    key.classList.add(`${el.keyCode}`);
    row4.append(key);
    key.innerText = el.keyName;
    document.addEventListener('keydown', function keyDown(event) {
      if (event.code === el.keyCode) {
        key.classList.add('active');
        textarea.value += `${el.keyName}`;

      }
    });
    document.addEventListener('keyup', function keyUp(event) {
      if (event.code === el.keyCode) {
        key.classList.remove('active');
      }
    });

    key.addEventListener('mousedown', () => {
      key.classList.add('active');
      textarea.value += `${el.keyName}`;

    }
    );
    key.addEventListener('mouseup', () => {
      key.classList.remove('active');
    }
    );
  }
  );

  const allKeys5 = [
    { keyCode: 'ControlLeft', keyName: 'Ctrl' },
    { keyCode: 'MetaLeft', keyName: 'Win' },
    { keyCode: 'AltLeft', keyName: 'Alt' },
    { keyCode: 'Space', keyName: 'Space' },
    { keyCode: 'AltRight', keyName: 'Alt' },
    { keyCode: 'ArrowLeft', keyName: '⮜' },
    { keyCode: 'ArrowDown', keyName: '⮟' },
    { keyCode: 'ArrowRight', keyName: '➤' },
    { keyCode: 'ControlRight', keyName: 'Ctrl' },
  ];
  document.addEventListener('keydown', function space(event) {
    if (event.code === 'Space') {
      textarea.value += " ";
    }
  });

  allKeys5.forEach(el => {

    let key = document.createElement('div');
    key.className = 'keyboard__key';
    key.classList.add(`${el.keyCode}`);
    row5.append(key);
    key.innerText = el.keyName;
    document.addEventListener('keydown', function keyDown(event) {
      if (event.code === 'Space') {
        textarea.value += '';

      } else
        if (event.code === el.keyCode) {
          key.classList.add('active');
          textarea.value += `${el.keyName}`;

        }
    });
    document.addEventListener('keyup', function keyUp(event) {
      if (event.code === el.keyCode) {
        key.classList.remove('active');
      }
    });


    key.addEventListener('mouseup', () => {
      key.classList.remove('active');
    }
    );

    key.addEventListener('mousedown', () => {
      if (el.keyCode === 'Space') {
        textarea.value += " ";
        key.classList.add('active');
      } else {
        key.classList.add('active');
        textarea.value += `${el.keyName}`;
      }
    }
    );


  }
  );

}());
