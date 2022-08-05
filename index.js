//Event listener?
console.log("He entrado en index.js")
document.getElementById("output")


function getJsonOnline(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((res) => {
        let data = "";
        for (let i = 0; i < 3; i++) {
            data += `
            <div class="bg-white flex flex-col justify-between w-[33%] flex justify-around
                        md:w-[100vw]  md:w-[90vw]">
                        <link rel="link" href="../simplify.html">
                <img class="rectangle-1 w-full" src="img-index/Rectangle 1.png" alt="rectangle 1" />
                <h3 class="font-[500] text-[24px] my-[30px] mx-[30px] mb-[20px]">${res[i].title}</h3>
                <p class="my-[0px] mx-[30px] mb-[10px] text-[17px] leading-5">${res[i].title}</p>
                <a class="text-[#072ac8] m-[30px] font-[500] text-[17px]" href="/html/simplify.html">Learn More</a>
            </div>
            `;

        }
        // res.forEach((article) => {
        //     data += `
        //     <div class="bg-white flex flex-col justify-between w-[33%] flex justify-around
        //                 md:w-[100vw]  md:w-[90vw]">
        //         <img class="rectangle-1" src="img-index/Rectangle 1.png" alt="rectangle 1" />
        //         <h3 class="font-[500] text-[24px] my-[30px] mx-[30px] mb-[20px]">${article.title}</h3>
        //         <p class="my-[0px] mx-[30px] mb-[10px] text-[17px] leading-5">${article.title}</p>
        //         <a class="text-[#072ac8] m-[30px] font-[500] text-[17px]" href="#">Learn More</a>
        //     </div>
        //     `;
            
        // }); 
        document.getElementById("output").innerHTML = data;
    })
}