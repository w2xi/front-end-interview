/**  
 *  1. 假设 div.outer 与 div.inner 的尺寸均未知,但后者比前者小。
 *  请列举至少两种方法,使 div.inner 定位在 div.outer 的正中央。
 *
 */

// 方法一

.outer {
	position: relative;
}

.inner {
	positoion: absolute;
	left: 50%:
	top: 50%;
	transform: translate(-50%, -50%);
}

// 方法二

.outer {
	display: flex;
}

.inner {
	justify-content: center;
	align-items: center;
}


/**
 * 2. 使用正则表达式检查某段字符串是否为 URL。
 * URL 的认定标准: 以「协议://」开头,
 * 例如「http://」、
 *「https://」、「ftp://」、「file://」等,
 * 但无需校验是否为有效协议。
 *
 */

console.log(isValidURL('https://www.baidu.com/'))

function isValidURL(url)
{
	return /\w+:\/\/.+/.test(url)
}



/**
 * 3. 使用 ES6 的类和继承编写两个类:
 * (1): 一个为“形状类”,另一个为“正方形类”;“正方形类”是“形状类”的子类。
 * (2): 具备计算周⻓和面积的方法。
 *
 */

console.log(new Square(4).getAera())

class Shape {}

class Square extends Shape
{
	constructor(sideLength){
		super()
		this.sideLength = sideLength
	}

	getAera(){
		return this.sideLength * this.sideLength
	}

	getCircumference(){
		return 4 * this.sideLength
	}
}


/**
 * 4. 假设一段字符串由英文字母组成,请找出该字符串中出现 次数最多 的字符。
 * 
 */

console.log(getMaximumCountOfChar('Hello world!'));

function getMaximumCountOfChar(str)
{
	const data = {}

	for ( let char of str )
	{
		if ( data.hasOwnProperty(char) ){
			data[char]++
		}else{
			data[char] = 1
		}
	}

	const res = Object.entries(data).sort((a, b) => b[1] - a[1])

	return res[0][0]
}



/**
 * 5. 通过 Promise、async、await(三者都要用到)实现:a、b 并行执行完毕后再执行 c。
 * function a(callback) { setTimeout(callback, 10); }
 * function b(callback) { setTimeout(callback, 40); }
 * function c(callback) { setTimeout(callback, 20); }
 *
 */

execute()

function a(callback) { setTimeout(callback, 10); }
function b(callback) { setTimeout(callback, 40); }
function c(callback) { setTimeout(callback, 20); }

aysnc function execute()
{
	const p1 = () => {
		return new Promise((resolve, reject) => {
			a(() => resolve('a'));
		})
	}

	const p2 = () => {
		return new Promise((resolve, reject) => {
			b(() => resolve('b'))
		})
	}

	const p3 = () => {
		return new Promise((resolve, reject) => {
			c(() => resolve('c'))
		})
	}

	const res = await Promise.all([p1(), p2()])
	console.log(...res)
	console.log(await p3())
}

