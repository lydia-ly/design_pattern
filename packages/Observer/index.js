// https://www.cnblogs.com/ronaldo9ph/p/17261876.html
// 被观察者
class Subject {
  // 构造函数
  constructor() {
    this.observers = [];
  }
  // 添加观察者
  addObserver(observer) {
    this.observers.push(observer);
  }
  // 删除观察者
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  // 通知
  notify(data) {
    this.observers.forEach((obs) => obs.update(data));
  }
}
// 观察者
class Observer {
  // 构造函数
  message = [];
  constructor(id) {
    this.docId = id;
  }
  // 更新
  update(data) {
    this.message.push(data);
    this.updateUi();
  }
  // 更新视图
  updateUi() {
    const listDiv = document.getElementById(this.docId);
    let html = "";
    this.message.map((msg) => (html += `${msg}<br />`));
    listDiv.innerHTML = html;
  }
}
