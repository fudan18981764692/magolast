//:获取用户输入用户名和密码
var u = $("#uname").val();
var p = $("#upwd").val();
var cp = $("#cpwd").val();
var e=$("#email").val();
var ph=$("#phone").val();
var ureg = /^[a-z0-9]{3,8}$/i;
var preg = /^[0-9]{3,8}$/;
var ereg= /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
var phreg=/^1[3|4|5|8][0-9]\d{4,8}$/;
//文本框失去焦点显示提示信息
$("#uname").blur(function () {
    $(".from_line .uname").css("display", "block");
})
$("#upwd").blur(function () {
    $(".from_line .upwd").css("display", "block");
});
$("#email").blur(function () {
    $(".from_line .email").css("display", "block");
});
$("#phone").blur(function () {
    $(".from_line .phone").css("display", "block");
});
$("#btn").click(function (e) {  //e 事件对象
    //3:获取用户输入用户名和密码
    var u = $("#uname").val();
    var p = $("#upwd").val();
    var cp = $("#cpwd").val();
    var e=$("#email").val();
    var ph=$("#phone").val();


    //验证用户和密码
    if (!ureg.test(u)) {
        alert("你的用户名不合法");
        return;
    }
    if (!preg.test(p)) {
        alert("你的密码不合法");
        return;
    }
    if (p != cp) {
        $(".from_line .cpwd").css("display", "block");
        return;
    }
    if (!ereg.test(e)) {
        alert("你的邮箱不合法");
        return;
    }
    if (!phreg.test(ph)) {
        alert("你的手机不合法");
        return;
    }

    //4:发送ajax请求并且获取返回数据
    //5:判断
    //6:成功跳转 product_list.html
    //7:失败    提示:"用户名或密码有误"
    $.ajax({
        type: "POST",
        url: "data/register.php",
        data: {uname: u, upwd: p,email: e,phone:ph}, //参数:js->php 数据
        success: function (data) {//返回数:php->js 结果
            console.log(data);   //成功接收到返回数据
            if (data.code > 0) {
                alert("注册成功");
                location.href = "login.html";
            } else if (data.code == -2) {
                alert(data.msg1);
            } else {
                alert(data.msg);
            }
        },
        error: function () {      //出错:执行此方法
            alert("网络故障，请检查");
        }
    });
});
//功能模块三 会员注册与合作卡的切换
$(".login .log-nav ").on("click", "li", function (e) {
    var $tar = $(e.target);
    $tar.addClass("on");
    $tar.siblings().removeClass("on");
});
