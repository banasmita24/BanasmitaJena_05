<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "banasmitajena2405@gmail.com"; 
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "OK"; // This will be displayed in the JavaScript success callback
    } else {
        echo "Error"; // This will be displayed in the JavaScript error callback
    }
}
?>
