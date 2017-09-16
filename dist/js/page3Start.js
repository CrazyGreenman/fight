(function($,root){
            
        function page3Start (){
            // var oDiv = document.getElementsByClassName('page3Start')[0];
   
        //   $('page3-wrapper').css({opacity:0.5});
          var count = 3;
          var timer = setInterval (function(){
        //    $('page3Start').text(count)
        $('.page3Start').text(count) 
        //   oDiv.innerText = count;

           count--;
           if(count === -1){
           $('.page3Start').text('GO') 
           root.ajax('./mock/data.json',root.pkTime);
           window.onload = (function(){
               root.pkTime();  
           })

            //   root.pkTime(); 
           
                 
        }else
         if(count === -2 ){
                 
            //    $('.page3Start').text('开始') 
            // oDiv.innertext = count ;
               $('.page3-wrapper').css({opacity:"1"})
              
               $('.page3Start').css({display:'none'})

            //    root.key1 = 1 ;
                // root.pkTime()
               
               clearInterval(timer)
               
           }
              
          },1000) 
    }
         

    root.page3Start = page3Start ;
}(window.$,window.page1 || (window.page1 ={})))