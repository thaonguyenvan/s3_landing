<?php

function slack($message, $channel)
{
    $ch = curl_init('https://hooks.slack.com/services/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');
    // $ch = curl_init('https://hooks.slack.com/services/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');
    $data = array(
        "channel" => $channel,
        "icon_emoji" => ":cloud:",
        "text" => $message,
        "username" => "Cloud365",
    );


    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $result = curl_exec($ch);
    curl_close($ch);

    return $result;
}


function sendTelegram($message) {    
    $token = "520782684:AAEGb56vG1RUE8ZmGxjlBCw0QKScoj93Yk0";
    $chatID = "-311468581";
    // $token = "719037920:AAH4fNq-O_ASLqMTacFXQpMQyWbTwCkspGc";
    // $chatID = '-277683470';
    $url = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chatID;
    $url = $url . "&text=" . urlencode($message) . '&parse_mode=Markdown';
    $ch = curl_init();
    $optArray = array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true
    );
    curl_setopt_array($ch, $optArray);
    $result = curl_exec($ch);
    curl_close($ch);
    return json_decode($result);
}


try {
    $result = 0;
    $phone = $_POST["phone"];
    $req_location = $_POST["req_location"];
    $content = $_POST["content"];
    $type = $_POST["cloudcall"];
    $url_regist = $_POST["url_regist"];
    $request_ip = $_SERVER['HTTP_CLIENT_IP'] ? $_SERVER['HTTP_CLIENT_IP'] : ($_SERVER['HTTP_X_FORWARDED_FOR'] ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR']);
    if ($req_location == 'hn') {
        $req_location = 'Hà Nội';
    } else {
        $req_location = 'TP. Hồ Chí Minh';
    }


    $mess = '```
Yêu cầu gọi lại
Địa điểm: '.$req_location.'
Số điện thoại: '.$phone.'
Nội dung: '.$content.'
Yêu cầu từ: '.$url_regist.'
IP: '.$request_ip.'```

Gọi nhanh: ' .$phone;

    $r = sendTelegram(trim($mess));
    $result = $r->ok;

} catch (Exception $e) {
    $result = 0;
}


header('Content-type: application/json');
echo json_encode($result);

?>
