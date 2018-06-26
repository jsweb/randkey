import uuid from 'UUID'

class RandKey {
  rand(n = 0) {
    const rnd = Math.random().toString().substr(2),
      vld = n && !isNaN(n) && n >= 2 && n < 37,
      rdx = vld ? parseInt(n) : 10,
      num = parseInt(rnd)
    return num.toString(rdx)
  }

  id4() {
    return this.rand(16).substr(0, 4)
  }

  id8() {
    return this.rand(16).substr(0, 8)
  }

  id16() {
    return `${this.id8()}${this.id8()}`
  }

  id32() {
    return `${this.id16()}${this.id16()}`
  }

  id64() {
    return `${this.id32()}${this.id32()}`
  }

  uuid() {
    return uuid()
  }
}

export default new RandKey
