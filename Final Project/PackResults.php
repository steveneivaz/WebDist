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
  			<a class="navbar-brand" href="#">Pack Opener</a>
  			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collasped-content">
  		    <span class="navbar-toggler-icon"></span>
  		  </button>
  			<div class ="collapse navbar-collapse" id="collasped-content">
        <div class="navbar-nav">
            <a class="nav-item nav-link" href="../HTML/MainPage.html">Home</a>
            <a class="nav-item nav-link" href="../HTML/Mythics.html">Mythics</a>
            <a class="nav-item nav-link active" href="../HTML/PackOpener.html">Pack Opener</a>
          
        </div>
      </div>
    </nav>
    <main role="main" class="container-fluid">
	<h1> Pack Results </h1>
         <table class="table table-hover">
            <thead class="thead-light" >
                <tr>
                    <th>Set Number</th>
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
		echo '<script type="text/javascript">',
     'validate();',
     '</script>'
;
      $pack = $_POST["enter"];
			 
									   
      $pack = addslashes($pack);                                
      @ $db = new mysqli("localhost", "phpuser2", "1425", "innistrad3.0");

        if($db->connect_error) {
            die("Connect error $db->connect_errno : $db->connecterror");
        }

        echo "Successful login.<br/>";
		for ($k = 0 ; $k < $pack; $k++){ 
        $query = "SELECT * FROM ncards order by RAND() LIMIT 10" ;
         if($results = $db->query($query)) {
            $num_fields = $results->field_count;
            while($row = $results->fetch_row()) {
                echo "<tr>";
                for($i=0; $i<$num_fields; $i++) {
                    echo "<td>".stripslashes($row[$i])."</td>";
                }
                echo "<tr/>";
            }
            $results->free();
        }
			 $query1 = "SELECT * FROM nuncom order by RAND() LIMIT 3" ;
         if($results = $db->query($query1)) {
            $num_fields = $results->field_count;
            while($row = $results->fetch_row()) {
                echo "<tr>";
                for($i=0; $i<$num_fields; $i++) {
                    echo "<td>".stripslashes($row[$i])."</td>";
                }
                echo "<tr/>";
            }
            $results->free();
        }
			 $query2 = "SELECT * FROM nrm order by RAND() LIMIT 1" ;
         if($results = $db->query($query2)) {
            $num_fields = $results->field_count;
            while($row = $results->fetch_row()) {
                echo "<tr>";
                for($i=0; $i<$num_fields; $i++) {
                    echo "<td>".stripslashes($row[$i])."</td>";
                }
                echo "<tr/>";
            }
            $results->free();
        }
		}
        $db->close();
   
    ;
    
    echo "<p> You opened $pack pack(s) </p>";
        
		
		
		if(!$pack){
			echo("Have not entered");
			echo '<a href="../HTML/PackOpener.html"> Open another pack </a>';
			exit;
		}
	
	
?>
<br/>
                                       
                                       

</body>

</html>
