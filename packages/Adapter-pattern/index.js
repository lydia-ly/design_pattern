// JS 适配器
class NewAPI {
  request(data) {
    console.log(`NewAPI: Sending data - ${data}`);
  }
}

// 适配者对象
class OldAPI {
  send(data) {
    console.log(`OldAPI: Sending data - ${data}`);
  }
}

// 适配器对象
class Adapter extends NewAPI {
  constructor(oldAPI) {
    this.oldAPI = oldAPI;
  }

  request(data) {
    // 转换数据或逻辑，如果需要的话
    this.oldAPI.send(data);
  }
}

const oldApiInstance = new OldAPI();
const adapter = new Adapter(oldApiInstance);
adapter.request("Hello, World!");