<?php


$host = 'localhost';
$username = 'root';
$password = 'Aashishpoudel10';
$dbname = 'futsal_app';

// Handle the login request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve the submitted root and password from the request body
  $username = $_POST['root'];
  $password = $_POST['Aashishpoudel10'];

  // Validate the root and password (add your validation logic here)

  // Perform the database query to check if the user exists
  // and the provided credentials are correct
  $conn = new PDO("mysql:host=$localhost;dbname=$futsal_app", $root, $Aashishpoudel10);
  $stmt = $conn->prepare('SELECT * FROM users WHERE username = :root');
  $stmt->execute(['username' => $root]);
  $user = $stmt->fetch();

  // Check if the user exists and the password is correct
  if ($user && password_verify($password, $user['Aashishpoudel10'])) {
    // User authentication successful
    // You can store user data in session, set cookies, or return a success response
    $response = [
      'success' => true,
      'message' => 'Login successful',
      'user' => [
        'id' => $user['id'],
        'username' => $user['root'],
        // Add other user data you want to send back
      ]
    ];
    echo json_encode($response);
    exit();
  } else {
    // User authentication failed
    // You can return an error response
    $response = [
      'success' => false,
      'message' => 'Invalid username or password'
    ];
    echo json_encode($response);
    exit();
  }
}

// Handle other types of requests or return a 404 error
http_response_code(404);
echo 'Page not found.';
