/**
 * Blog Loader for Fitwell
 * Handles blog listing with pagination and related posts
 * CSP-friendly version
 */

document.addEventListener('DOMContentLoaded', function() {
    // Use the blog data from paste.txt instead of fetching from a file
    // This solves the 404 error by using data we already have
    const blogData = [
        {
            "id": "1",
            "title": "10 Effective Exercises for Weight Loss",
            "author": "Admin",
            "date": "9 Mar 2025",
            "image": "images/post-1.jpg",
            "tags": ["Fitness", "Training", "Workout"],
            "content": [
                "Our blog is a collection of inspiring fitness stories that showcase the power of perseverance and determination. From beginners to seasoned athletes, these real-life journeys highlight the challenges and triumphs people face on their fitness paths.",
                "In addition to personal stories, we provide expert tips on a wide range of topics, including effective workout routines, nutrition advice, and strategies for staying motivated.",
                "Our blog combines motivating fitness stories and practical advice to help you stay on track.",
                "Our blog is designed to inspire and guide you through your fitness journey. Featuring a combination of real-life success stories and expert tips, we provide motivation and practical advice.",
                "Now that you've read the inspiring stories and expert tips, it's time to take action. Whether you're just beginning or looking to enhance your current fitness routine, our blog will help guide you.",
                "Achieving weight loss and maintaining body fitness require a combination of proper nutrition and regular exercise."
            ]
        },
        {
            "id": "2",
            "title": "The Ultimate Guide to Meal Preparing for Fitness Success",
            "author": "Coach Maya",
            "date": "12 Mar 2025",
            "image": "images/post-2.jpg",
            "tags": ["Nutrition", "Health", "Diet"],
            "content": [
                "A healthy diet is essential for a healthy life. It's not about strict limitations but about feeling great and having more energy.",
                "Start your day with a healthy breakfast. It jumpstarts your metabolism and gives your body the fuel it needs.",
                "Hydration is key. Drinking water keeps you alert, focused, and supports all bodily functions.",
                "Include a variety of foods in your meals: fruits, vegetables, lean proteins, and whole grains.",
                "Avoid processed foods as much as possible and choose natural alternatives."
            ]
        },
        {
            "id": "3",
            "title": "Discover the Top Benefits of Strength Training for All Ages",
            "author": "Fitness Pro",
            "date": "15 Mar 2025",
            "image": "images/post-3.jpg",
            "tags": ["Motivation", "Fitness", "Mindset"],
            "content": [
                "Staying motivated can be tough. The key is to build a routine and stick with it even on low-energy days.",
                "Set small, achievable goals that you can measure and celebrate.",
                "Find a workout buddy or accountability partner to keep you on track.",
                "Listen to music or join fitness challenges online to keep it fun.",
                "Remind yourself why you started and keep your vision clear."
            ]
        },
        {
            "id": "4",
            "title": "Best Recovery Techniques for Muscle Growth",
            "author": "Recovery Expert",
            "date": "18 Mar 2025",
            "image": "images/post-4.jpg",
            "tags": ["Recovery", "Muscle", "Fitness"],
            "content": [
                "Recovery is just as important as your workouts.",
                "Make sure you get enough sleep each night to allow your body to repair.",
                "Use foam rollers, massage, and stretching to ease soreness.",
                "Nutrition plays a vital role in recovery. Eat protein-rich foods after workouts.",
                "Don't overtrain—rest days are critical to long-term progress."
            ]
        },
        {
            "id": "5",
            "title": "Top Home Workouts You Can Do Anytime",
            "author": "Trainer Alex",
            "date": "20 Mar 2025",
            "image": "images/post-5.jpg",
            "tags": ["Home Workout", "Routine", "No Equipment"],
            "content": [
                "Home workouts are perfect for busy people or those without access to a gym.",
                "Bodyweight exercises like push-ups, squats, and lunges can be very effective.",
                "Make use of household items for resistance training.",
                "Create a dedicated space and time for your home workout to build consistency.",
                "Follow along with online classes or YouTube tutorials for extra guidance."
            ]
        },
        {
            "id": "6",
            "title": "Why Mindfulness Matters in Fitness",
            "author": "Dr. Sana",
            "date": "22 Mar 2025",
            "image": "images/post-6.jpg",
            "tags": ["Mindfulness", "Mental Health", "Balance"],
            "content": [
                "Mindfulness helps you stay focused and committed to your fitness goals.",
                "It reduces stress and prevents emotional eating.",
                "Practice mindful breathing before and after your workouts.",
                "Stay present during each rep, each step—it improves form and connection.",
                "Meditation and journaling can support your fitness journey emotionally."
            ]
        },
        {
            "id": "7",
            "title": "The Importance of Hydration in Your Fitness Journey",
            "author": "Hydration Coach",
            "date": "25 Mar 2025",
            "image": "images/post-7.jpg",
            "tags": ["Hydration", "Health", "Wellness"],
            "content": [
                "Staying hydrated is crucial for optimal performance and recovery.",
                "Drink water before, during, and after workouts.",
                "Monitor your urine color to ensure you're hydrated.",
                "Include hydrating foods like fruits and vegetables in your diet.",
                "Limit caffeine and alcohol as they can dehydrate you."
            ]
        }
    ];

    // Determine which page we're on
    const isBlogList = document.getElementById('blog-list');
    const isBlogSingle = document.querySelector('.post-entry');

    if (isBlogList) {
        // We're on the blog list page
        renderBlogList(blogData);
    } else if (isBlogSingle) {
        // We're on a single blog post page
        renderBlogSingle(blogData);
    }
});

/**
 * Renders the blog listing page with pagination
 * @param {Array} blogs - The blog data array
 */
function renderBlogList(blogs) {
    const blogListContainer = document.getElementById('blog-list');
    
    // Get pagination parameters from URL or defaults
    const urlParams = new URLSearchParams(window.location.search);
    const currentPage = parseInt(urlParams.get('page')) || 1;
    const postsPerPage = 6; // Show 6 posts per page
    
    // Calculate pagination values
    const totalPosts = blogs.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = Math.min(startIndex + postsPerPage, totalPosts);
    
    // Clear container
    blogListContainer.innerHTML = '';
    
    // Generate blog cards for current page
    for (let i = startIndex; i < endIndex; i++) {
        const blog = blogs[i];
        const delay = (i - startIndex) * 0.2;
        
        // Create URL-friendly title slug
        const titleSlug = blog.title.toLowerCase()
            .replace(/[^\w\s-]/g, '') 
            .replace(/\s+/g, '-')    
            .replace(/-+/g, '-');    
        
        // Create the blog card
        const blogCard = document.createElement('div');
        blogCard.className = 'col-lg-4 col-md-6';
        
        // Create blog item
        const postItem = document.createElement('div');
        postItem.className = 'post-item wow fadeInUp';
        postItem.setAttribute('data-wow-delay', delay + 's');
        
        // Create featured image
        const featuredImage = document.createElement('div');
        featuredImage.className = 'post-featured-image';
        
        const imageLink = document.createElement('a');
        imageLink.href = 'blog-single.html?id=' + blog.id;
        imageLink.setAttribute('data-cursor-text', 'View');
        
        const figure = document.createElement('figure');
        figure.className = 'image-anime';
        
        const img = document.createElement('img');
        img.src = blog.image;
        img.alt = blog.title;
        
        figure.appendChild(img);
        imageLink.appendChild(figure);
        featuredImage.appendChild(imageLink);
        postItem.appendChild(featuredImage);
        
        // Create post body
        const postBody = document.createElement('div');
        postBody.className = 'post-item-body';
        
        // Create post content
        const postContent = document.createElement('div');
        postContent.className = 'post-item-content';
        
        const title = document.createElement('h2');
        const titleLink = document.createElement('a');
        titleLink.href = 'blog-single.html?id=' + blog.id;
        titleLink.textContent = blog.title;
        title.appendChild(titleLink);
        
        const meta = document.createElement('div');
        meta.className = 'post-meta';
        
        const authorSpan = document.createElement('span');
        const authorIcon = document.createElement('i');
        authorIcon.className = 'fa-regular fa-user';
        authorSpan.appendChild(authorIcon);
        authorSpan.appendChild(document.createTextNode(' ' + blog.author));
        
        const dateSpan = document.createElement('span');
        const dateIcon = document.createElement('i');
        dateIcon.className = 'fa-regular fa-calendar';
        dateSpan.appendChild(dateIcon);
        dateSpan.appendChild(document.createTextNode(' ' + blog.date));
        
        meta.appendChild(authorSpan);
        meta.appendChild(dateSpan);
        
        const excerpt = document.createElement('p');
        excerpt.textContent = blog.content[0].substring(0, 100) + '...';
        
        postContent.appendChild(title);
        postContent.appendChild(meta);
        postContent.appendChild(excerpt);
        
        // Create read more button
        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'post-item-btn';
        
        const readMoreLink = document.createElement('a');
        readMoreLink.href = 'blog-single.html?id=' + blog.id;
        readMoreLink.className = 'readmore-btn';
        readMoreLink.textContent = 'learn more';
        
        buttonDiv.appendChild(readMoreLink);
        
        // Assemble all parts
        postBody.appendChild(postContent);
        postBody.appendChild(buttonDiv);
        postItem.appendChild(postBody);
        blogCard.appendChild(postItem);
        
        // Add to container
        blogListContainer.appendChild(blogCard);
    }
    
    // Create pagination
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'col-12 pagination-container wow fadeInUp';
    paginationContainer.setAttribute('data-wow-delay', '0.5s');
    
    const paginationDiv = document.createElement('div');
    paginationDiv.className = 'pagination';
    
    const paginationList = document.createElement('ul');
    
    // Previous button
    const prevLi = document.createElement('li');
    if (currentPage === 1) {
        prevLi.className = 'disabled';
    }
    
    const prevLink = document.createElement('a');
    prevLink.href = currentPage > 1 ? '?page=' + (currentPage - 1) : '#';
    if (currentPage === 1) {
        prevLink.onclick = function(e) { e.preventDefault(); };
    }
    
    const prevIcon = document.createElement('i');
    prevIcon.className = 'fa-solid fa-chevron-left';
    
    prevLink.appendChild(prevIcon);
    prevLi.appendChild(prevLink);
    paginationList.appendChild(prevLi);
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageLi = document.createElement('li');
        if (i === currentPage) {
            pageLi.className = 'active';
        }
        
        const pageLink = document.createElement('a');
        pageLink.href = '?page=' + i;
        pageLink.textContent = i;
        
        pageLi.appendChild(pageLink);
        paginationList.appendChild(pageLi);
    }
    
    // Next button
    const nextLi = document.createElement('li');
    if (currentPage === totalPages) {
        nextLi.className = 'disabled';
    }
    
    const nextLink = document.createElement('a');
    nextLink.href = currentPage < totalPages ? '?page=' + (currentPage + 1) : '#';
    if (currentPage === totalPages) {
        nextLink.onclick = function(e) { e.preventDefault(); };
    }
    
    const nextIcon = document.createElement('i');
    nextIcon.className = 'fa-solid fa-chevron-right';
    
    nextLink.appendChild(nextIcon);
    nextLi.appendChild(nextLink);
    paginationList.appendChild(nextLi);
    
    paginationDiv.appendChild(paginationList);
    paginationContainer.appendChild(paginationDiv);
    
    // Add pagination after blog list
    blogListContainer.parentNode.appendChild(paginationContainer);
    
    // Re-initialize animations
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }
}

/**
 * Renders a single blog post and related posts
 * @param {Array} blogs - The blog data array
 */
function renderBlogSingle(blogs) {
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');
    
    // Get the path from the URL (for cases where we're using clean URLs)
    const pathSegments = window.location.pathname.split('/');
    const titleSlug = pathSegments[pathSegments.length - 1].replace('.html', '') || null;
    
    // If no ID parameter and no title slug, redirect to blog list
    if (!blogId && !titleSlug) {
        console.error('No blog identifier specified');
        window.location.href = 'blog.html';
        return;
    }
    
    // Get the blog content containers
    const titleElement = document.querySelector('.page-header-box h1');
    const metaElement = document.querySelector('.post-single-meta ol');
    const imageElement = document.querySelector('.post-image img');
    const contentContainer = document.querySelector('.post-entry');
    const tagsContainer = document.querySelector('.post-tags .tag-links');
    
    // Find the blog by ID if present
    let blog = null;
    let blogIndex = -1;
    
    if (blogId) {
        blogIndex = blogs.findIndex(item => item.id === blogId);
        if (blogIndex !== -1) {
            blog = blogs[blogIndex];
        }
    } 
    // If no blog found by ID or no ID present, try to find by title slug
    else if (titleSlug) {
        blogIndex = blogs.findIndex(item => {
            const itemSlug = item.title.toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-');
            return itemSlug === titleSlug;
        });
        if (blogIndex !== -1) {
            blog = blogs[blogIndex];
        }
    }
    
    if (!blog) {
        if (contentContainer) {
            contentContainer.textContent = '';
            
            const errorMessage = document.createElement('p');
            errorMessage.textContent = "Sorry, we couldn't find the blog post you're looking for.";
            
            const returnLink = document.createElement('a');
            returnLink.href = 'blog.html';
            returnLink.className = 'btn';
            returnLink.textContent = 'Return to Blog List';
            
            contentContainer.appendChild(errorMessage);
            contentContainer.appendChild(returnLink);
        }
        return;
    }
    
    // Create a proper title slug from the blog title
    const properTitleSlug = blog.title.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
    
    // Update the URL if it doesn't match the proper slug (and browser supports history API)
    if (window.history.pushState && titleSlug !== properTitleSlug && !titleSlug.includes('.html')) {
        const cleanUrl = `${properTitleSlug}?id=${blog.id}`;
        window.history.replaceState({id: blog.id}, document.title, cleanUrl);
    }
    
    // Update page title
    document.title = `${blog.title} - Fitwell`;
    
    // Update blog header
    if (titleElement) {
        titleElement.textContent = blog.title;
    }
    
    // Update meta information
    if (metaElement) {
        metaElement.innerHTML = ''; // Clear existing content
        
        const authorLi = document.createElement('li');
        const authorIcon = document.createElement('i');
        authorIcon.className = 'fa-regular fa-user';
        authorLi.appendChild(authorIcon);
        authorLi.appendChild(document.createTextNode(' ' + blog.author));
        
        const dateLi = document.createElement('li');
        const dateIcon = document.createElement('i');
        dateIcon.className = 'fa-regular fa-clock';
        dateLi.appendChild(dateIcon);
        dateLi.appendChild(document.createTextNode(' ' + blog.date));
        
        metaElement.appendChild(authorLi);
        metaElement.appendChild(dateLi);
    }
    
    // Update featured image
    if (imageElement) {
        imageElement.src = blog.image;
        imageElement.alt = blog.title;
    }
    
    // Update content
    if (contentContainer) {
        contentContainer.innerHTML = ''; // Clear existing content
        
        blog.content.forEach((paragraph, index) => {
            const p = document.createElement('p');
            p.className = 'wow fadeInUp';
            p.setAttribute('data-wow-delay', (index * 0.2) + 's');
            p.textContent = paragraph;
            contentContainer.appendChild(p);
        });
    }
    
    // Update tags
    if (tagsContainer && blog.tags) {
        tagsContainer.innerHTML = 'Tags: '; // Reset but keep the initial text
        
        blog.tags.forEach((tag, index) => {
            const tagLink = document.createElement('a');
            tagLink.href = 'blog.html?tag=' + tag;
            tagLink.textContent = tag;
            tagsContainer.appendChild(tagLink);
            
            // Add space after each tag except the last one
            if (index < blog.tags.length - 1) {
                tagsContainer.appendChild(document.createTextNode(' '));
            }
        });
    }
    
    // Add related posts section
    addRelatedPosts(blogs, blog, blogIndex);
    
    // Re-initialize WOW.js animations
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }
}

/**
 * Adds related posts section to the blog single page
 * @param {Array} blogs - The blog data array
 * @param {Object} currentBlog - The current blog post
 * @param {number} currentIndex - The index of the current blog in the array
 */
function addRelatedPosts(blogs, currentBlog, currentIndex) {
    // Find existing related posts container or create a new one
    let relatedPostsContainer = document.querySelector('.related-posts');
    let relatedPostsRow;
    
    if (!relatedPostsContainer) {
        const postContent = document.querySelector('.post-content');
        if (!postContent) return;
        
        // Create container
        relatedPostsContainer = document.createElement('div');
        relatedPostsContainer.className = 'related-posts';
        
        // Create heading
        const heading = document.createElement('h3');
        heading.className = 'wow fadeInUp';
        heading.textContent = 'Related Posts';
        
        // Create row
        relatedPostsRow = document.createElement('div');
        relatedPostsRow.className = 'row';
        relatedPostsRow.id = 'related-posts-row';
        
        // Assemble
        relatedPostsContainer.appendChild(heading);
        relatedPostsContainer.appendChild(relatedPostsRow);
        postContent.appendChild(relatedPostsContainer);
    } else {
        relatedPostsRow = document.getElementById('related-posts-row') || relatedPostsContainer.querySelector('.row');
        if (!relatedPostsRow) return;
        relatedPostsRow.innerHTML = ''; // Clear existing content
    }
    
    // Find related posts by tags
    const currentTags = currentBlog.tags || [];
    const relatedPosts = [];
    
    // First, find posts with matching tags
    for (let i = 0; i < blogs.length; i++) {
        if (i === currentIndex) continue; // Skip current blog
        
        const blog = blogs[i];
        const blogTags = blog.tags || [];
        
        // Check if any tags match
        for (let j = 0; j < blogTags.length; j++) {
            if (currentTags.includes(blogTags[j])) {
                // Found a match
                relatedPosts.push(blog);
                break; // No need to check other tags
            }
        }
        
        // Stop if we have enough related posts
        if (relatedPosts.length >= 3) {
            break;
        }
    }
    
    // If we don't have enough related posts, add some random ones
    if (relatedPosts.length < 3) {
        const remainingCount = 3 - relatedPosts.length;
        
        // Get IDs of already selected related posts
        const selectedIds = relatedPosts.map(post => post.id);
        
        // Find random posts that aren't the current post or already selected
        const availablePosts = blogs.filter(blog => 
            blog.id !== currentBlog.id && !selectedIds.includes(blog.id)
        );
        
        // Shuffle array (Fisher-Yates algorithm)
        for (let i = availablePosts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [availablePosts[i], availablePosts[j]] = [availablePosts[j], availablePosts[i]];
        }
        
        // Add the required number of random posts
        for (let i = 0; i < Math.min(remainingCount, availablePosts.length); i++) {
            relatedPosts.push(availablePosts[i]);
        }
    }
    
    // Render related posts
    relatedPosts.forEach((blog, index) => {
        const delay = index * 0.2;
        
        // Create column
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6';
        
        // Create post item
        const postItem = document.createElement('div');
        postItem.className = 'post-item wow fadeInUp';
        postItem.setAttribute('data-wow-delay', delay + 's');
        
        // Create featured image
        const featuredImage = document.createElement('div');
        featuredImage.className = 'post-featured-image';
        
        const imageLink = document.createElement('a');
        imageLink.href = 'blog-single.html?id=' + blog.id;
        imageLink.setAttribute('data-cursor-text', 'View');
        
        const figure = document.createElement('figure');
        figure.className = 'image-anime';
        
        const img = document.createElement('img');
        img.src = blog.image;
        img.alt = blog.title;
        
        // Assemble image section
        figure.appendChild(img);
        imageLink.appendChild(figure);
        featuredImage.appendChild(imageLink);
        
        // Create post body
        const postBody = document.createElement('div');
        postBody.className = 'post-item-body';
        
        // Create post content
        const postContent = document.createElement('div');
        postContent.className = 'post-item-content';
        
        const title = document.createElement('h4');
        const titleLink = document.createElement('a');
        titleLink.href = 'blog-single.html?id=' + blog.id;
        titleLink.textContent = blog.title;
        title.appendChild(titleLink);
        postContent.appendChild(title);
        
        // Create button
        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'post-item-btn';
        
        const readMoreLink = document.createElement('a');
        readMoreLink.href = 'blog-single.html?id=' + blog.id;
        readMoreLink.className = 'readmore-btn';
        readMoreLink.textContent = 'learn more';
        buttonDiv.appendChild(readMoreLink);
        
        // Assemble all parts
        postBody.appendChild(postContent);
        postBody.appendChild(buttonDiv);
        
        postItem.appendChild(featuredImage);
        postItem.appendChild(postBody);
        
        col.appendChild(postItem);
        relatedPostsRow.appendChild(col);
    });
}