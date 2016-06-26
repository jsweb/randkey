let rk = {
  rand() {
    let n = Math.random() * Date.now()
    return Math.round(n)
  },

  randx() {
    return rk.rand().toString(16)
  },

  randxx() {
    return rk.rand().toString(32)
  },

  randxxx() {
    return rk.rand().toString(36)
  },

  id4bits() {
    return rk.randxxx().substr(0, 4)
  },

  id8bits() {
    return [rk.id4bits(), rk.id4bits()].join('')
  },

  id16bits() {
    return [rk.id8bits(), rk.id8bits()].join('')
  },

  id32bits() {
    return [rk.id16bits(), rk.id16bits()].join('')
  },

  uuid() {
    return [
      rk.id8bits(),
      rk.id4bits(),
      rk.id4bits(),
      rk.id4bits(),
      rk.id16bits().substr(0, 12)
    ].join('-')
  }
}

export default rk
