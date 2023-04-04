### :open_book: 刷题语法汇总

#### :pen: 内建函数

> 1. format 格式化输出函数
> 2. round(x) 四舍五入
> 3. cmp(x,y) 对比两个对象
> 4. Abs(x)/min(x)/max(x) 绝对值/最小值/最大值
> 5. Len(x) 对象长度
> 6. range(start,stop,step) 返回一个可迭代的对象
> 7. sum() 求和函数
> 8. pow(x,y,z) 幂函数，表示取模运算
> 9. **sorted(iterable,key,reverse) 默认升序**
> 10.  int(x,base=10)/float()/str()
> 11. Ord()/chr() 字符串转ASCII/ASCII转字符串
> 12. eval() 执行一个字符表达式，返回表达式的值
> 13. map() 映射函数
> 14. filter 过滤函数
> 15. hash(obj) 返回哈希码/id() 返回对象的唯一标识符
> 16. enumarate() 将一个可遍历的数据对象组合成一个索引序列
> 17. Input() 保存输入数据 



#### :pen: 算数模块

> 1. pi 圆周率
> 2. inf 无限大
> 3. nan 非数字
> 4. e 自然数
> 5. floor()/ceil()/sqrt()/pow()/log(x,y)/log2(x)/exp(x) 
> 6. gcd(a,b) 最大公约数
> 7. fabs()支持复数运算



#### :pen: STL

**heapq**

> 1. Heapify(heap) 创建一个最小堆
> 2. heappop(heap) 返回最小数
> 3. Heappush(heap,item) 向堆内压入元素
> 4. Heappushpop(heap,item) 向堆内压入一个元素之后返回最小数
> 5. Heapreplace(heap,item) 删除堆中的一个最小元素并加入一个元素
> 6. merge(*iterables) 合并多个有序列表，并返回有序列表的迭代器（需要手动list）
> 7. nlargest(n,iterable,key) 返回最大的n个数的列表
> 8. nsmallest(n,iterable,key) 返回最小的n个数的列表

**queue**

> Queue(maxsize=0) FIFO 先进先出队列
>
> LifoQueue(maxsize=0) LIFO 后进先出队列
>
> PriorityQueue(maxsize=0) 优先队列
>
> 常见API：
>
> 1. qsize(): 返回队列的大小
> 2. full() 队列是否满
> 3. put(item,block,timeout) 以同步的方式入队
> 4. get(item, block,timeout) 以同步的方式出队
> 5. put_nowait(item) 以非同步的方式入队
> 6. get_nowait(item) 非同步方式出队
>
> item格式(priority number, data)



#### 深拷贝与浅拷贝

> copy()：返回浅拷贝层 path2=path.copy()
>
> deepcopy：返回深拷贝层 import copy path2=copy.deepcopy(path)



#### 字符串操作

>  strip([chars]) 返回原字符串的副本，移出其中前导后末尾字符
>
> split(sep=None) 返回一个由字符串内单词组成的列表
>
> find(sub[,start,[end]]) 返回子字符串在区间内被找到的最小索引
>
> count(sub[,start[,end]]) 返回字符串中sub出现的次数
>
> capitalize 将首字母大写、其余小写
>
> replace(old,new) 字符替换
>
> “xx”.join(iterable) 将可迭代对象拼接成字符串
>
> lower()/upper() 返回一个副本， 将所有字符串转化为小写或者大写
>
> Isdigit()/isalnum()/isalpha()



#### 参考

[python常用模版](https://blog.csdn.net/Shenpibaipao/article/details/105873407)
