
var list = []
$.ajax({
  type:'GET',
  url:'../list.json',
  dataType:'json',
  success:function(data){
   
   console.log(data);
   //console.log(data[0].img)
   list = data;
   createLi(data);
  }
})

function createLi(data) {
  list.map(function (item,index) {
      var str = "";
      /*渲染页面*/
      $(".dianqi-ul").append("<li>" +
      "<div class='img'>" +
      "<img src = "+item.img+">" +
      "</div>" +
      "<div class='p00'>"+item.title+"</div>" +
      "<div class='p11'>"+item.lable+"</div>"+
      "<div class='p10'>"+item.price+"</div>"+
      "<button class='p12' onclick='getInfo("+index+")'>加入购物车</button>"+
      "</li>")
  })

}

//h获取商品信息
// function getInfo(index){
//    console.log(123)
//    console.log(index);
//    console.log(list)
//    var shopObj = list[index];
//    shopObj.num = 1
//    console.log(shopObj)
// }
