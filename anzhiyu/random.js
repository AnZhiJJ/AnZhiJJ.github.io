var posts=["C9.html","techdoc1.html","techdoc2.html","catia1.html","pythonbasic1.html","LiteratureReadingNotes1.html","C8.html","pythonbasic7.html","pythonbasic9.html","pythonbasic2.html","pythonbasic3.html","pythonbasic5.html","pythonbasic6.html","pythonbasic11.html","pythonbasic8.html","pythonbasic13.html","pythonbasic15.html","pythonbasic10.html","pythonbasic16.html","pythonbasic4.html","pythonbasic14.html","pythonbasic12.html","pythonadv_OOP_1.html","pythonadv_OOP_2.html","pythonadv_OOP_5.html","pythonadv_OOP_3.html","pythonadv_OOP_4.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};