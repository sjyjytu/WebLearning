

# web前端学习

## 2 css

### 2.1 selector

![1547980790561](C:\Users\jy\AppData\Roaming\Typora\typora-user-images\1547980790561.png)



### 2.2 边界

### ![1547982699570](C:\Users\jy\AppData\Roaming\Typora\typora-user-images\1547982699570.png)

### 2.3 图像

![1547982959370](C:\Users\jy\AppData\Roaming\Typora\typora-user-images\1547982959370.png)





## 3 JavaScript

### 3.1 数据类型

![1547995053992](C:\Users\jy\AppData\Roaming\Typora\typora-user-images\1547995053992.png)

万物皆对象

### 3.2 运算符

与C++相比，其他都一样，只有判断是否相等是===，不相等是！==，非是！



### 3.3 语法

#### if else

和C++一样

#### 函数

function a(num1, num2){

​	var result = num1*num2;

​	return result;

}

#### 事件

```js
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
```

最多的是点击事件

#### 按钮

在 html文件的<script>**前**加

```html
<button>Change user</button>
```

在main.js中写button的函数

```js
var myButton = document.querySelector('button');
```

