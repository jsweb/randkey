const rfc = [8, 9, 'a', 'b'];

const pick = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

export default {
  rand(n: any) {
    const vld = n && isFinite(n) && n >= 2 && n < 37;
    const rdx = vld ? parseInt(n, 10) : 10;
    const rnd = Math.random() * Date.now();
    return Math.round(rnd).toString(rdx);
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
    const x = pick(rfc);
    return [
      this.id8(),
      this.id4(),
      `4${this.rand(16).substr(0, 3)}`,
      `${x}${this.rand(16).substr(0, 3)}`,
      this.id16().substr(0, 12),
    ].join('-');
  },
};
