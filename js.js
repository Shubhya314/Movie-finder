const trending=document.getElementById("trending");

async function trends(){
    try{
       const response=await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=23117eab660cf24e666475824cb91ff0");
        if(!response.ok){
            throw new Error("Something went wrong");
        }
       const  final=await response.json();
      return final;
    }catch(error){
        return error;
    }
     
}

trends()
.then((data)=>{
   for(let i=0;i<data.result;i++){
       const movie_card=document.createElement("div");
        movie_card.classList.add("movie-card");

        const movie_poster=document.createElement("div");
        movie_poster.classList.add("movie-card");

        const img=document.createElement("img");
        img.src="https://"+data.results[i].poster_path;
        

        const rating_badge=document.createElement("span");
        rating_badge.textContent="⭐"+data.results[i].vote_average;
        rating_badge.classList.add("rating-badge");

        movie_poster.append(img);
        movie_poster.append(rating_badge);

        const movie_info=document.createElement("div");
        movie_info.classList.add("movie-info");

        const movie_title=document.createElement("h3");
        movie_title.textContent=data.results[i].overview;
        movie_title.classList.add("movie-title");

        const movie_meta=document.createElement("p");
        movie_meta.textContent=data.results[i].release_date.substring(0, 4);
        movie_meta.classList.add("movie-meta");

        const movie_overview=document.createElement("p");
        movie_overview.classList.add("movie-overview");
        movie_overview.textContent=data.results[i].overview;
        
        const details_btn=document.createElement("button");
        details_btn.classList.add("details-btn");
        details_btn.textContent="View Details";

        movie_info.append(movie_title);
        movie_info.append(movie_meta);
        movie_info.append(movie_overview);
        movie_info.append(details_btn);

        movie_card.append(movie_poster);
        movie_card.append(movie_info);

        trending.append(movie_card);
   }
})



