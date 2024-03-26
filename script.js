/************************************ Logic of hide loader when window is load ************************************************* */
window.addEventListener("load", () =>{
    document.querySelector(".loader").style.display = "none"
})


/************************************ Logic of to fixed navBoottom in top when user page scroll ******************************* */
let navBoottom = document.querySelector(".navBottom");
window.addEventListener("scroll", () =>{
    if(window.scrollY >= 42){
        navBoottom.style.position = "fixed";
        navBoottom.style.top = "-8px";
        navBoottom.style.left = "0px";
        navBoottom.style.borderBottom = "1px solid gold";
        
    }else{
        navBoottom.style.position = "static";
        navBoottom.style.borderBottom = "none";
    };
});

/************************ Logic of create lite box when user click shop gallary view button *********************************** */
let gallaryViewBtn = document.querySelectorAll(".shopGallary .actionBtn");
for(let item of gallaryViewBtn){
    item.addEventListener("click", event =>{
        let currentImg = event.currentTarget.parentElement.parentElement.querySelector("img");
        let lightBoxImg = document.querySelector(".lightBox img");
        lightBoxImg.src = currentImg.src;
        document.querySelector(".lightBox").style.scale = "1";
   
    })
}

document.querySelector(".lightBox .closeBtn").addEventListener("click", () => document.querySelector(".lightBox").style.scale = "0");


/************************************* Logic of show backToTop button when user scroll page *********************************** */
window.onscroll = () =>{
    if(window.scrollY >= 300) document.querySelector(".backToTop").style.display = "block";
    else document.querySelector(".backToTop").style.display = "none"
}

document.querySelector(".backToTop").onclick = () =>{window.scrollTo(0, 0)};

/************************************ Locig of changeViewPortBackground color ************************************************* */
function changeViewModeColor(value){
    document.body.style.background = `var(${value})`;
}




/************************************ Logic of to show & hide mobileManue on click bars *************************************** */
let bars = document.querySelector(".bars");
let closeBtn = document.querySelector(".mobileManuecloseBtn");
bars.classList.add("open");

bars.addEventListener("click", (event) =>{
    if(bars.classList.contains("open")){
        let mobileManue = document.querySelector(".mobileManue");
        mobileManue.style.width= "82%"
        mobileManue.style.padding="15px"
        bars.classList.add("close");
        bars.classList.remove("open");
        event.currentTarget.firstChild.className = "fa-solid fa-xmark";
        
    }else if(bars.classList.contains("close")){
        let mobileManue = document.querySelector(".mobileManue");
        mobileManue.style.width= "0%"
        mobileManue.style.padding="0px"
        bars.classList.add("open");
        bars.classList.remove("close");
        event.currentTarget.firstChild.className = "fa-solid fa-bars-staggered";

    }
})

closeBtn.addEventListener("click", () =>{
    let mobileManue = document.querySelector(".mobileManue");
    mobileManue.style.width= "0%"
    mobileManue.style.padding="0px"
    bars.classList.add("open");
    bars.classList.remove("close");
    bars.firstChild.className = "fa-solid fa-bars-staggered";
})

/************************* Change action button text in Click when use hove the action btn ********************************** */
let actionBtn = document.querySelectorAll(".actionBtn a");
for(let item of actionBtn){
    item.addEventListener("mouseenter", event =>{
        let prevText = item.innerHTML;
        item.innerHTML  = "Click Now";
        item.addEventListener("mouseout",()=>{
            item.innerHTML  = prevText;
        })
       
    } )
    
}

/************************* Logic of filter services items when user filter the items **************************************** */
document.querySelector(".filterCloseBtn").addEventListener("click", () => document.querySelector(".filterBox").style.display = "none");
document.querySelector(".filterBtn button").addEventListener("click", () => document.querySelector(".filterBox").style.display = "block")

let inputs = document.querySelectorAll(".filterForm input");
for(let element of inputs){
    element.addEventListener("click", event =>{
        let currentEleValue = event.currentTarget.value;

        let servicesItems = document.querySelectorAll(".services .item");
        for(let item of servicesItems){
            
            if(item.className.toLocaleLowerCase().includes(currentEleValue.toLocaleLowerCase())){
                item.style.display= "block"
            }else{
                item.style.display= "none"
            }
            

        }

        if(currentEleValue == "item"){
            currentEleValue = "All Items"
        }
        document.querySelector(".currentItem").innerHTML = currentEleValue;

    });
}

