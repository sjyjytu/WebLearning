var usrName = document.querySelector('#name');
var cn = document.querySelector('#cn');
var us = document.querySelector('#us');
var uk = document.querySelector('#uk');

var btn = document.querySelector('.generate');
btn.addEventListener('click',generateJoke);
document.getElementById('cn').onclick = function () {
    document.querySelector('.generate').textContent = '随机生成笑话';
}

document.getElementById('us').onclick =
    document.getElementById('uk').onclick = function () {
        document.querySelector('.generate').textContent = 'Generate random story';
    };
function generateJoke() {
    var para = document.querySelector('.story');
    var name = '客天涯';
    if (usrName.value)
        name = usrName.value;
    if(cn.checked)
    {
        para.textContent = '您好，'+ name;
    }
    else {
        para.textContent = 'Hello,' + name;
        displayMessage();
    }
}

function displayMessage() {
    var html = document.querySelector('html');

    var panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    var msg = document.createElement('p');
    msg.textContent = 'This is a message box';
    panel.appendChild(msg);

    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel);
    }
}