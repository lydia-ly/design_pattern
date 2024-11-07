# 适配器模式

在 JavaScript 中实现适配器模式同样是为了让不兼容的接口能够协同工作。JavaScript 作为一种动态语言，其实现适配器模式的方式比静态类型语言更为灵活。下面通过一个简单的例子来展示如何在 JavaScript 中使用适配器模式。

场景描述
假设我们有一个老版本的天气 API，它返回的数据格式如下：

```json
{
  "city": "Beijing",
  "temperature": "25"
}
```

现在我们引入了一个新的天气 API，它返回的数据格式有所不同：

```json
{
  "name": "Beijing",
  "main": {
    "temp": 25
  }
}
```

为了保持代码的一致性和兼容性，我们需要创建一个适配器，使得新 API 的数据格式看起来像是旧 API 的数据格式。

实现适配器
首先，定义一个函数来模拟从新 API 获取数据：

```js
function getNewWeatherData(city) {
  return {
    name: city,
    main: {
      temp: 25,
    },
  };
}
```

接下来，创建一个适配器函数，用于将新 API 的数据格式转换为旧 API 的数据格式：

```js
function weatherDataAdapter(newWeatherData) {
  return {
    city: newWeatherData.name,
    temperature: newWeatherData.main.temp,
  };
}
```

使用适配器
现在，我们可以像使用旧 API 一样使用新 API 的数据：

```js
// 假设我们要获取北京的天气信息
const newWeatherData = getNewWeatherData("Beijing");
const adaptedWeatherData = weatherDataAdapter(newWeatherData);

console.log(adaptedWeatherData); // 输出: { city: 'Beijing', temperature: 25 }
```

## 解释

getNewWeatherData 函数模拟从新 API 获取数据的过程，返回的是新 API 特有的数据格式。
weatherDataAdapter 函数作为适配器，接收新 API 的数据，然后将其转换为旧 API 的数据格式。
在使用数据的地方，我们调用 weatherDataAdapter 将新 API 的数据转换为旧 API 的数据格式，从而保持了代码的一致性和可维护性。
总结
适配器模式在 JavaScript 中非常有用，尤其是在处理外部 API 或者库的时候，当这些 API 或库的接口发生变化时，通过适配器模式可以避免大量修改已有的代码，同时也使得代码更加模块化和易于维护。适配器模式的应用不仅仅限于 API 数据格式的转换，还可以用于任何需要转换接口的情形。
