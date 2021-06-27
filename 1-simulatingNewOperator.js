/**
 * front-end-developer-interview 
 *
 */


/***** 1.模拟 new 的过程 *****/

// 首先我们得知道 new 一个构造函数会执行那些操作

// (1) 在内存中创建一个新对象
// (2) 这个新对象内部的 [[prototype]] 特性被赋值为 构造函数的 prototype 属性
// (3) 构造函数内部的 this 被赋值为 这个新对象 ( 即this指向新对象 )
// (4) 执行构造函数内部的代码 ( 给新对象添加属性 )
// (5) 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象

// 代码模拟实现

function Person(name)
{
	this.name = name
	this.sayHello = function(){
		console.log(this.name, 'hello')
	}
}

// 模拟 new 操作
function simulatingNewOperator(constructFunc, ...args)
{
	// const o = new Object()
	// o.__proto__ = constructFunc.prototype

	const o = Object.create(constructFunc.prototype)

	const res = constructFunc.apply(o, args)

	return res instanceof Object ? res : o
}

// const xiaoming = new Person('xiaoming')

const xiaoming = simulatingNewOperator(Person, 'xiaoming')


xiaoming.sayHello()



