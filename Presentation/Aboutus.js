const arrImg = [
    "img/gift.jpg",
    "img/happy fam.jpeg",
    "img/fam img.jpg"
];


let n=0
function slideshow(i) {
    n += i
    //viết điều kiện kiểm tra xem n có lớn hơn độ dài của mảng k
if(n>=arrImg.length) {n=0}
if (n<0) {n=arrImg.length - 1}
// liên kết vao bức ảnh
let img = document.querySelector("img");
// thay đổi đường link của ảnh
img.src = arrImg[n]
// thay đổi index của mảng | n= n+1
}
// deadline: Hoàn thiện trang about us và phần slide