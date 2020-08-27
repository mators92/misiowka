<?php
$ini = parse_ini_file('app.ini');

// Initialize variable for database credentials
$dbhost = $ini['dbhost'];
$dbuser = $ini['dbuser'];
$dbpass = $ini['dbpass'];
$dbname = $ini['dbname'];

$numer = $_GET['nr'];

//Create database connection
  $dblink = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

//Check connection was successful
  if ($dblink->connect_errno) {
     printf("Failed to connect to database");
     exit();
  }

//Fetch 3 rows from actor table
  $result = $dblink->query("SELECT ROUND(SUM(koszyki.ILE*towary.CENA), 2) AS RAZEM FROM `koszyki`, `towary` WHERE towary.ID=koszyki.TOWARID AND NUMER=$numer");

//Initialize array variable
  $dbdata = array();

//Fetch into associative array
  while ( $row = $result->fetch_assoc())  {
	$dbdata[]=$row;
  }

//Print array in JSON format
 echo json_encode($dbdata);

?>