// let height = Number(prompt('輸入你的身高，以公分計算')) / 100;
// let weight = Number(prompt('輸入你的體種，以公斤計算'));
const bmi_data_xx = [];

function bmiCalc_42(height, weight) {
    return weight/(height*height);
}

function bmiCalcResult_42(height,weight){
    let bmi = bmiCalc_42(height,weight).toFixed(2);
    console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi}`);
}



function bmiCalcSuggest_42(height, weight) {
    let bmi = bmiCalc_42(height,weight).toFixed(2);
    console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi}`);
}

bmiCalcResult_42(1.75, 55);
bmiCalcResult_42(1.75, 55);
bmiCalcResult_42(1.75, 55);

function bmi_normal_low(height){
    return 18.5 * height*height;
}

function bmi_normal_high(height){
    return 24 * height*height;
}

function bmiCalcSuggest_42(height, weight){
    let bmi = bmiCalc_42(height, weight).toFixed(2);
    if(bmi<18.5){
        let normal_low = bmi_normal_low(height);
        console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi}which is ${(normal_low-weight).toFixed(2)} kg lower than normal.`);
    }else if(bmi<=24){
        console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi}which is normal.`);
    }else{
        let normal_high = bmi_normal_high(height);
        console.log(`For (h/w) = (${height}/${weight}), the BMI = ${bmi}which is ${(weight-normal_high).toFixed(2)} kg lower than normal.`);
    }
}





bmiCalcSuggest_42(1.75, 55);
bmiCalcSuggest_42(1.75, 70);
bmiCalcSuggest_42(1.75, 85);
