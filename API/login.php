<?php

  //Set response headers:
  header("Access-Control-Allow-Origin: *");
  // ini_set('display_errors', 1);
  // ini_set('display_startup_errors', 1);
  // error_reporting(E_ALL);

  //Declare Global Variables:
  $Username = "";
  $Password = "";
  $validated = true;

  //Validate the provided email address:
  if(!isset($_POST['Username'])){
      $validated = false;
  }else{
      if(valideInput($_POST['Username'])){
          $Username = $_POST['Username'];
      }else{
          $validated = false;
      }
  }

  //Validate the provided password:
  if(!isset($_POST['Password'])){
      $validated = false;
  }else{
      if(valideInput($_POST['Password'])){
          $Password = $_POST['Password'];
      }else{
          $validated = false;
      }
  }

  //Run the main body:
  if($validated){
      $response = sendRequest($GLOBALS['Username'], $GLOBALS['Password']);
      echo json_encode($response);
  }else{
      $response = array('Status' => 'NO', 'Reason' => 'InvalidEntry');
      echo json_encode($response);
  }

  //Validate the user's email address:
  function valideInput($input){
    $pattern = '/^[A-Za-z0-9]+$/';
    if(preg_match($pattern, $input)) {
      return true;
    }else{
      return false;
    }
  }

  //Send the request to the database:
  function sendRequest($usrUsername, $usrPassword){

      include('config.php');
      $sql = 'SELECT username, password, id
              FROM `facilitators`
              WHERE username=? AND password=?';

      //PDO setup and DB Connection:
      $pdo = new PDO($connect_tring, $username, $password);
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      try {

          $sth = $pdo->prepare($sql);
          $array = array($usrUsername, $usrPassword);
          $sth->execute($array);

          $result = $sth->fetchAll();
          $numrows = $sth->rowCount();

          $hashedPassword = '';
          if($numrows > 0){
              for ($ri = 0; $ri < $numrows; $ri++) {
                $row = $result[$ri];
                $details['id'] = $row['id'];
                $details['username'] = $row['username'];
                $details['password'] = $row['password'];
                $details['Status'] = 'OK';
              }

              return $details;

          }else if($numrows == 0){
            return array("Status" => 'NO', "Reason" => 'IncorrectLogin');
          }else{
            return array("Status" => 'NO', "Reason" => 'UnknownError');
          }

      } catch (PDOException $e) {
          echo $e->getMessage();
      }
  }

?>
