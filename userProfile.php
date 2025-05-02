```php
        <?php
        session_start(); // Start a session to keep track of logged-in users
        
        // Database connection (replace with your actual connection details)
        $servername = "localhost";
        $username = "db_user";
        $password = "db_password";
        $dbname = "mydatabase";
        $conn = new mysqli($servername, $username, $password, $dbname);
        
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $username = $_POST["username"];
            $password = $_POST["password"];
            
            // Retrieve hashed password from the database
            $stmt = $conn->prepare("SELECT password FROM users WHERE email = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $result = $stmt->get_result();
            $result = $conn->query($sql);
            
            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                $hashed_password = $row["password"];
                
                // Verify the password (bcrypt example)
                if (password_verify($password, $hashed_password)) {
                    // Authentication successful
                    $_SESSION["username"] = $username; // Store username in session
                    // Redirect to a protected page
                    header("Location: protected_page.php");
                    exit(); // Prevent further execution
                } else {
                    // Incorrect password
                    $error_message = "Incorrect password";
                }
            } else {
                // User not found
                $error_message = "User not found";
            }
        }
        ?>

<!-- <html>
    <body>
        Welcome <?php echo $_POST["firstname"]; ?> <br>
        Your email address is: <?php echo $_POST["email"]; ?>
    </body>
</html> -->

