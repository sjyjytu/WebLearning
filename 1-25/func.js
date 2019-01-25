// 有许多方式可以获取 DOM 节点；在此我们获取表单本身和
// email 输入框，以及我们将放置错误信息的 span 元素。

var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {
    // 当用户输入信息时，验证 email 字段
    if (email.validity.valid) {
        // 如果验证通过，清除已显示的错误消息
        error.innerHTML = ""; // 重置消息的内容
        error.className = "error"; // 重置消息的显示状态
    }
}, false);
form.addEventListener("submit", function (event) {
    // 当用户提交表单时，验证 email 字段
    if (!email.validity.valid) {

        // 如果验证失败，显示一个自定义错误
        error.innerHTML = "I expect an e-mail, darling!";
        error.className = "error active";
        // 还需要阻止表单提交事件，以取消数据传送
        event.preventDefault();
    }
}, false);