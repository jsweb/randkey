class RandKey {
  rand(n = 0) {
    const rnd = Math.random().toString().substr(2),
      vld = n && !isNaN(n) && n >= 2 && n < 37,
      rdx = vld ? parseInt(n) : 10,
      num = parseInt(rnd)
    return num.toString(rdx)
  }

  id4bits() {
    return this.rand(16).substr(0, 4)
  }

  id8bits() {
    return this.rand(16).substr(0, 8)
  }

  id16bits() {
    return `${this.id8bits()}${this.id8bits()}`
  }

  id32bits() {
    return `${this.id16bits()}${this.id16bits()}`
  }

  id64bits() {
    return `${this.id32bits()}${this.id32bits()}`
  }

  uuid() { //-> https://gist.github.com/LeverOne/1308368
    let a, b;
    for (b = a = ''; a++ < 36; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : '-');
    return b
  }
}

export default new RandKey
