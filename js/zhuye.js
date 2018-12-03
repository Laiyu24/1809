/* 
* @Author: Marte
* @Date:   2018-11-23 11:43:08
* @Last Modified by:   Marte
* @Last Modified time: 2018-11-30 09:16:56
*/
// 轮播图-----------------------------------------------------------------------------------------------
$(function(){
    var iw=$('#imglist li').eq(0).outerWidth();
    $('#imglist li').css('left',iw);
    $('#imglist li').eq(0).css('left',0);
    var timer=null;
    clearInterval(timer);
    var now=0;
    timer=setInterval(next,2000);
    function next(){
        $('#imglist li').eq(now).animate({'left':-iw},1000);
        now=++now>=$('#imglist li').size()?0:now;
        $('#imglist li').eq(now).css('left',iw);
        $('#imglist li').eq(now).animate({'left':0},1000);
        light();
    }
    function light(){
        $('#light span').removeClass('active');
        $('#light span').eq(now).addClass('active');
    }
    
    function prev(){
        $('#imglist li').eq(now).animate({'left':iw},1000);
        now=--now<0?$('#imglist li').size()-1:now;
        $('#imglist li').eq(now).css('left',-iw);
        $('#imglist li').eq(now).animate({'left':0},1000);
        light();
    }
    $('#adv_l').hover(function(){
        clearInterval(timer);
    },function(){
        clearInterval(timer);
        timer=setInterval(next,2000);
    });

    $('#prev').click(function(){
        prev();
    });
    $('#next').click(function(){
        next();
    });
    $('#light span').click(function(){
        var index=$(this).index();
        if(index>now){
            $('#imglist li').eq(now).animate({'left':-iw},1000);
            $('#imglist li').eq(index).css('left',iw);
            $('#imglist li').eq(index).animate({'left':0},1000);
            now=index;
        }
        if(index<now){
            $('#imglist li').eq(now).animate({'left':iw},1000);
            $('#imglist li').eq(index).css('left',-iw);
            $('#imglist li').eq(index).animate({'left':0},1000);
            now=index;
        }
        light();
    });
// 选项卡--------------------------------------------------------------------------------------------------

    $('#data .data_t').find('li').mouseenter(function(){
        $(this).attr('data_r');
         var index=$(this).index();
        $('#data .data_t li').attr('class','');
        $(this).attr('class','l1');
        $('#data .data_r').css('display','none');
        $('#data .data_r').eq($(this).index()).css('display','block');
    });

    $('#data2 .data_t').find('li').mouseenter(function(){
        $(this).attr('data_r');
         var index=$(this).index();
        $('#data2 .data_t li').attr('class','');
        $(this).attr('class','l1');
        $('#data2 .data_r').css('display','none');
        $('#data2 .data_r').eq($(this).index()).css('display','block');
    });

      $('.blogroll').find('li').mouseenter(function(){
        $(this).attr('blogroll');
         // var index=$(this).index();
        $('.blogroll li').attr('class','');
        $(this).attr('class','lf');
        $('.blogroll div').css('display','none');
        $('.blogroll div').eq($(this).index()).css('display','block');
    });

    // 渲染---------------------------------------------------------------------------------
    // $('.applyl li').eq(0).html(` <img src="images/xqy1.png"alt="" />
    //                 <p>钙片</p>
    //                 <span>￥10.00</span>`);
    // $('.applyl li').eq(1).html(` <img src="images/xqy2.png"alt="" />
    //                 <p>药水</p>
    //                 <span>￥19.00</span>`);
    // $('.applyl li').eq(2).html(` <img src="images/xqy3.png"alt="" />
    //                 <p>止血</p>
    //                 <span>￥15.00</span>`);
    // $('.applyl li').eq(3).html(` <img src="images/xqy4.png"alt="" />
    //                 <p>痛痹贴</p>
    //                 <span>￥14.00</span>`);
    // $('.applyl li').eq(4).html(` <img src="images/xqy4.png"alt="" />
    //                 <p>奶粉</p>
    //                 <span>￥22.00</span>`);
    // $('.applyl li').eq(5).html(` <img src="images/xqy2.png"alt="" />
    //                 <p>小菜胡</p>
    //                 <span>￥32.00</span>`);
    // $('.applyl li').eq(6).html(` <img src="images/xqy7.png"alt="" />
    //                 <p>感冒灵</p>
    //                 <span>￥11.00</span>`);
    // $('.applyl li').eq(7).html(` <img src="images/xqy8.png"alt="" />
    //                 <p>止咳水</p>
    //                 <span>￥15.00</span>`);
    // $('.applyl li').eq(8).html(` <img src="images/xqy1.png"alt="" />
    //                 <p>创可贴</p>
    //                 <span>￥33.00</span>`);
    // $('.applyl li').eq(9).html(` <img src="images/xqy1.png"alt="" />
    //                 <p>盖中盖</p>
    //                 <span>￥44.00</span>`);
   $.ajax({
       url: 'api/laiyu.php',
       type: 'GET',
       success:function(str){
            console.log(str);//str是接受到的字符串
            var arr=JSON.parse(str);
            // console.log(arr);
            // //用map方法遍历数据，item表示数据中的每一个对象{}
            var res=arr.map(function(item){
                return `<li data-id="${item.id}">
                     <img src="images/${item.img}"alt="" />
                    <p>${item.name}</p>
                    <span>￥${item.price}</span>
                </li>`
            }).join('');//join遍历完的结果数据转字符串
            $('.applyl ul').html(res);//插入已存在的父节点
       }
   });

   $('.logo_z .inp3').click(function(){
        location.href='liebiao.html';
   });
    $('#denglu').click(function(){
        location.href='denglu.html';
   });
 
});
