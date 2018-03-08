<?php
header('Content-Type: application/json');
require("00_init.php");
@$kw=$_REQUEST["kw"];
$sql=" select * from  mg_product ";

if($kw){
////$kw:"mac 256g i7"
    $kws=explode(" ",$kw);//$kw.split(" ")
    for($i=0;$i<count($kws);$i++){
        $kws[$i]=" title like '%$kws[$i]%' ";
    }
//$kws=[
//" title like '%mac%' ",
//" title like '%256g%' ",
//" title like '%i7%' "
//];
    $where=   //$kws.join(" and ")
        " where ".implode(" and ",$kws);
    //$where=" where title like '%mac%' and title like '%256g%' and title like '%i7%' ";
    $sql.=$where;
}
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_assoc($result);

$posts = array();
 while($row = mysqli_fetch_assoc($result)) {
    $posts[]=$row;

  }
$count=count($posts);


$pageSize=6;
@$pno=$_REQUEST["pno"];
if(!$pno){
    $pno=13;
}



$output=['pageSize'=>$pageSize,
				'count'=>$count,
				'pageCount'=>ceil($count/$pageSize),
				'pno'=>$pno,
				'data'=>$posts];
echo json_encode($output);