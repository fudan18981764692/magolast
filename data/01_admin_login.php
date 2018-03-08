<?php
//session_start();

require("00_init.php");
//4:获取用户数据   uname upwd
$uname = $_REQUEST["uname"];
$upwd = $_REQUEST["upwd"];
//获取用户输入的验证码
$uzym = $_REQUEST["yzm"];
//获取系统生成验证码内容
if($uzym != $_SESSION["captcha"]){
 echo '{"code":-2,"msg":"验证码不正确，请检查"}';
 exit;//停止程序执行
}

//5:创建sql语句并且执行sql语句 注意大小写
$sql = " SELECT * FROM mg_user";
$sql .= " WHERE uname='$uname' AND upwd=md5('$upwd')";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
//6:判断输出结果
if($row==null){
  echo '{"code":-1,"msg":"用户名或密码有误"}';
}else{
  echo '{"code":1,"msg":"登录成功"}';
}
?>