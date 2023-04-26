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

let row = document.createElement('div');
row.className = 'keyboard__row';
keyboard.append(row);

let key = document.createElement('button');
key.className = 'keyboard__key';
row.append(key);
key.innerText = 'a';

let info = document.createElement('p');
info.className = 'info';
wrapper.append(info);
info.innerText = 'Клавиатура создана в ОС Windows';

