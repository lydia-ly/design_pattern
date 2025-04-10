import Dep from "./Dep";
export default class watcher {
  constructor(vm, key, updater) {
    this.vm = vm;
    this.key = key;
    this.updateFn = updater;

    // 创建实例时，把当前实例指定到Dep.target静态属性上
    Dep.target = this;

    //   读一下key，触发getter，添加依赖
    this.vm[this.key];
    //   置空
    Dep.target = null;
  }

  update() {
    this.updateFn(this.vm, this.vm[this.key]);
  }
}
