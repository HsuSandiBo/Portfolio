<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width" initial-scale="1.0">
    <title>Photography Website</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    <link rel="stylesheet" href="photography.css">
</head>
<body>
    <div class="bg-image">
        <div class="home-text">
            <h1 class="sunshine-title">Hello! This is Sunshine Photography.</h1>
            <h4>Create your precious memories with our services...</h4>
            <button class="btn btn-light p-3 mt-3" type="summit"><a href="#client-albums" class="text-dark text-decoration-none h5">
                Explore My Photography...</a></button>
        </div>
    </div>

    <div class="menu-bar">
        <nav class="nav navBar">
            <li class="nav-link"><a href="#">HOME</a></li>
            <li class="nav-link"><a href="#about-page">ABOUT US</a></li>
            <li class="nav-link"><a href="#client-albums">CLIENT ALBUMS</a></li>
            <li class="nav-link"><a href="#contact">CONTACT</a></li>
        </nav>
        <button class="iconBar"><i class="fa-solid fa-bars fa-2x"></i></button>
    </div>

    <div id="about-page">
        <div class="grid">
            <img src="images/photographer.jpg">
            <div class="aboutUs">
                <h3>About Our Website</h3>
                <p> My name is Miss Alice. Photographer, video creator and graphic designer from Myanmar.
                    My goal is to deliver professional and fresh perspectives to your personal or 
                    commercial needs in this fast-paced content driven world.
                    Whether you are looking to work on an immediate project or 
                    to plan a shoot together in the future, I would love to hear from you and we can go from there.
                    Let’s connect and create!</p>
            </div>
        </div><hr style="border-top: 5px double black;">

        <div class="offer">
            <div class="services">
                <h3>What can we offer for you?</h3>
                <ul>
                    <li>Nature Photography</li>
                    <li>Business Portraits</li>
                    <li>Commercial Photography</li>
                    <li>Events and Family Photos</li>
                    <li>Video Editing and more...</li>
                </ul>
                <a href="#contact" class="booking">Get in Touch</a>
            </div>
            <div><img src="images/service.jpg"></div>
        </div>
    </div><hr style="border-top: 3px dashed black;">

    <div id="client-albums">
        <h1 class="text-center mt-5 album-title">CLIENT ALBUMS</h1>
        <div class="albums">
            <div>
                <a href="albums.html#nature"><img src="images/nature1.jpeg" class="images" id="natureSlide"></a>
                <h3>Nature</h3>
            </div>
            
            <div>
                <a href="albums.html#portraits"><img src="images/portrait1.jpg" class="images"></a>
                <h3>Portraits</h3>
            </div>
            
            <div>
                <a href="albums.html#ceremony"><img src="images/ceremony1.jpg" class="images"></a>
                <h3>Ceremony</h3>
            </div>
        </div>

        <div class="albums">
            <div>
                <a href="albums.html#product"><img src="images/ads1.jpg" class="images"></a>
                <h3>Product Images</h3>
            </div>

            <div>
                <a href="albums.html#travel"><img src="images/travel1.jpg" class="images"></a>
                <h3>Travel</h3>
            </div>

            <div>
                <a href="albums.html#editing"><img src="images/videoEdit.jpg" class="images"></a>
                <h3>Video Editing</h3>
            </div>
        </div>
    </div>

    <div id="contact">
        <div>
            <h2>Let's Talk</h2>
            <p> 5/98 Thiri Yadanar St.Tamu, Sagaing, Myanmar.<br>Tel: 09-165484158</p>
            <form method="post" action="_actions/customerInfo.php">
                <label>First Name</label><br>
                <input type="text" placeholder="Enter Your First Name" name="firstName"><br>

                <label>Last Name</label><br>
                <input type="text" placeholder="Enter Your Last Name" name="lastName"><br>

                <label>Email</label><br>
                <input type="text" placeholder="Enter Your Email" name="email"><br>
                
                <label>Which type of photos you want to take?</label><br>
                <select name="photography">
                    <option value="nature">Nature Photography</option>
                    <option value="portraits">Portraits</option>
                    <option value="ceremony">Ceremony Photography</option>
                    <option value="commercial">Product Images</option>
                    <option value="travel">Travel Photography</option>
                    <option value="videos">Video Editing</option>
                </select><br>
                
                <label>Message</label><br>
                <textarea placeholder="Enter Your Message Here" name="message"></textarea><br>
            
                <button type="submit" class="submitBtn">Send</button>
            </form>
        </div>
    
        <div class="camera"><img src="images/camera.jpg" width="800" height="600"></div>
    </div><hr style="border-top: 5px double black;">

    <footer class="back-btn">
        <a href="#" class="text-decoration-none text-dark"> &#x2b9d;  <br>Back to Top</a><br>
        <a href="https://www.facebook.com"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.tiktok.com"><i class="fa-brands fa-tiktok"></i></a><br>
        <span> &copy; by <a href="index.html" class="text-decoration-none text-warning sunshine">Sunshine Photography</a></span>
    </footer>

    <script>
        var openIcon = document.querySelector('.iconBar');
        // var navItems = document.querySelectorAll('.nav-link');

        openIcon.addEventListener("click", e => {
            if(document.querySelector('.navBar').style.display === 'none'){
                expand(); //block
            }else if(document.querySelector('.navBar').style.display !== 'none'){
                collapse();
        }
        });

        function collapse(){
            document.querySelector('.navBar').style.display = 'none';
            openIcon.innerHTML = '<i class="fa-solid fa-bars fa-2x"></i>';
        }

        function expand(){
            document.querySelector('.navBar').style.display = 'block';
            openIcon.innerHTML = '<i class="fa-solid fa-rectangle-xmark fa-2x"></i>';
        }
    </script>
</body>
</html>