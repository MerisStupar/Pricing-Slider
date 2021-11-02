const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider-value");
const sliderFilled = document.querySelector(".slider-filled");
const selector = document.querySelector(".selector");
const pageViews = document.querySelector(".page-views");
const bilingType = document.querySelector(".billing-type");


// Function for slide value
const getPrice = ()=>{
    if(bilingType.checked){
        const discountPrice = slider.value * 0.75;
        sliderValue.innerHTML = discountPrice.toLocaleString('en-us', {
            style: 'currency',
            currency: 'USD',
        });
        return;
    }
    const price = parseInt(slider.value);
    sliderValue.innerHTML = price.toLocaleString('en-us', {
        style: 'currency',
        currency: 'USD',
    });
}

//Input change
slider.addEventListener('input', ()=>{
    
    //Call function to obtain currency value
    getPrice();

    //Calc page views based on slider value input
    if(parseInt(slider.value) === 0){
        const freeVersion = 10000;
        pageViews.innerHTML = freeVersion.toLocaleString();
    }
    else{
        const newValue = slider.value * 10000;
        pageViews.innerHTML = newValue.toLocaleString();
    }

    //Max value
    const maxValue = slider.getAttribute('max');

    //Percentage
    const percentage = (slider.value / maxValue) * 100;
    
    //Slider filled 
    sliderFilled.style.width = `${percentage}%`;

    //Update selector left 
    selector.style.left = `${percentage}%`;
    selector.style.transform = `transtalteX(-${percentage})`;

});

bilingType.addEventListener('change', ()=>{
    getPrice();
})