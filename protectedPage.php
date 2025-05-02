<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION["email"])) {
    header("Location: login.html");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Welcome</title>
</head>
<body>
  <h1>Welcome, <?php echo htmlspecialchars($_SESSION["email"]); ?>!</h1>
  <p>This is a protected page.</p>
  <a href="logout.php">Logout</a>
</body>
</html>
