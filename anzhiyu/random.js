var posts=["techdoc1.html","C9.html","pybasic1.html","C8.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};