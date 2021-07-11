Array.prototype.quick_sort = function (){
	let less
			,greater
			,pivot    // 基准
			,pivotList
	less = []
	greater = []

	if ( this.length <= 1 ){
		return this
	}

	pivot = this[0]

	for ( let i = 1; i < this.length; i++ ){
		if ( this[i] < pivot ){
			less.push(this[i])
		}else{
			greater.push(this[i])
		}
	}

	pivotList = [pivot]

	return (less.quick_sort()).concat(pivotList).concat(greater.quick_sort())
}

const a = [0, -1, 1, 100, 10]

a.quick_sort()

console.log(a)

// 时间复杂度分析：
// 平均时间复杂度：O(nlogn)
// 最坏时间复杂度：O(n^2)
// 最优时间复杂度：O(nlogn)

// wikipedia:
// https://zh.wikipedia.org/wiki/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F