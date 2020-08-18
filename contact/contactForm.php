<?php
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $visitor_email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    $email_from = $visitor_email;
    $email_subject = "New Enquiry";
    $email_body = "User First Name: $fname.\n".
                    "User Last Name: $lname.\n".
                        "User Email: $visitor_email.\n".
                            "User Telephone: $phone.\n".
                                "User Message: $message.\n";

    $to = "will_constable@msn.com";

    $headers = "From: $email_from \r\n";

    $headers = "Reply-To: $visitor_email \r\n";

    mail($to, $email_from, $email_subject, $email_body, $headers);

    header("Location: ../index.html");
?>