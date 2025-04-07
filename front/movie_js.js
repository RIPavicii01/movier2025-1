let MovieObject = {
    init: function(){
        // alert("init함수가 불려짐")
    },

    getall: function(){
    //    alert("getall  함수가 불려짐")
    mimg.onmouseover = function(){
        mimg.style.cursor = "pointer"
    }
       $.ajax({
       // 실행할 코드
          type: "GET",
          url: "http://localhost:8000/all",
       }).done(function(response){
       // 성공코드
            console.log(response)
            movielist = response.result

            topdiv = document.createElement("div")
            topdiv.style = "column-count:5"
            document.body.appendChild(topdiv)

            movielist.forEach(movie => {
            cmovie = document.createElement("div")
            cmovie.className = "card"

            mimg = document.createElement("img")
            mimg.className = "card-img-top"
            mimg.src = movie.poster_path
            mimg.onclick = function(){
                // location.herf = movie.url 현재창에서 열기
                window.open(movie.url)
            }
            
            cmovie.appendChild(mimg)
            topdiv.appendChild(cmovie)
                
            });


       }).fail(function(error){
           // 실패코드
           console.log(error)
       });
    }
}

MovieObject.init();
MovieObject.getall();