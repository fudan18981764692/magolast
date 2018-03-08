<?php
header('Content-Type: application/json');
require_once("00_init.php");
@$uname = $_REQUEST['uname'] or die('{"code":401,"msg":"uname required"}');
@$upwd = $_REQUEST['upwd'] or die('{"code":402,"msg":"upwd required"}');
//获取用户输入的验证码
//$uzym = $_REQUEST["yzm"];
////获取系统生成验证码内容
//if($uzym != $_SESSION["captcha"]){
//  echo '{"code":-2,"msg":"验证码不正确，请检查"}';
//  exit;//停止程序执行
//}
$sql = "SELECT uid FROM mg_user WHERE uname='$uname' AND upwd='$upwd'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if($row==null){
  echo '{"code":-1,"msg":"用户名或密码有误"}';
}else{

  echo '{"code":1,"msg":"登录成功"}';
}
?>