var dist = [];
$.ajax({
  type: "GET",
  url: "../caidan.json",
  dataType: "json",
  success: function(data) {
    console.log(data);
    dist = data;
    createCai(data);
  }
});

function createCai(data) {
  dist.map(function(item, index) {
    var str = "";
    /*渲染页面*/
    $(".side_main ul").append(
      "<li>" +
        "<div class='img1'>" +
        "<img src = " +
        item.img +
        ">" +
        "</div>" +
        "<div class='box'>" +
        "<div class='p000'>" +
        item.title +
        "</div>" +
        "<div class='p100'>" +
        item.price +
        "</div>" +
        "</div>" +
        "</li>"
    );
  });
}
