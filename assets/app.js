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

