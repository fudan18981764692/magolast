$("#mango-header").load("header.html", () => {
    var kw = location.search.split("=")[1];
    var pages = document.getElementById("pages");
    var pageNum = document.getElementById("pageNum");
    //绑定单击时间实现页面切换重新加载内容
    //pages 在页面上应该放在ajax请求外面
    pages.onclick = e => {
        var tar = e.target;
        if (tar.nodeName == "A" && tar.className != "current" && !tar.className.endsWith("disabled")) {
            switch (tar.innerHTML) {
                case "上一页":
                    changePage(false);
                    break;
                case "下一页":
                    changePage(true);
                    break;
                default :
                    load(tar.innerHTML);
            }
        }
    }

    function load(pno = 1) {
        var data = (kw ? "kw=" + kw + "&" : "") + `pno=${pno}`
        $.ajax({
            type: 'get',
            url: 'data/getProductByKw.php',
            data,
            dataType: "json"
        }).then(output => {
            //console.log(data);
            var data = output.data;
            var html = "";
            //动态生成内容
            for (var p of data) {
                html += `<li>
                    <a href="#" target="_blank" style="height: 272px;border-bottom-width:1px">
                        <img src="${p.img}" alt="">
                        <h3>${p.title} </h3>
                        <strong>
                            <span>¥</span>
                           ${p.price}
                            <span>起</span>
                        </strong>
                    </a>
                </li>`;
            }
            var showList = document.getElementById("show-list");
            showList.innerHTML = html;
//实现分页功能
            var pno = output.pno;
            var pageCount = output.pageCount;
            var html1 = "";
            for (var i = 1; i <= pageCount; i++) {
                html1 += `<a href="javascript:;" class="${pno == i ? 'current' : ''}">${i}</a>`;
            }
            pageNum.innerHTML = html1;
            if (output.pno == 1) {
                $(".previous").addClass("disabled");
            }else{
                $(".previous").removeClass("disabled");
            }
            if (output.pno == output.pageCount) {
                $(".next").addClass("disabled");
            }else{
                $(".next ").removeClass("disabled");
            }
        });
    };
    load(1);

    function changePage(isNext) {
        var i = $(".current").html();
        if (isNext) {
            i++;
        } else {
            i--;
        }
        load(i);
    }
});