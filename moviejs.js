const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log(id);
const recent_pic=document.getElementById("img");
const movie_details=document.getElementById("movie_details");
async function details() {
      try{
        const response=await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=23117eab660cf24e666475824cb91ff0`);
         if(!response.ok){
           throw new Error("Something went wrong");    
         }
        const final=await response.json();
          return Promise.resolve(final);

      }catch(error){
         return Promise.reject(error);
      }
        
}

details()
.then((data)=>{
       const img2=document.createElement("img");
       img2.src="https://image.tmdb.org/t/p/w500"+data.poster_path;
       img2.style.width="200px";
       img2.style.height="250px";

       recent_pic.append(img2);

       const movie_name=document.createElement("h3");
       movie_name.style.color="#3b82f6";
       movie_name.textContent=data.original_title;
       
       movie_details.append(movie_name);

       
       const year=document.createElement("span");
       year.style.display="inline-block";
       year.textContent=data.release_date.substring(0,4);
       year.style.color="lightgray";
       year.style.marginTop="10px"
      movie_details.append(year);

      const rating=document.createElement("span");
      rating.style.color="white"
      rating.style.display="inline-block";
      rating.textContent="⭐ "+data.vote_average;
      rating.style.marginLeft="10px"
      movie_details.append(rating);

      const overview=document.createElement("div");
      overview.style.color="lightgray";
      overview.textContent=data.overview;
      overview.style.marginTop="20px"
      movie_details.append(overview);

      const genre=document.createElement("div");
      genre.style.color="lightblue";
      genre.textContent="Genre:"+" "+data.genres[0].name+" "+data.genres[1].name;
      genre.style.marginTop="15px"
      movie_details.append(genre);
      
})  
.catch((error)=>{
    console.log(error);
})
