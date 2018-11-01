function calc() {
    let size = document.getElementsByTagName('select')[0],
        material = document.getElementsByTagName('select')[1],
        othersAmenities = document.getElementsByTagName('select')[2],
        promo = document.querySelector('.promocode'),
        totalInput = document.querySelector('.calc-price'),
        total = 0,
        totalValue = 0,
        sizeValue = 0,
        materialValue = 0,
        othersAmenitiesValue = 0,
        promoValue = 'IWANTPOPART';

    size.addEventListener('change', function() {
        totalSize = size[size.selectedIndex].value;
        console.log(totalSize)
        
    });

    material.addEventListener('click', function() {
        totalMaterial = material[material.selectedIndex].value;
        console.log(totalMaterial)
    });

    othersAmenities.addEventListener('click', function() {
        totalOthersAmenities = othersAmenities[othersAmenities.selectedIndex].value;
        console.log(totalOthersAmenities)
    });

    promo.addEventListener('change', function() {
        if (promo.value == 'IWANTPOPART') {
        
        }
    });
}

module.exports = calc;