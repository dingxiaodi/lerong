<?php
header('Access-Control-Allow-Origin:*');
$name = 'abcdef';
$word = '123456';

$username = $_POST['username'];
$password = $_POST['password'];

if($username == $name && $password == $word){
  $response = [
    'code' => 200,
    'message'=> '登陆成功'
  ];
}else{
  $response = [
    'code' => -1,
    'message'=> '用户名密码错误'
  ];
}

echo json_encode($response);
