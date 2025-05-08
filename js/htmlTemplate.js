// This is a JavaScript example showing how to generate HTML files from JSON data
// You could run this with Node.js or adapt it for browser use

const fs = require('fs');
const path = require('path');

// Load the JSON data
const blogData = require('./fitness_blogs.json');

// HTML template - this is your base template with placeholders for dynamic content
const htmlTemplate = `<!DOCTYPE html>
<html lang="zxx">

<head>
	<!-- Meta -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="author" content="Awaiken">
	<!-- Page Title -->
    <title>{{TITLE}} - Fitwell</title>
	<!-- Favicon Icon -->
	<link rel="shortcut icon" type="image/x-icon" href="images/favicon.png">
	<!-- Google Fonts Css-->
	<link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&amp;family=Rubik:ital,wght@0,300..900;1,300..900&amp;display=swap" rel="stylesheet">
	<!-- Bootstrap Css -->
	<link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
	<!-- SlickNav Css -->
	<link href="css/slicknav.min.css" rel="stylesheet">
	<!-- Swiper Css -->
	<link rel="stylesheet" href="css/swiper-bundle.min.css">
	<!-- Font Awesome Icon Css-->
	<link href="css/all.min.css" rel="stylesheet" media="screen">
	<!-- Animated Css -->
	<link href="css/animate.css" rel="stylesheet">
    <!-- Magnific Popup Core Css File -->
	<link rel="stylesheet" href="css/magnific-popup.css">
	<!-- Mouse Cursor Css File -->
	<link rel="stylesheet" href="css/mousecursor.css">
	<!-- Main Custom Css -->
	<link href="css/custom.css" rel="stylesheet" media="screen">
</head>
<body>

    <!-- Preloader Start -->
	<my-preloader></my-preloader>
	<!-- Preloader End -->

    <!-- Header Start -->
	<my-header></my-header>
	<!-- Header End -->

    <!-- Page Header Start -->
	<div class="page-header parallaxie">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-12">
					<!-- Page Header Box Start -->
					<div class="page-header-box">
						<h1 class="text-anime-style-2" data-cursor="-opaque">{{TITLE}}</h1>
						<div class="post-single-meta wow fadeInUp">
                            <ol class="breadcrumb">
                                <li><i class="fa-regular fa-user"></i> {{AUTHOR}}</li>
                                <li><i class="fa-regular fa-clock"></i> {{DATE}}</li>
                            </ol>
                        </div>
					</div>
					<!-- Page Header Box End -->
				</div>
			</div>
		</div>
	</div>
	<!-- Page Header End -->

    <!-- Scrolling Ticker Section Start -->
   <my-scrolling>  </my-scrolling>
    <!-- Scrolling Ticker Section End -->

    <!-- Page Single Post Start -->
    <div class="page-single-post">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <!-- Post Featured Image Start -->
                    <div class="post-image">
                        <figure class="image-anime reveal">
                            <img src="{{IMAGE}}" alt="{{TITLE}}">
                        </figure>
                    </div>
                    <!-- Post Featured Image Start -->

                    <!-- Post Single Content Start -->
                    <div class="post-content">
                        <!-- Post Entry Start -->
                        <div class="post-entry">
                            {{CONTENT}}
                        </div>
                        <!-- Post Entry End -->

                        <!-- Post Tag Links Start -->
                        <div class="post-tag-links">
                            <div class="row align-items-center">
                                <div class="col-lg-8">
                                    <!-- Post Tags Start -->
                                    <div class="post-tags wow fadeInUp" data-wow-delay="0.5s">
                                        <span class="tag-links">
                                            Tags:
                                            {{TAGS}}
                                        </span>
                                    </div>
                                    <!-- Post Tags End -->
                                </div>

                                <div class="col-lg-4">
                                    <!-- Post Social Links Start -->
                                    <div class="post-social-sharing wow fadeInUp" data-wow-delay="0.5s">
                                        <ul>
                                            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                    <!-- Post Social Links End -->
                                </div>
                            </div>
                        </div>
                        <!-- Post Tag Links End -->
                    </div>
                    <!-- Post Single Content End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Page Single Post End -->

    <!-- Footer Main Start -->
    <my-footer></my-footer>
    <!-- Footer Main End -->

    <!-- Jquery Library File -->
    <script src="js/jquery-3.7.1.min.js"></script>
    <!-- Bootstrap js file -->
    <script src="js/bootstrap.min.js"></script>
    <!-- Validator js file -->
    <script src="js/validator.min.js"></script>
    <!-- SlickNav js file -->
    <script src="js/jquery.slicknav.js"></script>
    <!-- Swiper js file -->
    <script src="js/swiper-bundle.min.js"></script>
    <!-- Counter js file -->
    <script src="js/jquery.waypoints.min.js"></script>
    <script src="js/jquery.counterup.min.js"></script>
    <!-- Magnific js file -->
    <script src="js/jquery.magnific-popup.min.js"></script>
    <!-- SmoothScroll -->
    <script src="js/SmoothScroll.js"></script>
    <!-- Parallax js -->
    <script src="js/parallaxie.js"></script>
    <!-- MagicCursor js file -->
    <script src="js/gsap.min.js"></script>
    <script src="js/magiccursor.js"></script>
    <!-- Text Effect js file -->
    <script src="js/SplitText.js"></script>
    <script src="js/ScrollTrigger.min.js"></script>
    <!-- YTPlayer js File -->
    <script src="js/jquery.mb.YTPlayer.min.js"></script>
    <!-- Wow js file -->
    <script src="js/wow.min.js"></script>
    <!-- Main Custom js file -->
    <script src="js/function.js"></script>
    <script src="components/footer.js"></script>
    <script src="components/header.js"></script>
    <script src="components/scrooling.js"></script>
    <script src="components/preloader.js"></script>
	<!--  -->
</body>

</html>`;

// Function to generate HTML content from JSON data
function generateHTMLContent(blogPost) {
  // Process the blog content
  let contentHTML = '';
  let delayCounter = 0;
  
  blogPost.content.forEach(item => {
    const delay = delayCounter * 0.2;
    delayCounter++;
    
    switch(item.type) {
      case 'paragraph':
        contentHTML += `<p class="wow fadeInUp" data-wow-delay="${delay}s">${item.text}</p>\n\n`;
        break;
      case 'blockquote':
        contentHTML += `<blockquote class="wow fadeInUp" data-wow-delay="${delay}s">
                <p>${item.text}</p>
            </blockquote>\n\n`;
        break;
      case 'heading':
        contentHTML += `<h2 class="wow fadeInUp" data-wow-delay="${delay}s">${item.text}</h2>\n\n`;
        break;
      case 'list':
        let listItems = '';
        item.items.forEach(listItem => {
          listItems += `                <li>${listItem}</li>\n`;
        });
        contentHTML += `<ul class="wow fadeInUp" data-wow-delay="${delay}s">\n${listItems}            </ul>\n\n`;
        break;
    }
  });
  
  // Process the tags
  let tagsHTML = '';
  blogPost.tags.forEach(tag => {
    tagsHTML += `<a href="#">${tag}</a>\n                                            `;
  });
  
  // Replace placeholders with actual content
  let html = htmlTemplate
    .replace(/{{TITLE}}/g, blogPost.title)
    .replace('{{AUTHOR}}', blogPost.author)
    .replace('{{DATE}}', blogPost.date)
    .replace('{{IMAGE}}', blogPost.image)
    .replace('{{CONTENT}}', contentHTML)
    .replace('{{TAGS}}', tagsHTML);
  
  return html;
}

// Generate HTML files for each blog post
blogData.forEach(blog => {
  const fileName = `blog-${blog.id}.html`;
  const htmlContent = generateHTMLContent(blog);
  
  // Write the HTML file
  fs.writeFileSync(path.join(__dirname, fileName), htmlContent);
  console.log(`Generated ${fileName}`);
});

console.log('All blog HTML files have been generated successfully!');