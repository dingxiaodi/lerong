<?php
$name = 'abcdef';
$word = '123456';

$username = $_POST['username'];
$password = $_POST['password'];

if($username == $name && $password == $word){
  $response = [
    'code' => 200,
    'message'=> '注册成功'
  ];
}else{
  $response = [
    'code' => -1,
    'message'=> '注册失败'
  ];
}

echo json_encode($response);
