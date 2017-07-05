class RandKey {
	rand(n = 0) {
		return n && !isNaN(n) && n > 1 && n < 37
			? this.rand().toString(parseInt(n))
			: Math.round(Math.random() * Date.now())
	}
	id4bits() {
		return this.rand(16).substr(0, 4)
	}
	id8bits() {
		return [this.id4bits(), this.id4bits()].join('')
	}
	id16bits() {
		return [this.id8bits(), this.id8bits()].join('')
	}
	id32bits() {
		return [this.id16bits(), this.id16bits()].join('')
	}
	uuid() {
		return [
			this.id8bits(),
			this.id4bits(),
			this.id4bits(),
			this.id4bits(),
			this.id16bits().substr(0, 12)
		].join('-')
	}
}

export default new RandKey
