<?php
$ini = parse_ini_file('app.ini');

// Initialize variable for database credentials
$dbhost = $ini['dbhost'];
$dbuser = $ini['dbuser'];
$dbpass = $ini['dbpass'];
$dbname = $ini['dbname'];

$numer = $_GET['nr'];
$towarid = $_GET['id'];
$ile = $_GET['ile'];

//Create database connection
  $dblink = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

//Check connection was successful
  if ($dblink->connect_errno) {
     printf("Failed to connect to database");
     exit();
  }

	$sql = "INSERT INTO `koszyki`(`NUMER`, `TOWARID`, `ILE`) VALUES ($numer, $towarid, $ile)";
	
//Fetch 3 rows from actor table
  $result = $dblink->query($sql);

//Initialize array variable
  $dbdata = array();
  
//Fetch into associative array
  while ( $row = $result->fetch_assoc())  {
	$dbdata[]=$row;
  }
  
//echo count($dbdata);

//Print array in JSON format
	if (count($dbdata)==0)
	{
		echo "[]";
	}
	else
	{
		echo json_encode($dbdata);
	}

?>