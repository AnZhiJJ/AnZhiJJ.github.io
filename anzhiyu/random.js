var posts=["Techdoc_1.html","C9.html","C8.html","Pybasic_1.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};