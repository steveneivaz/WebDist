<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

	<title>Pack Results</title>
	<link rel="stylesheet" href="../CSS/Style.css">
</head>

<body>
	<nav class ="navbar navbar-expand-lg navbar-dark bg-dark">
  			<a class="navbar-brand" href="#">Summon Results</a>
  			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collasped-content">
  		    <span class="navbar-toggler-icon"></span>
  		  </button>
  			<div class ="collapse navbar-collapse" id="collasped-content">
        <div class="navbar-nav">
            <a class="nav-item nav-link" href="MainPage.html">Home</a>
            <a class="nav-item nav-link active" href="SummonSimulator.html">Summon Simulator</a>
          
        </div>
      </div>
    </nav>
    <main role="main" class="container-fluid">
	<h1> Pack Results </h1>
         <table class="table table-hover">
            <thead class="thead-light" >
                <tr>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Rarity</th>
                    
                </tr>
            </thead>
			<script>
			function validate() {
  			var x = document.getElementById("enter").value;
				if(x < 1 ){
					x = 1;
					return x;
	}
 
}
</script>
									   
<?php
 // PHP Data Objects(PDO) Sample Code:
try {
    $conn = new PDO("sqlsrv:server = tcp:dokkan.database.windows.net,1433; Database = dokkan", "steveneivaz", "{your_password_here}");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
    print("Error connecting to SQL Server.");
    die(print_r($e));
}

// SQL Server Extension Sample Code:
$connectionInfo = array("UID" => "steveneivaz", "pwd" => "S13421963e", "Database" => "dokkan", "LoginTimeout" => 30, "Encrypt" => 1, "TrustServerCertificate" => 0);
$serverName = "tcp:dokkan.database.windows.net,1433";
$conn = sqlsrv_connect($serverName, $connectionInfo);

?>
<br/>
                                       
                                       

</body>

</html>
