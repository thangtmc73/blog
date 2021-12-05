---
title: "Filter Boolean trong Javascript"
date: "2021-07-12T02:05:34+07:00"
description: Khi đọc qua phần config Wepback mặc định của template Create React App tôi tìm thấy phần code lạ
category: technical
tags:
  - javascript
  - trick
---

Khi đọc qua phần config Wepback mặc định của template Create React App tôi tìm thấy phần code như sau:

```javascript
const loaders = [
  isEnvDevelopent && require.resolve("style-loader"),
  isEnvProduction && {
    loader: MiniCssExtractPlugin.loader,
    options: shouldUseRelativeAssetPath ? { publicPath: "../../" } : {},
  },
  // ...
].filter(Boolean);
```

Vậy rốt cuộc `filter(Boolean)` có ý nghĩa gì?

# Phân tích

Ta có `loaders` khai báo và định nghĩa với kiểu `Array`, sử dụng `prototype.Array.filter` nhận `callback function` là `Boolean`.

## Boolean

Là kiểu giá trị có hai giá trị `true` hoặc `false`. Ngoài ra bạn có thể dùng `Boolean` như một `function`, có tác dụng ép kiểu input truyền vào thành giá trị `Boolean` (`truthy value` => `true` hoặc `falsy value` => `false`).

## Filter

Từ mảng `Array` đã cho sẽ tạo ra một mảng mới với các phần tử `i` thỏa mãn điều kiện của `callbackFunc(i)` trả về `true`.

## Cách hoạt động

- Duyệt từng phần tử trong mảng `loaders` và truyền nó vào `callback function` là `Boolean` của `loaders.filter`.
- Với từng phần tử `Boolean()` sẽ trả về giá trị `true` nếu là `truthy value` và `false` nếu là `falsy value`.
- `loader.filter` lọc bỏ đi những phần tử được trả về `false`.

## Ứng dụng

- Có thể sử dụng trick này để loại bỏ những phần tử mang tính `falsy value` như `undefined` hay `null`, giảm bớt thao tác kiểm tra điều kiện `falsy value` đối với từng phần tử.

## Tham khảo

[Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

[Truthy value và falsy value trong Javascript](https://thangtmc73.github.io/posts/2021-07-12-truthy-value-falsy-value-trong-javascript/)
