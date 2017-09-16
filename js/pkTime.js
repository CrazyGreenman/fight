(function($,root){

     function pkTime (data) {
    //数据接收太慢，导致第一次undefined
          if (data[1][root.dataArray[3]] === "oo"){
            $('.page3-time').text("OO")
          }else{
   
       var  count = data[1][root.dataArray[3]] ;
        //  count = 59;
          
         var timer = setInterval (function(){
         $('.page3-time').text(count)
          count--;
          if(count === -1){
             //执行游戏结束函数
             clearInterval(timer);
          }
             
         },1000);
          }
     
     }

   root.pkTime = pkTime ;
}(window.$,window.page1 ||(window.page1={})))