export default class Performance {
    userId;
    kind;
    data;
  
    constructor(data) {
      this.userId = data.userId;
      this.kind = data.kind;
      this.data = data.data
    }
  }