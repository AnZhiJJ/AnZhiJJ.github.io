var posts=["catia1.html","C9.html","pythonbasic1.html","pythonbasic7.html","pythonbasic3.html","pythonbasic2.html","pythonbasic9.html","pythonbasic8.html","pythonbasic5.html","pythonbasic13.html","pythonbasic6.html","pythonbasic11.html","pythonbasic12.html","pythonbasic14.html","pythonbasic16.html","pythonbasic10.html","pythonbasic4.html","pythonbasic15.html","LiteratureReadingNotes1.html","techdoc1.html","techdoc2.html","C8.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};