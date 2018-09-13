$(function(){

var svg = Pablo('#ground').svg({ //create svg with height and width
          width: 1100,
          height: 700
      });

var tankX=550;
var tankY=600;

var body;
var sideLeft;
var sideRight;
var hood;
var gun;

//part2
var fire=svg.rect({
 x:-1000,
 y:-1000,
 width:4, height:4,
 fill: '#c0392b',
});
var direction="up";
var fireFlag=1;

  tankBuilder(tankX,tankY,"up");
  //tankBuilder(100,100,"up");
//  tankBuilder(200,100,"down");
  //tankBuilder(300,100,"left");
  //tankBuilder(400,100,"right");

  $(document).keydown(function(event){
  //37 left  - 38  up - 39  right - 40  down

     var code =  event.which;


     //console.log(code);
     if(code==37){

       body.remove();
       sideLeft.remove();
       sideRight.remove();
       hood.remove();
       gun.remove();
       tankX=tankX-3;
       tankBuilder(tankX,tankY,"left");
       //part2
       direction="left";

     }
     if(code==38){

       body.remove();
       sideLeft.remove();
       sideRight.remove();
       hood.remove();
       gun.remove();
       tankY=tankY-3;
       tankBuilder(tankX,tankY,"up");
       //part2
       direction="up";
     }
     if(code==39){

       body.remove();
       sideLeft.remove();
       sideRight.remove();
       hood.remove();
       gun.remove();
       tankX=tankX+3;
       tankBuilder(tankX,tankY,"right");
       //part2
       direction="right";
     }
     if(code==40){

       body.remove();
       sideLeft.remove();
       sideRight.remove();
       hood.remove();
       gun.remove();
       tankY=tankY+3;
       tankBuilder(tankX,tankY,"down");
       //part2
       direction="down";
     }

//part2
//32-space
     if(code==32){

       console.log(direction,tankX,tankY);

       if(fireFlag==1){

         fireBuilder(direction,tankX,tankY);
         fireFlag=0;
       }



     }


  });


function tankBuilder(x,y,direction){

if(direction=="up"){

  body=svg.rect({
    x:x-20,
    y:y-20,
    width:40, height:40,
    fill: '#6ab04c',
  });

  sideLeft=svg.rect({
    x:x-28,
    y:y-25,
    width:8, height:50,
    fill: '#2c3e50',
  });


  sideRight=svg.rect({
    x:x+20,
    y:y-25,
    width:8, height:50,
    fill: '#2c3e50',
  });

  hood=svg.circle({
    cx: x,
    cy: y,
    r: 10,
    fill:  '#2c3e50'
   });

   gun=svg.rect({
     x:x-2,
     y:y-30,
     width:4, height:25,
     fill: '#2c3e50',
   });
}

if(direction=="down"){
   body=svg.rect({
    x:x-20,
    y:y-20,
    width:40, height:40,
    fill: '#6ab04c',
  });

  sideLeft=svg.rect({
    x:x-28,
    y:y-25,
    width:8, height:50,
    fill: '#2c3e50',
  });


  sideRight=svg.rect({
    x:x+20,
    y:y-25,
    width:8, height:50,
    fill: '#2c3e50',
  });

   hood=svg.circle({
    cx: x,
    cy: y,
    r: 10,
    fill:  '#2c3e50'
   });

    gun=svg.rect({
     x:x-2,
     y:y+5,
     width:4, height:25,
     fill: '#2c3e50',
   });
}
if(direction=="left"){

  body=svg.rect({
   x:x-20,
   y:y-20,
   width:40, height:40,
   fill: '#6ab04c',
 });

 sideLeft=svg.rect({
   x:x-25,
   y:y-28,
   width:50, height:8,
   fill: '#2c3e50',
 });


 sideRight=svg.rect({
   x:x-25,
   y:y+20,
   width:50, height:8,
   fill: '#2c3e50',
 });

  hood=svg.circle({
   cx: x,
   cy: y,
   r: 10,
   fill:  '#2c3e50'
  });

   gun=svg.rect({
    x:x-26,
    y:y-2,
    width:25, height:4,
    fill: '#2c3e50',
  });
}
if(direction=="right"){

  body=svg.rect({
   x:x-20,
   y:y-20,
   width:40, height:40,
   fill: '#6ab04c',
 });

 sideLeft=svg.rect({
   x:x-25,
   y:y-28,
   width:50, height:8,
   fill: '#2c3e50',
 });


 sideRight=svg.rect({
   x:x-25,
   y:y+20,
   width:50, height:8,
   fill: '#2c3e50',
 });

  hood=svg.circle({
   cx: x,
   cy: y,
   r: 10,
   fill:  '#2c3e50'
  });

   gun=svg.rect({
    x:x,
    y:y-2,
    width:25, height:4,
    fill: '#2c3e50',
  });

}

}


function fireBuilder(direction,x,y){

  if(direction=="up"){

    var fireinterval=setInterval(function(){

      fire.remove();
      fire=svg.rect({
       x:x-2,
       y:y,
       width:4, height:10,
       fill: '#c0392b',
     });

     y=y-5;//the direction of advance is set.

     if(y<=0){
       clearInterval(fireinterval);
       fire.remove();
       fireFlag=1;
     }
   }, 10);

  }
  if(direction=="down"){

    var fireinterval=setInterval(function(){

      fire.remove();
      fire=svg.rect({
       x:x-2,
       y:y,
       width:4, height:10,
       fill: '#c0392b',
     });

     y=y+5;//the direction of advance is set.

     if(y>=700){
       clearInterval(fireinterval);
       fire.remove();
       fireFlag=1;
     }
   }, 10);

  }
  if(direction=="left"){

    var fireinterval=setInterval(function(){

      fire.remove();
      fire=svg.rect({
       x:x,
       y:y-2,
       width:10, height:4,
       fill: '#c0392b',
     });

     x=x-5;

     if(x<=0){
       clearInterval(fireinterval);
       fire.remove();
       fireFlag=1;
     }
   }, 10);

  }
  if(direction=="right"){

    var fireinterval=setInterval(function(){

      fire.remove();
      fire=svg.rect({
       x:x,
       y:y-2,
       width:10, height:4,
       fill: '#c0392b',
     });

     x=x+5;

     if(x>=1100){
       clearInterval(fireinterval);
       fire.remove();
       fireFlag=1;
     }
   }, 10);

  }


}

});
