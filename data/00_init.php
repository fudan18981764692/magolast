<?php
//1:修改响应头格式 json
header("Content-Type:application/json;charset=utf-8");
//2:获取数据库连接
$conn = mysqli_connect("qdm114540346.my3w.com","qdm114540346","liuhao411","qdm114540346_db",3306);
//3:设置数据库编码为 utf-8
mysqli_query($conn,"SET NAMES UTF8");
?>