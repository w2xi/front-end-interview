Array.prototype.bubble_sort = function (){
	for ( let i = 0; i < this.length - 1; i++ ){
		// The flag of sort completely
		let sortComplete = true

		for (let j = 0; j < this.length - i - 1; j++) {
			if ( this[j] > this[j+1] ){
				[this[j], this[j+1]] = [this[j+1], this[j]]
				sortComplete = false
			}
		}

		if ( sortComplete ){
			break
		}
	}	

	return this
}


const a = [1, -1, 10, 0]

a.bubble_sort()

console.log(a)

// 时间复杂度分析：
// 平均时间复杂度：O(n^2)
// 最坏时间复杂度：O(n^2)
// 最优时间复杂度：O(n)

// wikipedia:
// https://zh.wikipedia.org/wiki/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F