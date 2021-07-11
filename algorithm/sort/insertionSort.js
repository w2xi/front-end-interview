Array.prototype.insertion_sort = function (){
	for ( let i = 1; i < this.length; i++ ){
		// new element
		let newElem = this[i]
		// the maximum index of sorted compeletely
		let j = i - 1

		for ( ; j >= 0 && this[j] > newElem; j-- ){
			this[j+1] = this[j]
		}
		
		this[j+1] = newElem
	}

	return this
}

const a = [1, 0, -1, 10]

a.insertion_sort()

console.log(a)

// 时间复杂度分析：
// 平均时间复杂度：O(n^2)
// 最坏时间复杂度：O(n^2)
// 最优时间复杂度：O(n)

// wikipedia:
// https://zh.wikipedia.org/wiki/%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F