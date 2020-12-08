<!DOCTYPE html>
<html lang="en">

<!--This page is for displaying the form for signing up for an account -->

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <link rel="stylesheet" href="../assets/css/indexStyle.css">

    <title>Newsly</title>
    <meta content="" name="descriptison">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="../images/NewLogo.png" rel="icon">
    <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Dosis:300,400,500,,600,700,700i|Lato:300,300i,400,400i,700,700i" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../assets/vendor/icofont/icofont.min.css" rel="stylesheet">
    <link href="../assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="../assets/vendor/venobox/venobox.css" rel="stylesheet">
    <link href="../assets/vendor/line-awesome/css/line-awesome.min.css" rel="stylesheet">
    <link href="../assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="../assets/css/style.css" rel="stylesheet">

    <!-- =======================================================
    * Template Name: Butterfly - v2.1.0
    * Template URL: https://bootstrapmade.com/butterfly-free-bootstrap-theme/
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== -->
</head>
<body>
<!-- ======= Header ======= -->
<header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

        <a href="index.html" class="logo mr-auto"><img src="../assets/img/NewslyLogo.png" alt="" class="img-fluid"></a>
        <!-- Uncomment below if you prefer to use text as a logo -->
        <!-- <h1 class="logo mr-auto"><a href="index.html">Butterfly</a></h1> -->

        <nav class="nav-menu d-none d-lg-block">
            <ul>
                <li ><a href="index.html">Home</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li class="active"><a href="signUp.php">Sign Up</a></li>
                <li ><a href="career.html">Career</a></li>
                <li>
                    <a href="https://www.linkedin.com/company/newslymeapp/">
                        <img style="width: 20px; height: 20px" src="../images/linkedin.png" alt="linkedIn">
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCHwV8RL-pBRdP728IsmBaVQ">
                        <img style="width: 20px; height: 20px" src="../images/youtubeIcon.png" alt="Youtube">
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/Newsly13">
                        <img style="width: 20px; height: 20px" src="../images/twitter.png" alt="twitter">
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/newslymeapp/">
                        <img style="width: 20px; height: 20px" src="../images/instagram.png" alt="instagram">
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/NewslyMeApp/">
                        <img style="width: 20px; height: 20px" src="../images/facebook.png" alt="facebook">
                    </a>
                </li>


            </ul>
        </nav><!-- .nav-menu -->

    </div>
</header><!-- End Header -->
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<!-- beginning of sign up -->
<div class="container" id="main">
    <h4>NEWSLY</h4>
    <p>Get only what is relevant to you, whispered in your ear while you commute, workout, cook, clean or relax</p>
    <p>Newsly is an audio aggregator cross-platform application</p>
    <form action="thankyou.html" method="POST">
        <div class="container" id="loginForm">
            <label for="fName">First Name</label><br>
            <input type="text" id="fName" name="userName"><br>
            <label for="lName">Last Name</label><br>
            <input type="text" id="lName" name="userName"><br>
            <label for="email">Email</label><br>
            <input type="text" id="email" name="userName"><br>
            <label for="password">Password</label><br>
            <input type="text" id="password" name="userName"><br>
            <label for="passConfirm">Confirm Password</label><br>
            <input type="text" id="passConfirm" name="password"><br>
        </div>
        <input type="submit" name="Submit" value="submit">
    </form>
    <div class="container" id="videoBox">

    </div>

    <div class="container" id="footerContainer">
        <p>©2020 by Newsly Technologies Inc.</p>
    </div>
</div>
<!-- end of sign up -->
</body>

</html>
