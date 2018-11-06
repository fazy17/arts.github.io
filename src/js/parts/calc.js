function calc() {
    let size = document.getElementsByTagName('select')[0],
        material = document.getElementsByTagName('select')[1],
        othersAmenities = document.getElementsByTagName('select')[2],
        promo = document.querySelector('.promocode'),
        totalInput = document.querySelector('.calc-price'),
        total = 0,
        promoValue = 'IWANTPOPART';

    size.addEventListener('change', function() {
        totalSize = +this[this.selectedIndex].value;

        if (material[material.selectedIndex].value == 'Выберите материал картины' || size[size.selectedIndex].value == 'Выберите размер картины') {
            totalInput.textContent = 'Для расчета нужно выбрать размер картины и материал картины'
        } else {
            total = totalSize + totalMaterial;
            totalInput.textContent = total;

            promoValueCheck(total, total);
        }
        
    });

    material.addEventListener('click', function() {
        totalMaterial = +this[this.selectedIndex].value;

        if (size[size.selectedIndex].value == 'Выберите размер картины' || material[material.selectedIndex].value == 'Выберите материал картины') {
            totalInput.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        } else {
            total = totalSize + totalMaterial;
            totalInput.textContent = total;

            promoValueCheck(total, total);
        }
    });

    othersAmenities.addEventListener('click', function() {
        totalOthersAmenities = +this[this.selectedIndex].value;
        
        if (size[size.selectedIndex].value == 'Выберите размер картины' || material[material.selectedIndex].value == 'Выберите материал картины') {
            totalInput.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        } else {
            if (othersAmenities[othersAmenities.selectedIndex].value == 'Дополнительные услуги') {
                totalOthers = totalSize + totalMaterial;
                totalInput.textContent = totalOthers;
            } else {
                totalOthers = totalSize + totalMaterial + totalOthersAmenities;
                totalInput.textContent = totalOthers;
            }
            
            promoValueCheck(totalOthers, totalOthers);
        }
    });

    promo.addEventListener('change', function() {
        if (othersAmenities[othersAmenities.selectedIndex].value != 'Дополнительные услуги' && this.value == promoValue) {
            totalPromo = totalOthers - ((totalOthers / 100)*30);
            totalInput.textContent = totalPromo;
        } else if (othersAmenities[othersAmenities.selectedIndex].value != 'Дополнительные услуги' ) {
            totalInput.textContent = totalOthers;
        } else {
            totalInput.textContent = total;
        }

    });

    function promoValueCheck(value, dividend) {
        if (promo.value == promoValue) {
            value = value - ((dividend / 100)*30);
            totalInput.textContent = value;
        }
    }
}

module.exports = calc;