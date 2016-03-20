var clock = document.querySelector("#clock-1");
var ctx = clock.getContext("2d");
//钟表
var clock = function(){
   ctx.clearRect(0,0,300,300);//清楚画布
   ctx.save();//保存一个干净的画布
   ctx.translate(150,150);//移动画布圆点到中心
   ctx.rotate(-Math.PI/2);
   var now = new Date();
   var sec = now.getSeconds();
   var min = now.getMinutes();
   var hr = now.getHours();
   // console.log(hr);

   //外边框
   ctx.save();
   ctx.strokeStyle = "#9e9e9e";
   ctx.lineWidth = 2;
   ctx.beginPath();
   ctx.arc(0,0,100,0,Math.PI*2);
   ctx.stroke();
   ctx.restore();

   //hour marks
   /*ctx.save();
   for(var i = 0;i<12;i++){
      ctx.beginPath();
      ctx.strokeStyle = "green";
      ctx.lineCap = "round";
      ctx.rotate(Math.PI/6);
      ctx.lineWidth = 4;
      ctx.moveTo(90,0);
      ctx.lineTo(80,0);
      ctx.stroke();
   }
   ctx.restore();*/

   //Minute marks
   /*ctx.save();
   ctx.lineWidth = 2;
   for(var i = 0;i<60;i++){
      if(i%5 != 0){
         ctx.beginPath();
         ctx.strokeStyle = "blue";
         ctx.lineCap = "round";
         ctx.moveTo(70,0);
         ctx.lineTo(90,0);
         ctx.stroke();
      }
      ctx.rotate(Math.PI/30);
   }
   ctx.restore();*/

   // ctx.fillStyle = "black";

   //write hours(时)
   ctx.save();
   var s = 360*((hr*3600+min*60+sec)/(3600*12))/180*Math.PI;
   ctx.rotate( s );
   ctx.lineWidth = 6;
   ctx.strokeStyle = "black";
   ctx.lineCap = 'round';
   ctx.beginPath();
   ctx.moveTo(-10,0);
   ctx.lineTo(50,0);

   ctx.stroke();
   ctx.restore();

   //write minutes(分)
   ctx.save();
   var f = 360*((min*60+sec)/3600)/180*Math.PI;
   ctx.rotate( f );
   ctx.lineWidth = 4;
   ctx.strokeStyle = "black";
   ctx.lineCap = "round";
   ctx.beginPath();
   ctx.moveTo(-20,0);
   ctx.lineTo(70,0);

   ctx.stroke();
   ctx.restore();

   //write seconds(秒)
   ctx.save();
   ctx.rotate(Math.PI/30*sec);
   ctx.lineWidth = 3;
   ctx.strokeStyle = "red";
   ctx.beginPath();
   ctx.lineCap = "round";
   ctx.moveTo(-23,0);
   ctx.lineTo(90,0);

   ctx.stroke();
   ctx.restore();

   //dot(点)
   ctx.save();
   ctx.beginPath();
   ctx.arc(0,0,10,0,Math.PI*2);
   ctx.fillStyle = "red";
   ctx.fill();
   ctx.restore();

   ctx.restore();

   requestAnimationFrame(clock);
}
clock();

requestAnimationFrame(clock);


//点击下载
/*document.onllick = function(){
   location.href = (clock.toDataURL().replace("data:image/png","data:stream/octet"));
}*/

/*var link = document.createElement('a');
link.innerHTML = 'download image';

link.addEventListener('click', function(ev) {
    link.href = clock.toDataURL();
    link.download = "mypainting.png";
}, false);

document.body.appendChild(link);*/