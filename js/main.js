let data = { id: 1, name: "NQH" };
// không ép kiểu json
// lưu vào local và ép JSON vào
localStorage.setItem("data", JSON.stringify(data));
localStorage.setItem("string","hello world");
localStorage.setItem("number",100);
localStorage.setItem("boolean", true);
localStorage.setItem("char",'C');
// lấy dữ liệu về
let dataGetLocal = JSON.parse(localStorage.getItem("data"));
console.log(dataGetLocal);

// sessionSttorage
sessionStorage.setItem("data", JSON.stringify(data));

// xóa 1 phần tử theo key
localStorage.removeItem("data");
localStorage.removeItem("string");
localStorage.removeItem("number");
localStorage.removeItem("boolean");
localStorage.clear();

// cookie
document.cookie = "username = NQH; expires =0";
document.cookie = "password = NQH; expires =0";

// lấy ra và sử dụng cookie
let cookie = document.cookie;
console.log(cookie);
let arrayCookie = cookie.split("; ");
console.log(arrayCookie);
let findIndex = arrayCookie.findIndex((value) => value.startsWith("username="));
console.log(arrayCookie[findIndex].split("=")[1]);