var tist = [];
$.ajax({
  type: "GET",
  url: "../cere.json",
  dataType: "json",
  success: function(data) {
    console.log(data);
    //console.log(data[0].img)
    tist = data;
    createPei(data);
  }
});

function createPei(data) {
  tist.map(function(item, index) {
    var str = "";
    /*渲染页面*/
    $(".peijian-ul").append(
      "<li>" +
        "<div class='img'>" +
        "<img src = " +
        item.img +
        ">" +
        "</div>" +
        "<div class='p1'>" +
        item.title +
        "</div>" +
        "<div class='p2'>" +
        item.lable +
        "</div>" +
        "<div class='p3'>" +
        item.price +
        "</div>" +
        "<button class='p4' onclick='setInfo("+index+")'>加入购物车</button>" +
        "</li>"
    );
  });
}
