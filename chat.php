<html>
<head>

    <!-- Title and meta -->
	<title>InfoCuza - Chat</title>
	<meta charset="UTF-8">
	<meta name="description" content="">
	<meta name="author" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

	<!-- Stylesheets -->
	<link href="css/basic.css" rel="stylesheet" type="text/css">
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,200,600,700,900" rel="stylesheet" type="text/css">

    <!-- Favicon -->
    <link href="image/favicon.ico" rel="shortcut icon" type="image/x-icon">

    <!-- JS scripts -->
    <script src="https://cdn.firebase.com/js/client/2.2.1/firebase.js" language="JavaScript" type="text/javascript"></script>
	<script src="javascript/jquery-2.2.0.min.js" language="JavaScript" type="text/javascript"></script>
	<script src="javascript/chat.js" language="JavaScript" type="text/javascript"></script>

	<!-- Share infos -->
	<link href="" rel="image_src" type="image/jpeg">
	<meta content="" property="og:image">
	<meta content="" property="og:title">
	<meta content="" property="og:description">

</head>
<body>

    <!-- Loading -->
    <div class="loading-background" id="loading">
        <i class="fa fa-5x fa-spinner fa-spin"></i>
    </div>

    <!-- Header -->
	<div class="grid">
	    <div class="header">
	        <ul>
				<a href="index.php"><li class="bold">Acasa</li></a>
	        </ul>
			<p>
				<i class="ultra-bold">Info</i>
				<i class="normal">Cuza</i>
			</p>
	    </div>
	</div>

    <!-- Chat app -->
    <div class="grid">
        <div class="chat">
            <header>InfoCuza chat</header>
            <p>Daca ai nevoie de ajutor in domeniul informaticii, poti intreba alti elevi sau profesori prezenti aici.</p>
            <ul id='example-messages' class="example-chat-messages"></ul>
            <div>
                <label for="nameInput">Username:</label>
                <input type='text' id='nameInput'>
            </div>
            <div>
                <label for="nameInput">Message:</label>
                <input type='text' id='messageInput'>
            </div>
        </div>
    </div>

	<!-- External JS scripts -->
	<script src="javascript/jquery-2.2.0.min.js" language="JavaScript" type="text/javascript"></script>
	<script src="javascript/generate.index.js" language="JavaScript" type="text/javascript"></script>

</body>
</html>
