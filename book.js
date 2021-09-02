const loadBook=()=>{
    const searchfield =document.getElementById("search-field");
    const searchfieldtex =searchfield.value ;

    searchfield.value="";
   /*  error part */
   const errorhandle =document.getElementById("error-handle");
   errorhandle.textContent="";
  if(searchfieldtex== "" ){
    const h1 =document.createElement("h1");
    h1.style.color="red";
    h1.style.textAlign="center";
    h1.innerText="sorry pls write something"
    errorhandle.appendChild(h1);
  }
  else{
    const url=`
  https://openlibrary.org/search.json?q=${searchfieldtex}   
  `;
  fetch(url)
  .then(res => res.json())
  .then(data => displayloadbook(data.docs));
  }

  
    const url=`
    https://openlibrary.org/search.json?q=${searchfieldtex}   
    `;
    fetch(url)
    .then(res => res.json())
    .then(data => displayloadbook(data.docs));

};



const displayloadbook=(books)=>{

     const searchresult =document.getElementById("search-result");
     searchresult.innerText="";


     if(books.length== 0){
         searchresult.innerText=" Sorry to say  wrong choice "
         searchresult.style.color="red";
         searchresult.style.paddingLeft="350px";
     }
     books.forEach(book => {
        //  console.log(book);
        const div =document.createElement("div");
        div.classList.add("col");
        const imgurl =`
        https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg
        `
        div.innerHTML=`
        <div class="card  "row row-cols-1 row-cols-md-3 g-4"">
        <img style="height: 350px;" src="${imgurl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick="loadimgdetails('${book.key}')">see details</button>
        </div>
      </div>      
        `;
        searchresult.appendChild(div);
         
     });
};


const loadimgdetails=(details)=>{
// console.log(details);

    const urld=`
    https://openlibrary.org/search.json?q=${details}
    `;
     fetch(urld)
     .then(res => res.json())
     .then(data =>displayimgdetails(data.docs[0]));
    

};


const displayimgdetails=(bookdetails)=>{
    // console.log(bookdetails)
 const bookdetailes =document.getElementById("book-details");

 bookdetailes.textContent="";

 


  const bookdiv =document.createElement("div");
  bookdiv.classList.add("card");
  
  bookdiv.innerHTML=`
  
    <h5 class="card-title">${bookdetails.title}</h5>
     <h5>${bookdetails.publish_date}</h5>
     <h6>${bookdetails.publisher}</h6>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  `;
  bookdetailes.appendChild(bookdiv);
 
     

};