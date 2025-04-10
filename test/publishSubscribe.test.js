import { expect, test } from "vitest";
import { EventEmitter } from "../packages/Publish-Subscribe";

test("publish and subscribe works as expected:", () => {
  const receivedMessage = [];
  const subscriber = {
    handleEvent: function (data) {
      receivedMessage.push(data);
    },
  };
  const publisher = new EventEmitter();
  // 订阅一个事件
  publisher.on("event1", subscriber.handleEvent);
  publisher.emit("event1", "Hello, world!");

  expect(receivedMessage).toEqual(["Hello, world!"]);
  publisher.off("event1");
});
