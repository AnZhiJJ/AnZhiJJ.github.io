var posts=["pybasic1.html","C9.html","C8.html","pybasic1.html","Techdoc_1.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};