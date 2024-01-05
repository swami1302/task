function showSidebar(){
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.display='flex';
}

function closeSidebar(){
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.display='none';
}

const initSlider=()=>{
    const slideButtons=document.querySelectorAll(".slide-wrapper .slide-button");
    const imageList=document.querySelector(".slide-wrapper .img-list");
    const maxScrollLeft=imageList.scrollWidth-imageList.clientWidth;

    slideButtons.forEach(button=>{
        button.addEventListener("click",()=>{
            // console.log(button);
            const direction=button.id==="prev-slide"?-1:1;
            const scrollAmount =imageList.clientWidth*direction;
            imageList.scrollBy({left:scrollAmount,behavior:"smooth"});
        });
    });

    const handleSlideButtons=()=>{
        slideButtons[1].style.display=imageList.scrollLeft>=maxScrollLeft?"none":"block";
    }
    imageList.addEventListener("scroll",()=>{
        handleSlideButtons();
    });
}

window.addEventListener("load", initSlider);

document.querySelectorAll('.box').forEach(function(box) {
    box.addEventListener('click', function() {
        // Get the id attribute of the clicked box
        let boxId = this.id;

        // Use window.location.href to redirect to the desired HTML page
        // Replace 'target_page.html' with the actual page you want to redirect to
        window.open('./recipe.html?id=' + boxId, '_blank');
    });
});