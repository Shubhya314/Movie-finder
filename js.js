const trending=document.getElementById("trending");
const toprated=document.getElementById("top_rated");
const popular_movies=document.getElementById("popular");
async function trends(){
    try{
       const response=await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=23117eab660cf24e666475824cb91ff0");
        if(!response.ok){
            throw new Error("Something went wrong in trends");
        }
       const  final=await response.json();
      return Promise.resolve(final);
    }catch(error){
        return Promise.reject(error);
    }
     
}
async function top_rated(){
    try{
        const response=await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=23117eab660cf24e666475824cb91ff0");
        if(!response.ok){
            throw new Error("Something went wrong in top_rated")
        }
        const final=await response.json();
        return Promise.resolve(final);   
    }catch(error){
        return Promise.reject(error);
    }
}
 function popular() {
    return new Promise((fulfill,reject)=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=23117eab660cf24e666475824cb91ff0")
        .then((response)=>{
          if(!response.ok){
            throw new Error("Something went wrong in trends");
          }
          else{
            return response;
          }
        })
        .then((final)=>{
           return final.json();
        })
        .then((data)=>{
            return fulfill(data);
        })
        .catch((error)=>{
             return reject(error);
        })
    })      
}
trends()
.then((data)=>{
   for(let i=0;i<10;i++){
       const movie_card=document.createElement("div");
        movie_card.classList.add("movie-card");

        const movie_poster=document.createElement("div");
        movie_poster.classList.add("movie-card");

        const img=document.createElement("img");
        img.src="https://image.tmdb.org/t/p/w500"+data.results[i].poster_path;
        img.style.width="150px";
        img.style.height="150px";
         const rating_badge = document.createElement("span");
rating_badge.textContent = "⭐ " + data.results[i].vote_average.toFixed(1);
rating_badge.classList.add("rating-badge");

     movie_poster.append(img);
     movie_poster.append(rating_badge);


   const movie_info = document.createElement("div");
movie_info.classList.add("movie-info");

const movie_title = document.createElement("h3");
movie_title.textContent = data.results[i].title;
movie_title.classList.add("movie-title");

const movie_meta = document.createElement("div");
movie_meta.classList.add("movie-meta");
movie_meta.textContent =
  data.results[i].release_date?.substring(0, 4) || "N/A";

  const details_btn = document.createElement("button");
details_btn.classList.add("details-btn");
details_btn.textContent = "View Details";

          movie_info.append(
  movie_title,
  movie_meta,
  details_btn
);
        movie_card.append(movie_poster);
        movie_card.append(movie_info);
        trending.append(movie_card);
         
         
         }

      

})
.catch((error)=>{
    console.log(error);
})

top_rated()
.then((data)=>{
     for(let i=0;i<10;i++){
       const movie_card=document.createElement("div");
        movie_card.classList.add("movie-card");

        const movie_poster=document.createElement("div");
        movie_poster.classList.add("movie-card");

        const img=document.createElement("img");
        img.src="https://image.tmdb.org/t/p/w500"+data.results[i].poster_path;
        img.style.width="150px";
        img.style.height="150px";
         const rating_badge = document.createElement("span");
rating_badge.textContent = "⭐ " + data.results[i].vote_average.toFixed(1);
rating_badge.classList.add("rating-badge");

     movie_poster.append(img);
     movie_poster.append(rating_badge);


   const movie_info = document.createElement("div");
movie_info.classList.add("movie-info");

const movie_title = document.createElement("h3");
movie_title.textContent = data.results[i].title;
movie_title.classList.add("movie-title");

const movie_meta = document.createElement("div");
movie_meta.classList.add("movie-meta");
movie_meta.textContent =
  data.results[i].release_date?.substring(0, 4) || "N/A";

  const details_btn = document.createElement("button");
details_btn.classList.add("details-btn");
details_btn.textContent = "View Details";

          movie_info.append(
  movie_title,
  movie_meta,
  details_btn
);
        movie_card.append(movie_poster);
        movie_card.append(movie_info);
        toprated.append(movie_card);
         
         
         }
})
.catch((error)=>{
    console.log(error)
})


popular()
.then((data)=>{
         for(let i=0;i<10;i++){
       const movie_card=document.createElement("div");
        movie_card.classList.add("movie-card");

        const movie_poster=document.createElement("div");
        movie_poster.classList.add("movie-card");

        const img=document.createElement("img");
        img.src="https://image.tmdb.org/t/p/w500"+data.results[i].poster_path;
        img.style.width="150px";
        img.style.height="150px";
         const rating_badge = document.createElement("span");
rating_badge.textContent = "⭐ " + data.results[i].vote_average.toFixed(1);
rating_badge.classList.add("rating-badge");

     movie_poster.append(img);
     movie_poster.append(rating_badge);


   const movie_info = document.createElement("div");
movie_info.classList.add("movie-info");

const movie_title = document.createElement("h3");
movie_title.textContent = data.results[i].title;
movie_title.classList.add("movie-title");

const movie_meta = document.createElement("div");
movie_meta.classList.add("movie-meta");
movie_meta.textContent =
  data.results[i].release_date?.substring(0, 4) || "N/A";

  const details_btn = document.createElement("button");
details_btn.classList.add("details-btn");
details_btn.textContent = "View Details";

          movie_info.append(
  movie_title,
  movie_meta,
  details_btn
);
        movie_card.append(movie_poster);
        movie_card.append(movie_info);
        popular_movies.append(movie_card);
         
         
         }
})
.catch((error)=>{
   console.log(error);
})
