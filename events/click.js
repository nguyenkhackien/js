// // addEventListener
// const button = document.querySelector(".button");
// const span = document.querySelector(".button span");
// function handleClick() {
//   console.log("click button");
// }
// // Lỗi sai khi dùng function vào eventListener
// // button.addEventListener("click", handleClick());
// // Đúng
// // button.addEventListener("click", function () {});
// // event: e
// // span.addEventListener("click", function (e) {
// //   // e.stopPropagation();
// //   e.stopImmediatePropagation();
// //   console.log("click span");
// // }, {
// //   capture: true
// // });
// // span.addEventListener("click", function (e) {
// //   e.stopPropagation();
// //   console.log("click span 2");
// // });
// // document.body.addEventListener("click", function () {
// //   console.log("click body");
// // });
// // bubbling: nổi bọt
// // sự kiện click chạy từ trong ra ngoài
// // target vs currentTarget
// button.addEventListener("click", function (event) {
//   // event.target: nó sẽ chọn chính xác element mà mình click tới
//   console.log(`event.target: ${event.target}`);
//   // event.currentTarget: nó sẽ chọn phần tử mà mình click
//   console.log(`event.currentTarget: ${event.currentTarget}`);
// });
// // event.preventDefault();
// const link = document.querySelector(".link");
// link.addEventListener("click", function (event) {
//   event.preventDefault();
//   // Lấy custom attribute data-abc
//   // event.target.dataset.name
//   const name = event.target.dataset.name;
//   console.log(name);
//   // console.log()
//   // selector.style.property = value
//   // event.target.style.property = value
//   // console.log(event.target);
//   // console.log(event.target.style);
//   // event.target.style.color = "red";
//   // background-color -> backgroundColor
//   // position -> position
// });

const button = document.querySelector(".modal-submit");

function handleClick() {
  console.log("click me!");
}
button.addEventListener("click", (e) => {
  // chan cac su kien ben ngoai khi bam 
  // chan duoc cac su kien ngoai nhung khong chan dc chinh no neu bi lap lai
  // e.stopPropagation();
  // chan ngay lap tuc 
  // e.stopImmediatePropagation()
  console.log("click me");
},{
  // lay tu ngoai vao trong
  capture: true,
});
// dung
button.addEventListener("click", handleClick);
//sai
// button.addEventListener("click",handleClick());

// target vs currentTarget
button.addEventListener("click", (e) => {
  // tra ve chinh xac element dang click vao
  console.log(e.target);
  // tra ve element dc click
  console.log(e.currentTarget);
});