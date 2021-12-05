---
title: "Javascript Hoisting"
date: "2021-11-26T22:47:31+07:00"
description: Bài viết này bàn về Hoisting trong Javascript
category: technical
tags:
  - javascript
  - fundemental
---

# Khái niệm
Hoisting trong Javascript là một hành vi của Javascript engine, nó sẽ đem phần khai báo (declaration) của một biến (variable), một hàm (function) hoặc một lớp (class) lên trên đầu scope của chúng trước khi thực thi code. Nói cách khác, bạn có thể thực thi một logic truy cập một biến, một hàm hoặc một lớp trước khi khai báo nó, Javascript engine sẽ hiểu ngầm đem phần khai báo đó lên trên trước khi thực thi đoạn logic của bạn.
# Function Hoisting
Ví dụ:
```javascript
hello("world"); // print "Hello world"

function hello(name) {
  console.log("Hello " + name);
}
```
Như bạn có thể thấy, hàm `hello` được gọi ra trước khi nó được khai báo ngay sau đó. Đây là kiểu hoisting ít phức tạp và dễ hiểu nhất.

Trong trường hợp bạn không khai báo hàm `hello` mà chỉ gọi nó, một `ReferenceError` sẽ được đưa ra:
```javascript
hello("world"); // ReferenceError: 'hello' is not defined
```
# Variable Hoisting
```javascript
console.log(name); // print undefined
name = "Thang"; // Initialization
console.log(name); // print "Thang"
var name; // Declaration
```
Theo như đoạn code ở trên, biến `name` được truy cập, gán giá trị trước khi được khai báo ở dòng 5. Câu hỏi được đặt ra, tại sao ở dòng 1 khi in `name` lại nhận được kết quả `undefined`?

Trong thực tế, việc hoisting chỉ đem phần khai báo của biến `name` lên trên đầu của scope. Nó không đem phần khởi tạo (initialization) lên trên cùng theo. Vậy nên Javascript engine sẽ hiểu như sau:
```javascript
var name; // Declaration
console.log(name); // print undefined
name = "Thang"; // Initialization
console.log(name); // print "Thang"
```
Giá trị mặc định của một biến khai báo với keyword `var` là `undefined`. Vậy nên dòng 2, giá trị của `name` là `undefined`. Ở dòng 3 tôi gán `name` là `"Thang"`, biến `name` đã được định nghĩa một giá trị cụ thể và được in ra ở dòng 5.

Trong trường hợp bạn không khai báo biến `name` mà chỉ đơn thuần truy cập, cập nhật giá trị, một `ReferenceError` sẽ được đưa ra:
```javascript
console.log(name); // ReferenceError: 'name' is not defined
```

Ngoài ra, trong Javascript, chúng ta không chỉ dùng keyword `var` để khai báo (hoặc kết hợp cả định nghĩa) một biến, Javascript ES6 hỗ trợ thêm các keyword `const` và `let`. Tương tự như `var`, các biến khai báo bằng `const` và `let` cũng có thể hoisting. Tuy nhiên có một chút khác biệt ở phần khởi tạo (initialization).
```javascript
console.log(constant); // ReferenceError: Cannot access 'constant' before initialization
const constant = 5;
```
Keyword `const` và `var` không có một giá trị mặc định cụ thể khi khai báo các biến. Các biến này sẽ throw ra một `ReferenceError` ngăn không cho bạn truy cập vào chúng trước khi chúng được khởi tạo. Chúng vẫn `hoisting` được, chỉ là không thể truy cập được chúng trước khi khởi tạo chúng.

# Class Hoisting
Sau khi xem qua về `Function Hoisting` và `Variable Hoisting`, nhắc đến `Class Hoisting`, ta sẽ nghĩ ngay đến việc có thể khởi tạo một đối tượng với một lớp cụ thể trước khi định nghĩa lớp đó. Trên thực tế điều đó không xảy ra.
```javascript
const tiger = new Animal(); // ReferenceError: Cannot access 'Animal' before initialization
class Animal {
  run() {}
}
```
Phần khai báo của lớp `Animal` cũng được hoisting. Tuy nhiên, lớp này vẫn chưa trải qua bước khởi tạo, vậy nên chúng cũng throw một `ReferenceError`. Trong trường hợp này, chúng ta bắt buộc phải khai báo và định nghĩa lớp trước khi truy cập vào chúng.
```javascript
class Animal {
  run() {}
}
const tiger = new Animal();
```
# Tham khảo

[Hoisting - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

[Classes - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
