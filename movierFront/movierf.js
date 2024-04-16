let MovieObject = {

    getall: function(){
       
        $.ajax({
            type: "GET",
            url: "http://localhost:8000/all/"

        }).done(function(response){
            
            console.log(response.result)
            movielist = response.result
            console.log(movielist[0].title)

            // topdiv = document.createElement("div")
            // topdiv.style = 'column-count:5'
            // document.body.appendChild(topdiv)
            topdiv=document.getElementById('alldiv')

        // for(let i=0; i<=10; i++){
        movielist.forEach(movie => {
            cmovie = document.createElement('div')
            cmovie.className = "card"
        
            mimg = document.createElement("img")
            mimg.className = "card-img-top"
            mimg.src = movie.poster_path
            mimg.onclick = function(){
                window.location.href = movie.url
            }
            mimg.onmouseover = function(){
                mimg.style.cursor = "pointer"
            }
            mimg.addEventListener("mouseover", function() {
                mimg.style.cursor = "pointer";
            });
            

            cmovie.appendChild(mimg)
            topdiv.appendChild(cmovie)
        });
        }

        ).fail();

    },
    getgenres: function(){ 
    
        genre = document.getElementById("sgenre").value.toLowerCase()

        $.ajax({
            type: "GET",
            url: "http://localhost:8000/genres/"+genre

        }).done(function(response){
            
            console.log(response.result)
            movielist = response.result
            console.log(movielist[0].title)

            // topdiv = document.createElement("div")
            // topdiv.style = 'column-count:5'
            // document.body.appendChild(topdiv)
            topdiv=document.getElementById('genrediv')
            //계속 추가 x 방법1
            //topdiv.innerHTML = ""
            // // 방법 2
            while(topdiv.firstChild){
            topdiv.removeChild(topdiv.firstChild);
            }


        // for(let i=0; i<=10; i++){
            movielist.forEach(movie => {
                cmovie = document.createElement('div')
                cmovie.className = "card"
        
                mimg = document.createElement("img")
                mimg.className = "card-img-top"
                mimg.src = movie.poster_path
                mimg.onclick = function(){
                    window.location.href = movie.url
                }
                mimg.onmouseover = function(){
                    mimg.style.cursor = "pointer"
                }
                mimg.addEventListener("mouseover", function() {
                    mimg.style.cursor = "pointer";
                });
            

                cmovie.appendChild(mimg)
                topdiv.appendChild(cmovie)

            
            
        });
        }
         
        ).fail();
       

    },
    getitem: function(){
       
        $.ajax({
            type: "GET",
            url: "http://localhost:8000/item-based/"+"160"
        }).done(function(response){
            
            console.log(response.result)
            movielist = response.result
            console.log(movielist[0].title)

            // topdiv = document.createElement("div")
            // topdiv.style = 'column-count:5'
            // document.body.appendChild(topdiv)
            topdiv=document.getElementById('itemdiv')
            while(topdiv.firstChild){
                topdiv.removeChild(topdiv.firstChild);
                }

        // for(let i=0; i<=10; i++){
        movielist.forEach(movie => {
            cmovie = document.createElement('div')
            cmovie.className = "card"
        
            mimg = document.createElement("img")
            mimg.className = "card-img-top"
            mimg.src = movie.poster_path
            mimg.onclick = function(){
                window.location.href = movie.url
            }
            mimg.onmouseover = function(){
                mimg.style.cursor = "pointer"
            }
            mimg.addEventListener("mouseover", function() {
                mimg.style.cursor = "pointer";
            });
            

            cmovie.appendChild(mimg)
            topdiv.appendChild(cmovie)
        });
        }

        ).fail();

    },
    getuser: function(){
       
        $.ajax({
            type: "GET",
            url: "http://localhost:8000/user-based/?"+"params = 1:5&params=2:5"

        }).done(function(response){
            
            console.log(response.result)
            movielist = response.result
            console.log(movielist[0].title)

            // topdiv = document.createElement("div")
            // topdiv.style = 'column-count:5'
            // document.body.appendChild(topdiv)
            topdiv=document.getElementById('userdiv')

        // for(let i=0; i<=10; i++){
        movielist.forEach(movie => {
            cmovie = document.createElement('div')
            cmovie.className = "card"
        
            mimg = document.createElement("img")
            mimg.className = "card-img-top"
            mimg.src = movie.poster_path
            mimg.onclick = function(){
                window.location.href = movie.url
            }
            mimg.onmouseover = function(){
                mimg.style.cursor = "pointer"
            }
            mimg.addEventListener("mouseover", function() {
                mimg.style.cursor = "pointer";
            });
            

            cmovie.appendChild(mimg)
            topdiv.appendChild(cmovie)
        });
        }

        ).fail();

    
}


}
MovieObject.getall()