// 发布订阅模式 ：消息队列
export class EventEmitter {
  events = {};
  // 添加事件到列表中
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  // 发布事件
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => {
        callback(data);
      });
    }
  }
  // 从事件列表中删除事件
  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((cb) => cb !== callback);
    }

    // if (this.events[event]) {
    //   for (var i = 0; i < this.events[event].length; i++) {
    //     if (this.events[event][i] === callback) {
    //       this.events[event].splice(i, 1);
    //       break;
    //     }
    //   }
    // }
  }
}

// 调试
// 定义一个订阅者对象
var subscriber = {
  // 处理事件的回调函数
  handleEvent: function (data) {
    console.log(data);
  },
  handleEvent2: function (data) {
    console.log(22, data);
  },
};

const publisher = new EventEmitter();
// 订阅一个事件
publisher.on("event1", subscriber.handleEvent);
publisher.on("event1", subscriber.handleEvent2);
// 发布事件
publisher.emit("event1", "Hello, world!");

// 取消订阅一个事件
publisher.off("event1");
