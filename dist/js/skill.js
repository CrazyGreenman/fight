(function($ ,root ){
    // if(root.key1 === 0) return;

    function skillBuild (data) {
       console.log(data)
        root.person1Skill = data[root.dataArray[0]];
        root.person2Skill = data[root.dataArray[1]];
        
        var canvas = document.getElementsByTagName('canvas')[0];
        var cxt = canvas.getContext('2d');
       
    //    window.onload =(function(){

    
//          if (root.person1Skill){
//  //人物在左侧
// //  function left() {
//         var img = new Image ();
//         var person1Offset = [120 ,210 ];
//         // var person2Offset = [760 ,210 ];
//         var personMove = [10 ,-10 ,10 ];
//         var key = 1;
//         //时间间隔
//         var cell = 30 ;
//         var iSpeedx = 0 ; 
//         var  a = 0;
//    //移动技能函数
//    function gxMove (url ,offset , a ){
//             iSpeedx = a;
//             cxt.clearRect(0,0,999,330);
//             offset[0] = offset[0] + a ; 
//             img.src = url;
//             img.onload = function () {
//             cxt.drawImage(img,offset[0] ,offset[1] ,120 ,120 );
//               //边界判定
//                if( offset[0] <= 0){
//                    offset[0] = 0
//                 }else if ( offset[0] >= 879){
//                            offset[0] = 879;  
//                 }  
//            }
//         }
// //技能区
// //技能j
// function j (offset){
//     cxt.beginPath();
//     cxt.drawImage(img,offset[0]+120,offset[1]+40,150,30);
// }
// //技能k
// function k (offset){
//     // cxt.beginPath();
//     var x = 10 ; var y = 10;
//     var timer = setInterval(function(){
//         cxt.beginPath();
//         cxt.clearRect(offset[0] + 120 + y , offset[1]+50,20 ,20 )
//         cxt.drawImage(img,offset[0]+ 120 + x,offset[1]+50,20,20)
//            y = x ;
//            x += 30;
//            if(x > 300){
//            clearInterval(timer)
//            }      
//      },50)
//  }
// //技能o
//  function o (url,offset){
//     var a = 1 ;
//     var timer = setInterval(function(){
//       a++;
//      console.log(a)
//      if(a === 2){
//      cxt.clearRect(0,0,999,330)
//      img.src = root.person1Skill.aa;
//      cxt.drawImage(img,offset[0],offset[1],120,120)
//     }else if(a === 3 ){
//      cxt.clearRect(0,0,999,330)
//      img.src = root.person1Skill.bb;
//      cxt.drawImage(img,offset[0]+120,offset[1],120,120)
//     }else if(a === 4 ){
//      cxt.clearRect(0,0,999,330)
//      img.src = root.person1Skill.cc;
//      cxt.drawImage(img,offset[0]+240,offset[1],120,120)
//     }else if(a === 5 ){
//      cxt.clearRect(0,0,999,330)
//      img.src = root.person1Skill.dd;
//      cxt.drawImage(img,offset[0]+360,offset[1],120,120)
//      }else if(a === 8){
//     clearInterval(timer)
// }else{
//         xMove(root.person1Skill.figure,person1Offset,0)  
// }
//     },200)
//  }
//         //前进后退函数
//             function xMove (url ,offset , a ){
//             iSpeedx = a;
//             cxt.clearRect(0,0,999,330);  
//             offset[0] = offset[0] + a ; 
//             img.src = url;
//             img.onload = function () {
//             cxt.drawImage(img,offset[0] ,offset[1] ,120 ,120 );
//        //边界判定
//                if( offset[0] <= 0){
//                    offset[0] = 0
//                 }else if ( offset[0] >= 879){
//                            offset[0] = 879;  
//                 }        
//             }
//         }
// //加速移动
// function superMove (url ,offset , a ){
//     // var disMoveX = 10 ;
//         //   var countX = 0 
//             iSpeedx = a ;
//             cxt.clearRect(0,0, 999 ,330);
//             offset[0] = offset[0] + a ;  
//             img.src= url;
//             img.onload = function(){
//             cxt.drawImage(img ,offset[0] ,offset[1] ,120 ,120)
//             //边界判定
//              if( offset[0] <= 0){
//                    offset[0] = 0
//                 }else if ( offset[0] >= 879){
//                            offset[0] = 879;  
//                    }
//           }
//         }
// //跳函数
// function actBuildJum(url ,offset ,move  ) {
//     if(iSpeedx > 0 ){
//             var topJum = move;
//             img.src = url ;
//             var count = 0 ;
//             img.onload = function (){
//             var timer = setInterval(function (){
//                cxt.clearRect(0,0, 999 ,330);
//                   offset[1] = offset[1] - topJum ;
//                   offset[0] += 7 ;
//                 cxt.drawImage(img ,offset[0] ,offset[1] ,120 ,120 );
//                 if(offset[0] <= 0 ){
//                    offset[0] = 0 ;
//                  }else if(offset[0] >= 879 ){
//                    offset[0] =879 ;}
//                 console.log(cxt.drawImage)
//                 count++;
//                 if(count === 20){
//                     topJum = -topJum;
//                 }
//                 if(count === 40){
//                     clearInterval(timer)
//                     key = 1 ;
//                 }       
//             },40)
//      }
//     }else if(iSpeedx === 0 ){
//          var topJum = move;
//             img.src = url;
//             var count = 0;
//             img.onload = function(){
//             var timer = setInterval(function(){            
//                cxt.clearRect(0,0, 999 ,330);
//                 offset[1] -= topJum;
//                 offset[0] += 0.1;
//                 cxt.drawImage(img,offset[0],offset[1],120,120);
//                  if(offset[0] <= 0){
//                    offset[0] = 0 ;
//                  }else if(offset[0]>=879){
//                    offset[0]=879;}
//                 console.log(cxt.drawImage)
//                 count++;
//                 if(count === 20){
//                     topJum = -topJum;
//                 }
//                 if(count === 40){
//                     clearInterval(timer)
//                     key = 1
//                 }
//             },40)      
//         }
//         }else {
//          var topJum = move;
//             img.src = url;
//             var count = 0;
//             img.onload = function(){
//             var timer = setInterval(function(){            
//                cxt.clearRect(0,0, 999 ,330);
//                 offset[1] -= topJum;
//                 offset[0] -= 7; 
//                 cxt.drawImage(img,offset[0],offset[1],120,120);
//                  if(offset[0]<=0){             
//                    offset[0]= 0 ;
//                  }else if(offset[0]>=879){      
//                    offset[0]=879;}
//                 console.log(cxt.drawImage)
//                 count++;
//                 if(count === 20){
//                     topJum = -topJum;
//                 }
//                 if(count === 40){
//                  clearInterval(timer)
//                     key = 1  
//                 }
//             },40)      
//         }     
//       }
//     }
 
//  xMove(root.person1Skill.figure, person1Offset,0)
//  document.onkeydown = function(e){
//       switch(e.key){
//         case 'd' :   
//         xMove(root.person1Skill.figure,person1Offset,8)
//         setTimeout(function(){
//         xMove(root.person1Skill.adv, person1Offset,8);
//         },cell)      
//         break;

//         case 'a' :   
//         xMove(root.person1Skill.figure,person1Offset,-8);
//         setTimeout(function(){
//         xMove(root.person1Skill.adv, person1Offset,-8);
//         },cell)
//         break;

//         case 'w' : 
//         if(key === 0) return;
//         key = 0;       
//         xMove(root.person1Skill.adv,person1Offset,0);
//         setTimeout(function(){
//         actBuildJum(root.person1Skill.topJump, person1Offset,10);
//         },cell) 
//         break;

//         case's':
//         xMove(root.person1Skill.figure,person1Offset,0);
//         setTimeout(function(){
//         xMove(root.person1Skill.down, person1Offset,0);
//         },cell)
//         break;

//         case'j':
//         xMove(root.person1Skill.figure,person1Offset,0);
//         setTimeout(function(){
//         xMove(root.person1Skill.fist, person1Offset,0);
//         j(person1Offset)
//        },cell)  
//         break;
    
//         case'k':
//         xMove(root.person1Skill.figure,person1Offset,0);
//         setTimeout(function(){
//         xMove(root.person1Skill.leg, person1Offset,0);
//         },cell) 
//         k(person1Offset) 
//         break;
    
//         case 'l' : 
//         if(key === 0 )  return ;
//         key = 0 ;
//         setTimeout(function(){
//         superMove(root.person1Skill.moveA, person1Offset, 100);
//         },cell)
//         key = 1 ;
//         break;

//         case ';' : 
//         if(key === 0 )  return ;
//         key = 0 ; 
//         setTimeout(function(){
//         superMove(root.person1Skill.adv, person1Offset, -100);
//         },cell)
//         key = 1 ;
//         break;

//         case 'o' : 
//         if(key === 0 )  return ;
//         key = 0 ; 
//         setTimeout(function(){
//         superMove(root.person1Skill.adv, person1Offset, 0);
//         },cell)
//         o(root.person1Skill,person1Offset)
//         key = 1 ;
//         break;
//       }
//      }
//       }else if(root.person2Skill){
    // }
        //  }
    // }

// //人物在右侧
// function  right () {
    
    // function skillBuild () {
       
        
    //     var canvas = document.getElementsByTagName('canvas')[0];
    //     var cxt = canvas.getContext('2d');

         var img = new Image ();
//         // var person1Offset = [120 ,210 ];
        var person2Offset = [760 ,210 ];
        var personMove = [10 ,-10 ,10 ];
        var key = 1;
        //时间间隔
        var cell = 30 ;
        var iSpeedx = 0 ; 
        var  a = 0;
   //移动技能函数
   function gxMove (url ,offset , a ){
            iSpeedx = a;
            cxt.clearRect(0,0,999,330);
            offset[0] = offset[0] + a ; 
            img.src = url;
            img.onload = function () {
            cxt.drawImage(img,offset[0] ,offset[1] ,120 ,120 );
              //边界判定
               if( offset[0] <= 0){
                   offset[0] = 0
                }else if ( offset[0] >= 879){
                           offset[0] = 879;  
                }  
           }
        }


function q1 (offset){
    cxt.beginPath();
    cxt.drawImage(img,offset[0]-120,offset[1]+40,150,30);
}
//技能
function q2 (offset){
    // cxt.beginPath();
    var x = 10 ; var y = 10;
    var timer = setInterval(function(){
        cxt.beginPath();
        cxt.clearRect(offset[0] - y , offset[1]+50,20 ,20 )
        cxt.drawImage(img,offset[0] - x,offset[1]+50,20,20)
           y = x ;
           x += 30;
           if(x > 300){
           clearInterval(timer)
           }      
     },50)
 }
//技能
 function q3 (url,offset){
    var a = 1 ;
    var timer = setInterval(function(){
      a++;
     console.log(a)
     if(a === 2){
     cxt.clearRect(0,0,999,330)
     img.src = root.person1Skill.aa;
     cxt.drawImage(img,offset[0],offset[1],120,120)
    }else if(a === 3 ){
     cxt.clearRect(0,0,999,330)
     img.src = root.person1Skill.bb;
     cxt.drawImage(img,offset[0]-120,offset[1],120,120)
    }else if(a === 4 ){
     cxt.clearRect(0,0,999,330)
     img.src = root.person1Skill.cc;
     cxt.drawImage(img,offset[0]-240,offset[1],120,120)
    }else if(a === 5 ){
     cxt.clearRect(0,0,999,330)
     img.src = root.person1Skill.dd;
     cxt.drawImage(img,offset[0]-360,offset[1],120,120)
     }else if(a === 8){
    clearInterval(timer)
}else{
        xMove(root.person2Skill.figure,person2Offset,0)  
}
    },200)
 }
//         //前进后退函数
            function xMove (url ,offset , a ){
            iSpeedx = a;
            cxt.clearRect(0,0,999,330);  
            offset[0] = offset[0] + a ; 
            img.src = url;
            img.onload = function () {
            cxt.drawImage(img,offset[0] ,offset[1] ,120 ,120 );
       //边界判定
               if( offset[0] <= 0){
                   offset[0] = 0
                }else if ( offset[0] >= 879){
                           offset[0] = 879;  
                }        
            }
        }
//加速移动
function superMove (url ,offset , a ){
    // var disMoveX = 10 ;
        //   var countX = 0 
            iSpeedx = a ;
            cxt.clearRect(0,0, 999 ,330);
            offset[0] = offset[0] + a ;  
            img.src= url;
            img.onload = function(){
            cxt.drawImage(img ,offset[0] ,offset[1] ,120 ,120)
            //边界判定
             if( offset[0] <= 0){
                   offset[0] = 0
                }else if ( offset[0] >= 879){
                           offset[0] = 879;  
                   }
          }
        }
//跳函数
function actBuildJum(url ,offset ,move  ) {
    if(iSpeedx > 0 ){
            var topJum = move;
            img.src = url ;
            var count = 0 ;
            img.onload = function (){
            var timer = setInterval(function (){
               cxt.clearRect(0,0, 999 ,330);
                  offset[1] = offset[1] - topJum ;
                  offset[0] += 7 ;
                cxt.drawImage(img ,offset[0] ,offset[1] ,120 ,120 );
                if(offset[0] <= 0 ){
                   offset[0] = 0 ;
                 }else if(offset[0] >= 879 ){
                   offset[0] =879 ;}
                console.log(cxt.drawImage)
                count++;
                if(count === 20){
                    topJum = -topJum;
                }
                if(count === 40){
                    clearInterval(timer)
                    key = 1 ;
                }       
            },40)
     }
    }else if(iSpeedx === 0 ){
         var topJum = move;
            img.src = url;
            var count = 0;
            img.onload = function(){
            var timer = setInterval(function(){            
               cxt.clearRect(0,0, 999 ,330);
                offset[1] -= topJum;
                offset[0] += 0.1;
                cxt.drawImage(img,offset[0],offset[1],120,120);
                 if(offset[0] <= 0){
                   offset[0] = 0 ;
                 }else if(offset[0]>=879){
                   offset[0]=879;}
                console.log(cxt.drawImage)
                count++;
                if(count === 20){
                    topJum = -topJum;
                }
                if(count === 40){
                    clearInterval(timer)
                    key = 1
                }
            },40)      
        }
        }else {
         var topJum = move;
            img.src = url;
            var count = 0;
            img.onload = function(){
            var timer = setInterval(function(){            
               cxt.clearRect(0,0, 999 ,330);
                offset[1] -= topJum;
                offset[0] -= 7; 
                cxt.drawImage(img,offset[0],offset[1],120,120);
                 if(offset[0]<=0){             
                   offset[0]= 0 ;
                 }else if(offset[0]>=879){      
                   offset[0]=879;}
                console.log(cxt.drawImage)
                count++;
                if(count === 20){
                    topJum = -topJum;
                }
                if(count === 40){
                 clearInterval(timer)
                    key = 1  
                }
            },40)      
        }     
      }
    }
 
 xMove(root.person2Skill.figure, person2Offset,0)
 document.onkeydown = function(e){
    //   switch(e.key){
        switch(e.keyCode){
        case 39 :   
        xMove(root.person2Skill.figure,person2Offset,8)
        setTimeout(function(){
        xMove(root.person2Skill.adv, person2Offset,8);
        },cell)      
        break;

        case 37 :   
        xMove(root.person2Skill.figure,person2Offset,-8);
        setTimeout(function(){
        xMove(root.person2Skill.adv, person2Offset,-8);
        },cell)
        break;

        case 38 : 
        if(key === 0) return;
        key = 0;       
        xMove(root.person2Skill.adv,person2Offset,0);
        setTimeout(function(){
        actBuildJum(root.person2Skill.topJump, person2Offset,10);
        },cell) 
        break;

        case 40:
        xMove(root.person2Skill.figure,person2Offset,0);
        setTimeout(function(){
        xMove(root.person2Skill.down, person2Offset,0);
    },cell)
        };
        // break;
         
       switch(e.key){
        case'1':
        xMove(root.person2Skill.figure,person2Offset,0);
        setTimeout(function(){
        xMove(root.person2Skill.fist, person2Offset,0);
        q1(person2Offset)
       },cell)  
        break;
    
        case'2':
        xMove(root.person2Skill.figure,person2Offset,0);
        setTimeout(function(){
        xMove(root.person2Skill.leg, person2Offset,0);
        },cell) 
    q2(person2Offset) 
        break;
    
        case '3' : 
        if(key === 0 )  return ;
        key = 0 ;
        setTimeout(function(){
        superMove(root.person2Skill.moveA, person2Offset, 100);
        },cell)
        key = 1 ;
        break;

        case '6' : 
        if(key === 0 )  return ;
        key = 0 ; 
        setTimeout(function(){
        superMove(root.person2Skill.adv, person2Offset, -100);
        },cell)
        key = 1 ;
        break;

        case '5' : 
        if(key === 0 )  return ;
        key = 0 ; 
        setTimeout(function(){
        superMove(root.person2Skill.adv, person2Offset, 0);
        },cell)
        q3(root.person2Skill,person2Offset)
        key = 1 ;
        break;
      }
     }

// }
    //    })

    }
    root.skillBuild = skillBuild
})(window.$,window.page1||(window.page1={}))