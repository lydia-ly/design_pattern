import { observer } from "./Observer";
class Vue {
  constructor(options) {
    this.$options = options;
    this.$data = options.data;
    // 1. 对data选项做响应式处理
    observer(data);

    // 代理data到vm上
    proxy(this);
    // 2. 执行编译
    new Compile(options.el, this);
  }
}
