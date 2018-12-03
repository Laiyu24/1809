/* 
* @Author: Marte
* @Date:   2018-11-29 11:35:47
* @Last Modified by:   Marte
* @Last Modified time: 2018-11-30 11:35:16
*/

// $('.bar_l').mouseenter(function(){
//     console.log($('.bar_l').outerHeight());
//     $('.bar_l .bar_d').css('display','block');
// });
// $('.bar_l').mouseout(function(){
//     $('.bar_l .bar_d').css('display','none');
// });

var kg=true;
$('.sp2').click(function(){
    if(kg){
         $(this).prev().css('height','200px');
         var res='收起<i></i>';
         $(this).html(res);
         $(this).find('i').addClass('ii');
    }else{
        $(this).prev().css('height','100px');
        var res='展开<i></i>';
         $(this).html(res);
         $(this).find('i').removeClass('ii');
    }
   kg=!kg;
});
$.ajax({
       url: 'api/laiyu1.php',
       type: 'GET',
       data:{
            'page':1,
            'qty':10
       },
       success:function(str){
            console.log(str);//str是接受到的字符串
            var arr=JSON.parse(str);
            // console.log(arr);
            // //用map方法遍历数据，item表示数据中的每一个对象{}
            var res=arr.datalist.map(function(item){
                return `<li data-id="${item.id}">
                        <img src="images/${item.img}" alt="" />
                         <h4>&nbsp;&nbsp;&nbsp;￥${item.price}</h4>
                         <a href="">&nbsp;&nbsp;&nbsp;${item.name}</a>
                         <p>&nbsp;&nbsp;&nbsp;${item.spe}</p>
                         <p>&nbsp;&nbsp;&nbsp;${item.dosage}</p>
                         <p>&nbsp;&nbsp;&nbsp;${item.smell}</p>
                        <span>&nbsp;&nbsp;&nbsp;${item.num}</span>
                     </li>`
            }).join('');//join遍历完的结果数据转字符串
            $('.data_l ul').html(res);//插入已存在的父节点
       }

   });
var page=1;
$('#p5 .sa1').click(function() {
   page--;
  if(page<=1){
    page=1;//最小第一页
  }
   $('#p5 .s2').removeClass('s1');
  $('#p5 .s2').eq(page-1).addClass('s1');
  $.ajax({
       url: 'api/laiyu1.php',
       type: 'GET',
       data:{
            'page':page,
            'qty':10
       },
       success:function(str){
            console.log(str);//str是接受到的字符串
            var arr=JSON.parse(str);
            // console.log(arr);
            // //用map方法遍历数据，item表示数据中的每一个对象{}
            var res=arr.datalist.map(function(item){
                return `<li data-id="${item.id}">
                        <img src="images/${item.img}" alt="" />
                         <h4>&nbsp;&nbsp;&nbsp;￥${item.price}</h4>
                         <a href="">&nbsp;&nbsp;&nbsp;${item.name}</a>
                         <p>&nbsp;&nbsp;&nbsp;${item.spe}</p>
                         <p>&nbsp;&nbsp;&nbsp;${item.dosage}</p>
                         <p>&nbsp;&nbsp;&nbsp;${item.smell}</p>
                        <span>&nbsp;&nbsp;&nbsp;${item.num}</span>
                     </li>`
            }).join('');//join遍历完的结果数据转字符串
            $('.data_l ul').html(res);//插入已存在的父节点
       }

   });
  
});
$('#p5 .sa2').click(function() {
   page++;
  if(page>=3){
    page=3;//最小第一页
  }
  $('#p5 .s2').removeClass('s1');
  $('#p5 .s2').eq(page-1).addClass('s1');
  $.ajax({
       url: 'api/laiyu1.php',
       type: 'GET',
       data:{
            'page':page,
            'qty':10
       },
       success:function(str){
            console.log(str);//str是接受到的字符串
            var arr=JSON.parse(str);
            // console.log(arr);
            // //用map方法遍历数据，item表示数据中的每一个对象{}
            var res=arr.datalist.map(function(item){
                return `<li data-id="${item.id}">
                        <img src="images/${item.img}" alt="" />
                         <h4>&nbsp;&nbsp;&nbsp;￥${item.price}</h4>
                         <a href="">&nbsp;&nbsp;&nbsp;${item.name}</a>
                         <p>&nbsp;&nbsp;&nbsp;${item.spe}</p>
                         <p>&nbsp;&nbsp;&nbsp;${item.dosage}</p>
                         <p>&nbsp;&nbsp;&nbsp;${item.smell}</p>
                        <span>&nbsp;&nbsp;&nbsp;${item.num}</span>
                     </li>`
            }).join('');//join遍历完的结果数据转字符串
            $('.data_l ul').html(res);//插入已存在的父节点
       }

   });
  
});




