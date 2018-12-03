/* 
* @Author: Marte
* @Date:   2018-11-22 20:17:04
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-03 17:14:39
*/


var top=document.getElementById('top_t');
var os=document.getElementById('s1');
var obox2=document.getElementById('box2');
var obox=document.getElementById('box1');
var oii=os.getElementsByTagName('i')[0];
 obox2.onmouseenter=function(){

    obox.style.display='block';
    oii.className='i2';
 }
 obox2.onmouseleave=function(){
    obox.style.display='none';
    oii.className='i1';
 }
 var user=document.getElementById('user');
 var inp1=user.getElementsByClassName('inp1')[0];
 // console.log(inp1);
  var inp2=user.getElementsByClassName('inp2')[0];
  console.log(inp2);
  var inp3=user.getElementsByClassName('inp3')[0];
  var inp4=document.getElementById('inp2');
  var inp5=document.getElementById('inp5');
  var kg=false;
  var kg1=false;
  var kg2=false;
  var kg3=false;
  inp1.onblur=function(){
    
        var inp=inp1.value.trim();
        if(inp){
            if(checkReg.name(inp)){
                $.ajax({
                    url: 'api/laiyu2.php',
                    type: 'GET',
                    data:{
                        inp1:inp
                    },
                    success:function(str){
                        console.log(str);
                        kg=true;
                    }
                });
            }
            else{
                alert('不符合规则');
            }
        }else{
            alert('不能为空');
        }
  }
  inp2.onblur=function(){
     var  inp=inp2.value.trim();
     if(inp){
        if(checkReg.psweasy(inp)){
            $.ajax({
                url:'api/laiyu2.php',
                type:'GET',
                data:{
                    inp2:inp
                },
                success:function(str){
                     kg1=true;
                }
            });
        }
        else{
            alert('不符合规则');
        }
     }else{
        alert('不能为空');
     }
  }
  inp3.onblur=function(){
    var inp22=inp2.value.trim();
    var inp33=inp3.value.trim();
    if(checkReg.pwwagain(inp22,inp33)){
        alert('正确');
         kg2=true;
    }
  }




  inp4.onblur=function(){
    var inp=inp4.value.trim();
    if(inp){
        if(checkReg.email(inp)){
             $.ajax({
                url:'api/laiyu2.php',
                type:'GET',
                data:{
                    inp2:inp
                },
                success:function(str){
                        kg3=true;
                }
            });
        }
        else{
            alert('不符合规则');
        }
    }else{
        alert('不能为空');
    }
  }
inp5.onclick=function(){
    if(kg && kg1 && kg2 && kg3 ){
         $.ajax({
                url:'api/laiyu2.php',
                type:'GET',
              
                success:function(str){
                        kg3=true;
                         location.href='denglu.html';
                }
    });  
        
}
}
