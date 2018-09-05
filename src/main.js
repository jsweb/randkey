export default {
  rand(n) {
    const rnd = Math.random().toString().substr(2);
    const vld = n && !isNaN(n) && n >= 2 && n < 37;
    const rdx = vld ? parseInt(n) : 10;
    const num = parseInt(rnd);
    return num.toString(rdx);
  },

  id4() {
    return this.rand(16).substr(0, 4);
  },

  id8() {
    return this.rand(16).substr(0, 8);
  },

  id16() {
    return `${this.id8()}${this.id8()}`;
  },

  id32() {
    return `${this.id16()}${this.id16()}`;
  },

  id64() {
    return `${this.id32()}${this.id32()}`;
  },

  uuid() {
    let a, b;
    for (b = a = ''; a++ < 36; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : '-');
    return b;
  }
};
