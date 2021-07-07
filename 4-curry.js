// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;


function curry()
{
	const argsArr = [...arguments]

	const fn = function(){
		argsArr.push(...arguments)

		return fn
	}

	fn.toString = function(){
		return argsArr.reduce((a, b) => a + b)
	}

	return fn
}

console.log(curry(1,2,3)(4))