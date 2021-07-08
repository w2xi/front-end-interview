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
}

// const a = [1, -1, 10, 0]
const a = [-1, 0, 1, 10]

a.bubble_sort()

console.log(a)