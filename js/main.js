

// BÀI 1 : tính tiền lương nhân viên

// Mô hình 3 khối:

// bước 1: giả sử số ngày làm là 30 ngày (100.000/NGÀY)

// bước 2: lương = 100 * số ngày

// bước 3: lương = ?

var ngayLam = 30;
var luongMotNgay = 100000 ;
var luong = ngayLam * luongMotNgay ;
console.log(luong); //3.000.000





// BÀI 2 : Tính giá trị trung bình

// Mô hình 3 khối:

// bước 1: giả sử n = 12345

// bước 2: 
/*
 -lấy số hàng chục nghìn : n /10.000
 -lấy số hàng  nghìn : n/ 1000 % 10
 -lấy số hàng trăm : n / 100 % 10
 -lấy số hàng chục : n % 100 / 10
 -lấy số hàng đơn vị : n % 10

 => tổng / 5
*/

// bước 3: giá trị trung bình = ?

var number = 12345 ;

var chucNgan = Math.floor((number / 10000)); // 1
var ngan = Math.floor ((number / 1000 % 10)); // 2
var tram = Math.floor (number / 100 % 10); // 3
var chuc = Math.floor (number % 100 / 10); // 4
var donVi = Math.floor (number % 10) // 5

var trungBinh = ((chucNgan + ngan + tram + chuc + donVi) / 5 );

console.log (trungBinh); //3





// Bài 3 : quy đổi tiền

// bước 1: giả sử số tiền cần đổi là 10$ (23.500/$)

// bước 2: tiền = 23.500 * số tiền cần đổi

// bước 3: tiền = ?

var tienDo = 10;
var tienViet = 23500;
var doiTien = tienDo * tienViet ;
console.log (doiTien); //235000






//Bài 4 : tình Chu vi , diện tích

// bước 1 : giả sử
// -chiều dài = 10 
// -chiều rông = 5

//bước 2:
// -diện tích = dài * rộng
// -chu vi = (dài + rong)*2

//bước 3 : kết quả = ?

var a = 10;
var b =5;
var dienTich = a * b ;
var chuVi = (a + b) * 2 ;

console.log (dienTich); //50
console.log (chuVi); //30




/* Bài 5: tính tổng 2 ký số

bước 1 : giả sử n = 21

bước 2 : 
 -lấy số hàng chục : n / 10
 -lấy số hàng đơn vị : n % 10

bước 3 : kết quả = ?

*/

var number = 21;
var tong = Math.floor((number / 10) + (number % 10)) ;
console.log(tong) // 3


