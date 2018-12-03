/* 
* @Author: Marte
* @Date:   2018-11-21 19:52:27
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-02 23:14:33
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
 var zhuche=document.getElementById('zhuche');
 zhuche.onclick=function(){
    location.href='zhuche.html';
 }
 var inp=document.getElementById('ip3');
 inp.onclick=function(){
    location.href='zhuye.html';
 }
