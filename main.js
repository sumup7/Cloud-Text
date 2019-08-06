'use strict';
var element = document.getElementById('target'); // 移動させたい位置の要素を取得
var rect = element.getBoundingClientRect();
var position = rect.top;    // 一番上からの位置を取得

let photo = 1;

  document.getElementById('in1').onclick = () => {
  // ここに#buttonをクリックしたら発生させる処理を記述する
  document.getElementById("img1").className="on";
  document.getElementById("img2").className="off";
  document.getElementById("img3").className="off";
  document.getElementById("img4").className="off";
  document.getElementById("img5").className="off";
  document.getElementById("img5").className="off";
  document.getElementById("img6").className="off";
  document.getElementById("img7").className="off";
  document.getElementById("img8").className="off";
  photo=1;
};function scrollToTop() {
  scrollTo(0, position);
 }
document.getElementById('in2').onclick = () => {
  // ここに#buttonをクリックしたら発生させる処理を記述する
  document.getElementById("img1").className="off";
  document.getElementById("img2").className="on";
  document.getElementById("img3").className="off";
  document.getElementById("img4").className="off";
  document.getElementById("img5").className="off";
  document.getElementById("img6").className="off";
  document.getElementById("img7").className="off";
  document.getElementById("img8").className="off";
  photo=2;
};function scrollToTop() {
  scrollTo(0, position);
 };

document.getElementById('in3').onclick = () => {
  // ここに#buttonをクリックしたら発生させる処理を記述する
  document.getElementById("img1").className="off";
  document.getElementById("img2").className="off";
  document.getElementById("img3").className="on";
  document.getElementById("img4").className="off";
  document.getElementById("img5").className="off";  
  document.getElementById("img6").className="off";
  document.getElementById("img7").className="off";
  document.getElementById("img8").className="off";
  photo=3;
};function scrollToTop() {
  scrollTo(0, position);
 }

document.getElementById('in4').onclick = () => {
  // ここに#buttonをクリックしたら発生させる処理を記述する
  document.getElementById("img1").className="off";
  document.getElementById("img2").className="off";
  document.getElementById("img3").className="off";
  document.getElementById("img4").className="on";
  document.getElementById("img5").className="off";
  document.getElementById("img6").className="off";
  document.getElementById("img7").className="off";
  document.getElementById("img8").className="off";
  photo=4;
};function scrollToTop() {
  scrollTo(0, position);
 }

document.getElementById('message1').onclick = () => {
  // ここに#buttonをクリックしたら発生させる処理を記述する
  document.getElementById("text").innerText = "吾輩は猫である。名前はまだない「吾輩は猫である」夏目漱石";
scrollToTop() 
{scrollTo(0, 0);}
};
 

document.getElementById('message2').onclick = () => {
  // ここに#buttonをクリックしたら発生させる処理を記述する
  document.getElementById("text").innerText = "　「……お兄さま。お兄さま。お兄さまお兄さまお兄さまお兄さまお兄さま。……モウ一度……今のお声を……聞かせてエーーッ…………」「ドグラ・マグラ」夢野久作";
  scrollToTop() 
  {scrollTo(0, 0);}
};
 

document.getElementById('message3').onclick = () => {
  // ここに#buttonをクリックしたら発生させる処理を記述する
  document.getElementById("text").innerText = "あさ、眼をさますときの気持は、面白い。「女生徒」太宰治";
  scrollToTop() 
  {scrollTo(0, 0);}
   };

document.getElementById('message4').onclick = () => {
  // ここに#buttonをクリックしたら発生させる処理を記述する
  document.getElementById("text").innerText = "「けれどもほんとうのさいわいは一体何だろう。」「銀河鉄道の夜」宮沢賢治";
  scrollToTop() 
  {scrollTo(0, 0);}
};
 

document.getElementById('processing').onclick = () => {
  // ここに#buttonをクリックしたら発生させる処理を記述する
if(photo===4){ document.getElementById("img1").className="off";  
document.getElementById("img2").className="off";
document.getElementById("img3").className="off";
document.getElementById("img4").className="off";
document.getElementById("img5").className="off";
document.getElementById("img6").className="off";
document.getElementById("img7").className="off";
document.getElementById("img8").className="on";
scrollToTop() 
{scrollTo(0, 0);}}
else if(photo===3){ document.getElementById("img1").className="off";  
document.getElementById("img2").className="off";
document.getElementById("img3").className="off";
document.getElementById("img4").className="off";
document.getElementById("img5").className="off";
document.getElementById("img6").className="off";
document.getElementById("img7").className="on";
document.getElementById("img8").className="off";  
scrollToTop() 
{scrollTo(0, 0);}}
else if(photo===2){document.getElementById("img1").className="off";  
document.getElementById("img2").className="off";
document.getElementById("img3").className="off";
document.getElementById("img4").className="off";
document.getElementById("img5").className="off";
document.getElementById("img6").className="on";
document.getElementById("img7").className="off";
document.getElementById("img8").className="off";
scrollToTop() 
{scrollTo(0, 0);}}
else if(photo===1){document.getElementById("img1").className="off";  
document.getElementById("img2").className="off";
document.getElementById("img3").className="off";
document.getElementById("img4").className="off";
document.getElementById("img5").className="on";
document.getElementById("img6").className="off";
document.getElementById("img7").className="off";
document.getElementById("img8").className="off";
}scrollToTop() 
{scrollTo(0, 0);}};


document.getElementById('reset').onclick = () => {
  // ここに#buttonをクリックしたら発生させる処理を記述する
if(photo===4){ document.getElementById("img1").className="off";  
document.getElementById("img2").className="off";
document.getElementById("img3").className="off";
document.getElementById("img4").className="on";
document.getElementById("img5").className="off";
document.getElementById("img6").className="off";
document.getElementById("img7").className="off";
document.getElementById("img8").className="off";
scrollToTop() 
{scrollTo(0, 0);}}
else if(photo===3){ document.getElementById("img1").className="off";  
document.getElementById("img2").className="off";
document.getElementById("img3").className="on";
document.getElementById("img4").className="off";
document.getElementById("img5").className="off";
document.getElementById("img6").className="off";
document.getElementById("img7").className="off";
document.getElementById("img8").className="off";
scrollToTop() 
{scrollTo(0, 0);}}
else if(photo===2){document.getElementById("img1").className="off";  
document.getElementById("img2").className="on";
document.getElementById("img3").className="off";
document.getElementById("img4").className="off";
document.getElementById("img5").className="off";
document.getElementById("img6").className="off";
document.getElementById("img7").className="off";
document.getElementById("img8").className="off";
scrollToTop() 
{scrollTo(0, 0);}}
else if(photo===1){document.getElementById("img1").className="on";  
document.getElementById("img2").className="off";
document.getElementById("img3").className="off";
document.getElementById("img4").className="off";
document.getElementById("img5").className="off";
document.getElementById("img6").className="off";
document.getElementById("img7").className="off";
document.getElementById("img8").className="off";
scrollToTop() 
{scrollTo(0, 0);}}};
