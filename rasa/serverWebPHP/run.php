<html>
	<head>
		<title>Hi</title>
	</head>
	<body>



<?php
	$data = array(
  'user'      => 'trung',
	'message' => $_GET['message']
);


$options = array(
  'http' => array(
    'method'  => 'POST',
    'content' => json_encode( $data ),
    'header'=>  "Content-Type: application/json\r\n" .
                "Accept: application/json\r\n"
    )
);

//$url = 'http://localhost:5005/webhooks/rest/webhook';
$url = 'http://localhost:5005/webhooks/rest/webhook';
$context  = stream_context_create( $options );
$result = file_get_contents( $url, false, $context );
print($result);
$response = json_decode( $result );

//print_r( $response);
?>


	
		<h1>Chatbot</h1>
		<form action="run.php" method="GET">
			<input type="text" name="message" value="hi">
			<input type="submit" value="Send">
		</form>
	</body>
</html>


