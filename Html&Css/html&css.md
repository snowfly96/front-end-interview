### :pen: HTML

#### 块级元素和行级元素？

> 1. 块级元素独占一行，宽度填充满父级元素宽度；可以设置宽高属性（即使设置宽度属性也是独占一行），可设置margin和padding
> 2. 行内元素不占一行，宽度随内容而定；设置宽高属性无效，padding和margin的上下属性无效（如padding-top无效，padding-left有效）

#### !DOCTYPE作用？

> 告知浏览器将使用哪个版本的html，<!DOCTYPE html>使用最新版本的html解析页面

#### 文档对象模型？

> DOM模型是对html文档的抽象，将html结构抽象为一棵逻辑树，树中每个节点表示文档中一个元素。DOM模型给js提供操作文档的编程接口

#### script中的async和defer

> 浏览器加载html的时候会遇到script标签，浏览器必须等待script加载完毕之后再进行加载，会出现阻塞页面的问题
>
> defer和async采用异步的方式，告诉浏览器立即加载，但是不阻塞后续页面的加载
>
> defer是会保持相对顺序的，async不会保持相对顺序，哪个先加载完毕哪个先运行

###  :pen: CSS

#### 盒子模型？

> 边距，边框，填充，和实际内容
> **标准盒子模型：**margin+border+padding+content
> **IE盒子模型：**margin+content（border+padding）

#### 弹性盒子模型？

> 弹性盒子模型可以使得子元素在任意方向上排列，可以增大尺寸填满未占用空间，可以缩小盒子避免父元素溢出

#### css 继承？

> 给父级设置一些属性，子级继承了父级的该属性
> 可以被继承的属性：
>
> 1. font
> 2. line-height
> 3. 可见性
> 4. 表格布局属性

#### css 层叠？

> 通过z-index：按照z轴从上至下排列
>
> `z-index` 属性只对定位元素（即 `position` 属性值为 `relative`、`absolute` 或 `fixed` 的元素）起作用，对于非定位元素和使用 `float` 属性的元素，`z-index` 属性没有效果。
>
> 脱离文档流的元素默认后面覆盖前面，可以通过设置`z-index`来修改它们的层级关系

#### css 优先级？

> css本身具有继承性，层叠性，优先级
> !important、行内样式、id、类/伪类/属性

#### 伪类/伪元素？

> **伪类-**单冒号 :  如 :first-child. :hover 用于选择处于特定状态的元素
> **伪元素**-双冒号 :: 如 ::after. 将css内容插入到html文档中（文档流以外），对html进行**装饰**

#### 隐藏元素？

> **display：none**，元素在页面上消失，不占空间位置
> **opacity：0**，元素透明度设置为0，占空间位置
> **visibility：hidden**，元素不可见状态，占据空间位置

#### px与rem？

> px 绝对的单位，根据页面像素进行计算
> rem/e m 相对单位，em根据其父节点的font-size进行计算，rem根据根节点的font-size进行计算的

#### 垂直居中？

> 1. 定位+margin 父元素采用相对定位/子元素采用绝对定位+margin:auto (left/top/bottom/right:0)
> 2. 定位+transform 父元素采用相对定位/子元素采用绝对定位 left:50% right:50% transform:translate(-50%,-50%)
> 3. flex布局 只需要父元素(justify-content:center, align-items:center)
> 4. grid布局
> 5. table布局

#### css的预处理器？

> 通过预处理器自己独有的语法来生成CSS的程序
> sass/less预处理器

#### css定位？

> [B站链接](https://www.bilibili.com/video/BV1ni4y1g7tc/?spm_id_from=333.337.search-card.all.click&vd_source=084728306193898208d80f40ece2975b)

#### css的margin？

#### css的position？

> [阮一峰老师博客](https://www.ruanyifeng.com/blog/2019/11/css-position.html)
>
> [sticky定位](https://www.zhangxinxu.com/wordpress/2018/12/css-position-sticky/)



#### 三十天练习

[github小项目](https://github.com/wesbos/JavaScript30)
