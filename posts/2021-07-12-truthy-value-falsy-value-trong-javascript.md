---
title: "Truthy value và falsy Value Trong Javascript"
date: "2021-07-12T02:11:49+07:00"
description: Bài viết này viết về các giá trị truthy value và falsy value trong Javascript
category: technical
tags:
  - javascript
---

# Falsy value

`Falsy value` là những giá trị trong Javascript trong bối cảnh bị ép kiểu về kiểu `Boolean` sẽ trả về giá trị `false`.

Những giá trị falsy bao gồm:

```javascript
false; // Boolean
0, -0; // Number
0n, -0n, 0x0n, -0x0n; // BigInt
undefined;
null;
NaN;
"", "", ``; // String (empty)
```

# Truthy value

Ngược lại với `falsy value`, `truthy value` sẽ trả về giá trị `true`. Tất cả những giá trị không phải là `falsy value` đều là `truthy value`.

# Điều cần ghi nhớ

- Các giá trị `falsy value` rất nguy hiểm khi so sánh với nhau (cần tra cứu kiểm tra thử). Tốt nhất dùng toán tử `===` thay vì `==`.
- Đưa về kiểu `Boolean` để dễ kiểm soát bằng toán tử `!!` hoặc function `Boolean()`.

# Tham khảo

[Truthy & Falsey](https://j11y.io/javascript/truthy-falsey/)

[Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

[Truthy and Falsy: When All is Not Equal in JavaScript](https://www.sitepoint.com/javascript-truthy-falsy/)
