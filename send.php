<?php

$name = $_POST['nome'];
$phone = $_POST['numero_di_telefono'];
$servizio = $_POST['servizio'];
$un_commento = $_POST['un_commento'];
$email = $_POST['email'];
$token = "5474010313:AAGVV-bx5w_hG9vyYDLj2jm6hIoXrDIF90M";
$chat_id = "-732983981";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'servizio:' => $servizio,
'Un_commento:' => $un_commento,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram && $sendToTelegram2) {
  header('Location: thankpage.html');
} else {
  echo "Error";
}

?>