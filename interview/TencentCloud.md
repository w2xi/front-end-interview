# 腾讯云-Web前端岗

### # 面试形式
视频面试

### # 面试内容  
- css
- js
- coding  

### # CSS
(1) 说一下给定一个盒子如何垂直居中  

```
.parent {
	position: relative;
}

.parent {
	position: absolute;
	left: 50%; right: 50%;
	transform: translate(-50%, -50%);
}
```

```
.containr {
	display: flex;
}

.item {
	justigy-content: center;
	align-items: center;
}

```

延伸:
- 相对定位(relative), 是对谁相对定位？
- (因为我聊到了行高)为什么设置行高等于盒子高度会使文字垂直居中，行高是什么？
- display: flex 是简写形式，他是那三个属性的简写？  
- 说一下文档流？

### # JS 
1. 事件循环？  

2. 上下文？  

3. 给定一段代码，说一下执行过程？  
	- ```javascript
          function foo(i)
          {
          	var a = 'hello'
          	var b = function privateB() {}
          	let c = 1
          	function c() {}
          }

          foo(22)
	  ```

4. HTTP2相比HTTP1解决了什么问题？HTTP1的缺点(不好的地方)

- 聊到项目后：
    - 你觉得你做过最复杂的项目是？  
	- 在聊到图的时候，面试官让 手写图  
	- 最后让手写排序算法  

### # Coding
无(太菜了，还没到这里就挂了)



### # Else
#### 面试之前：  
面试官：看你简历上写着刚看完 《《JavaScript高级程序设计》》，你自己觉得JS基础怎么样？  
我：应该还不错  
面试官：那行，面试内容就偏前端了，js都是 高程 里的  
我：OK( 假装毫无压力，轻松 )

####...... A few minutes later 

面试官：你不是说你看完了 《《JS高程》》 吗？  
我：额，这个，其实看完有一两个月了，有些知识点忘了(尴尬) 只有个概念，具体就说不出来了。  
面试官：那你这不是白看了吗 
我：......  
  
面试官：你有什么要问的吗？
我：......( 内心，大佬我不敢问了 ) 就随便问了几个问题

#### # END 
一句话总结：太菜了


