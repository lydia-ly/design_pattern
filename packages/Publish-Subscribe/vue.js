class Vue {
  constructor(options) {
    this.$options = options;
    this.$data = options.data;
    // 对data选项做响应式处理
    observer(data);

    // 代理data到vm上
    proxy(this);
    // 执行编译
    new Compile(options.el, this);
  }
}

function observer(obj) {
  if (typeof obj !== "object" || obj === null) {
    return;
  }
  new Observer(obj);
}

class Observer {
  constructor(value) {
    this.value = value;
  }
  walk(obj) {
    Object.keys(obj).forEach((key) => {
      defineReactive(obj, key, obj[key]);
    });
  }
}

function defineReactive(obj, key, val) {
  observer(val);
  const dep = new Dep();
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      dep.depend();
      return val;
    },
    set: function reactiveSetter(newVal) {
      if (newVal === val) return;
    },
  });
}
