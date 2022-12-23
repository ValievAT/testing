<?php
if (isset($_POST)) {
    echo $_POST['Name'];
}
$link = mysqli_connect("localhost", "root", "");

if ($link == false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    print("Соединение установлено успешно");
}
?>