<?php
#1、连接到数据库
require("00_init.php");
#2、接收前端传递过来的数据
$uname = $_REQUEST["uname"];
$sql = "select uname from mg_user WHERE uname = '$uname'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    echo '{"code":-2,"msg1":"用户名已被使用"}';
    return;
}
$upwd = $_REQUEST["upwd"];
$email = $_REQUEST["email"];
$phone = $_REQUEST["phone"];
#3、拼SQL语句
$sql = "insert into mg_user(uname,upwd,email,phone) values('$uname','$upwd','$email','$phone')";
#4、执行插入操作
$result = mysqli_query($conn, $sql);
#5、根据操作结果给出响应
if ($result == true) {
    echo '{"code":1,"msg":"注册成功"}';
} else {
    echo '{"code":-1,"msg":"注册失败"}';
}