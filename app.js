let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

let caption = document.createElement('p');
caption.className = 'caption';
caption.innerText = 'RSS Virtual Keyboard';
wrapper.append(caption);

let textarea = document.createElement('textarea');
textarea.className = 'textarea';
wrapper.append(textarea);
textarea.setAttribute('rows', 10);


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

// let key = document.createElement('button');
// key.className = 'keyboard__key';
// row.append(key);
// key.innerText = 'a';

let info = document.createElement('p');
info.className = 'info';
wrapper.append(info);
info.innerText = 'Клавиатура создана в ОС Windows';

(function () {
    const allKeys1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
    allKeys1.forEach(el => {

        let key = document.createElement('div');
        key.className = 'keyboard__key';
        key.classList.add(`key${el}`);
        row1.append(key);
        key.innerText = el;
    }
    );

    const allKeys2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
    allKeys2.forEach(el => {
        let key = document.createElement('div');
        key.className = 'keyboard__key';
        key.classList.add(`key${el}`);
        row2.append(key);
        key.innerText = el;
    });
    const allKeys3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'];
    allKeys3.forEach(el => {
        let key = document.createElement('div');
        key.className = 'keyboard__key';
        key.classList.add(`key${el}`);
        row3.append(key);
        key.innerText = el;
    });

    const allKeys4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '⮝', 'Shift'];
    allKeys4.forEach(el => {
        let key = document.createElement('div');
        key.className = 'keyboard__key';
        key.classList.add(`key${el}`);
        row4.append(key);
        key.innerText = el;
    });
    const allKeys5 = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '⮜', '⮟', '➤', 'Ctrl'];
    allKeys5.forEach(el => {
        let key = document.createElement('div');
        key.className = 'keyboard__key';
        key.classList.add(`key${el}`);
        row5.append(key);
        key.innerText = el;
    });

}());
