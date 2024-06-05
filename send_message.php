<?php
require __DIR__ . '/vendor/autoload.php'; // Include the Twilio PHP library

use Twilio\Rest\Client;

// Twilio credentials
$account_sid = 'YOUR_TWILIO_ACCOUNT_SID';
$auth_token = 'YOUR_TWILIO_AUTH_TOKEN';
$twilio_phone_number = 'YOUR_TWILIO_PHONE_NUMBER'; // Your Twilio phone number
$recipient_phone_number = '7286967427'; // Your recipient's phone number

// Get form data
$name = $_POST['name'];
$phone = $_POST['phone'];
$site = $_POST['site'];
$location = $_POST['location'];

// Compose the message
$message = "New form submission:\nName: $name\nPhone: $phone\nSite: $site\nLocation: $location";

try {
    // Initialize Twilio client
    $client = new Client($account_sid, $auth_token);

    // Send the message
    $client->messages->create(
        $recipient_phone_number,
        array(
            'from' => $twilio_phone_number,
            'body' => $message
        )
    );

    // Return response
    echo "Message sent successfully!";
} catch (Exception $e) {
    // Handle exceptions
    echo 'Error: ' . $e->getMessage();
}
?>
