
<?php
$fio = $_POST['nome'];
$email = $_POST['email'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$fio = urldecode($fio);
$email = urldecode($email);
$fio = trim($fio);
$email = trim($email);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("soulline0@gmail.com", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: trendshoops@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>



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
<<<<<<< HEAD
  'servizio:' => $servizio,
=======
  'Servizio:' => $servizio,
>>>>>>> ad57fc9de03972f098f4e6832cec9edce41e312a
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
/