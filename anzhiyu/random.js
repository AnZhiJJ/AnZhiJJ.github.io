var posts=["techdoc1.html","C9.html","C8.html","techdoc2.html","pythonbasic3.html","pythonbasic1.html","pythonbasic2.html","pythonbasic4.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};