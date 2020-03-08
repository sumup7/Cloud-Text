'use strict';
let photo;
let text = document.getElementById("text");
const message1Button = document.getElementById('message1');
const message2Button = document.getElementById('message2');
const message3Button = document.getElementById('message3');
const message4Button = document.getElementById('message4');
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");

const message = [
  "吾輩は猫である。名前はまだない「吾輩は猫である」夏目漱石",
  "　「……お兄さま。お兄さま。お兄さまお兄さまお兄さまお兄さまお兄さま。……モウ一度……今のお声を……聞かせてエーーッ…………」「ドグラ・マグラ」夢野久作",
  "あさ、眼をさますときの気持は、面白い。「女生徒」太宰治",
  "「けれどもほんとうのさいわいは一体何だろう。」「銀河鉄道の夜」宮沢賢治"
];

window.onload = function(){
  text.innerText = message[0];
}
const imgs = [].slice.call(document.querySelectorAll("#main-wrapper>a>img"));
console.log(imgs);
document.querySelector(".sub-wrapper").addEventListener("click", e => {
    if(e.target.type != "image"){
      return;}
    for(let img of imgs){
      if(e.target.name === img.id){
        img.className = "on";
        if(img.id === 'img4'){
          photo = 4;
        }else if(img.id === 'img3'){
          photo = 3;
        }else if(img.id === 'img2'){
          photo = 2;
        }else if(img.id === 'img1'){
          photo = 1;
        }
      }else {img.className = "off";
    }}
    });

message1Button.onclick = () => {
  // ここに#buttonをクリックしたら発生させる処理を記述する
  text.innerText = message[0];
};
 
message2Button.onclick = () => {
  // ここに#buttonをクリックしたら発生させる処理を記述する
  text.innerText = message[1];
};
 
message3Button.onclick = () => {
  // ここに#buttonをクリックしたら発生させる処理を記述する
  text.innerText = message[2];
   };

message4Button.onclick = () => {
  // ここに#buttonをクリックしたら発生させる処理を記述する
 text.innerText = message[3];
};
 
document.getElementById("processing").onclick = () =>{
    if(photo===4){img8.className = "on";
    img4.className = "off";
      }else if(photo===3){img7.className="on";
      img3.className = "off"; 
      }else if(photo===2){img6.className= "on";
      img2.className = "off";
      }else if(photo===1){img5.className= "on";
      img1.className = "off";  
    }
  };

document.getElementById('reset').onclick = () => {
  // ここに#buttonをクリックしたら発生させる処理を記述する
if(photo===4){ 
img4.className="on";
img8.className="off";}
else if(photo===3){ 
img3.className="on";
img7.className="off";
}
else if(photo===2){  
img2.className="on";
img6.className="off";
}
else if(photo===1){img1.className="on";  
img5.className="off";
}};
