var tist=[];function createPei(i){tist.map(function(i,s){$(".peijian-ul").append("<li><div class='img'><img src = "+i.img+"></div><div class='p1'>"+i.title+"</div><div class='p2'>"+i.lable+"</div><div class='p3'>"+i.price+"</div><button class='p4' onclick='setInfo("+s+")'>加入购物车</button></li>")})}$.ajax({type:"GET",url:"../cere.json",dataType:"json",success:function(i){console.log(i),createPei(tist=i)}});