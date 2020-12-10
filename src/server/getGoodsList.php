<?php
  
  // 3. 操作数据库进行查询
  $link = mysqli_connect('localhost', 'root', 'root', 'bk2004');
  $sql = "SELECT * FROM `good`";
  $res = mysqli_query($link, $sql);
  $data = mysqli_fetch_all($res, MYSQLI_ASSOC);
  // var_dump($res);
  // 4. 把结果返回给前端
  echo json_encode(array(
    "message" => "获取商品列表成功",
    "list" => $data,
  ));

?>
