

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

## 4 超链接

#### 4.1 链接到文档片段

先给个起个id，然后链接的时候路径+#+id，不加路径的话就链接到本文档特定位置

![1548248894373](C:\Users\jy\AppData\Roaming\Typora\typora-user-images\1548248894373.png)

#### 4.2 下载属性

下载东西的时候提供一个下载属性download，作为默认保存文件名

<a href="..." download="ojbk.exe">abc</a>

## 5 高级文字格式

https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting

## 6 HTML布局细节

&lt;main> 放在&lt;body>中，每个页面只有一个
&lt;article> 闭合一块与自身相关的内容，这块内容能够解释它自身而不是页面上其他的内容（例如一篇单独的博客）。

&lt;section>近似于article，但是它更多的是伴随着由一个单独功能构成的页面（例如一个小型的地图，或者是一组文章的标题和摘要）。它被认为最好的实际应用是用[标题](https://developer.mozilla.org/en-US/Learn/HTML/Howto/Set_up_a_proper_title_hierarchy)作为每一部分（section）的开头；也要注意的是你可以把不同的<article>分到不同的<section>中，或者把不同的<section>分到不同的<article>中，这要取决于内容。

&lt;aside>包含的内容并不与主要内容有直接的联系，但是它可以提供额外的不直接有联系的信息，术语表条目，作者简介，相关链接等等

&lt;header>展现了一系列的介绍性内容。如果它是body 的子元素,它就定义了网站的全局页眉。但是如果它是article或section的子元素，它就定义了这些部分的特定的页眉

&lt;nav>包含了页面主要的导航功能。二级链接等，不会进入导航功能部分。

&lt;footer>包含了页面的页脚部分

&lt;div> 无语义块级元素 &lt;span> 无语义行内元素

&lt;br>段内换行

&lt;hr>水平分割线

## 7 多媒体

### 7.1 点阵图

![1548295362104](C:\Users\jy\AppData\Roaming\Typora\typora-user-images\1548295362104.png)

### 7.2 图片

![1548297130386](C:\Users\jy\AppData\Roaming\Typora\typora-user-images\1548297130386.png)

放到figure中，figcaption为与图片联系的文本解释（figure用于图片，图表，代码等）

html图片与css图片的区别，css图片只是视觉上的漂亮，不能有语义上的意义

总而言之，如果图像对您的内容里有意义，则应使用HTML图像。 如果图像纯粹是装饰，则应使用CSS背景图片。

<hr>

### 7.3 音频和视频

#### 7.3.1 视频video

![1548299038159](C:\Users\jy\AppData\Roaming\Typora\typora-user-images\1548299038159.png)

不加controls播放都播放不了

![1548299380303](C:\Users\jy\AppData\Roaming\Typora\typora-user-images\1548299380303.png)

一般不用autoplay，还有preload--缓存

#### 7.3.2 音频audio

不支持width height poster，其他和video一样

#### 7.3.3 添加字幕WebVTT

三种样式：![1548299797124](C:\Users\jy\AppData\Roaming\Typora\typora-user-images\1548299797124.png)

典型的VTT文件如下：

```html
WEBVTT

1
00:00:22.230 --> 00:00:24.606
This is the first subtitle.

2
00:00:30.739 --> 00:00:34.074
This is the second.

  ...
```

这样添加：

```html
<video controls>
    <source src="example.mp4" type="video/mp4">
    <source src="example.webm" type="video/webm">
    <track kind="subtitles" src="subtitles_en.vtt" srclang="en">
</video>
```

#### 7.3.4 使用iframe，嵌入别人的东西

![1548302058859](C:\Users\jy\AppData\Roaming\Typora\typora-user-images\1548302058859.png)

但是iframe可能不安全，黑客会通过iframe攻击

#### 7.3.5 object嵌入pdf

![1548302359107](C:\Users\jy\AppData\Roaming\Typora\typora-user-images\1548302359107.png)

### 7.4 矢量图svg

![1548303588572](C:\Users\jy\AppData\Roaming\Typora\typora-user-images\1548303588572.png)

### 7.5 自适应图片

![1548314689869](C:\Users\jy\AppData\Roaming\Typora\typora-user-images\1548314689869.png)

media为当前用户的条件，第一个为真就显示该图片；srcset为图片路径



### 8 表格

包含在table中，th为标题，td为单元格，tr为一行

### 9 表单

![1548390721000](C:\Users\jy\AppData\Roaming\Typora\typora-user-images\1548390721000.png)

![1548390736373](C:\Users\jy\AppData\Roaming\Typora\typora-user-images\1548390736373.png)

![1548390775135](C:\Users\jy\AppData\Roaming\Typora\typora-user-images\1548390775135.png)

label：点这标签时激活对应id的控件

input：1.text 可以通过设置value指定默认值 2.email 只能输入email格式的东西

textarea：直接在闭合区域设置默认值