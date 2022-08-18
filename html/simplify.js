console.log("He entrado en simplfy.js")
// document.getElementById("simplify")
function getJsonOnline(){
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((res) => {
        let data = "";
        console.log(res)
        data +=
        `
         <div class="flex flex-col justify-between w-full  flex justify-around
                             md:w-[100vw]  md:w-[90vw]">
                             <link rel="link" href="../simplify.html">
                    <h2 class="font-[500] text-[30px] my-[30px] mx-[30px] mb-[20px] font-['Roboto'] text-[#292E47] w-[50%] pt-3 pb-3">${res.title}</h3>
                    
                    <img class="rectangle-1 h-[450px] mb-16" src="../img-index/Rectangle 1.png" alt="rectangle 1" />
                    <p class="my-[0px] mx-[30px] mb-[10px] text-[20px] leading-10 font-['Roboto']">${res.body}</p>
                 </div>
        `;
        document.getElementById("simplify").innerHTML = data;
    })
}
getJsonOnline()