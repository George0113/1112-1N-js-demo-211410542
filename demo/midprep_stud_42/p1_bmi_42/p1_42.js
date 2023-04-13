// let height = Number(prompt('輸入你的身高，以公分計算')) / 100;
// let weight = Number(prompt('輸入你的體種，以公斤計算'));


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

// bmiCalcResult_42(1.75, 55);
// bmiCalcResult_42(1.75, 55);
// bmiCalcResult_42(1.75, 55);

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


let lowerCount = 0;
let normalCount = 0;
let higherCount = 0;

const bmi_data_42 = [
    {
        height: 1.75,
        weight: 55,
    },
    {
        height: 1.75,
        weight: 70,
    },
    {
        height: 1.75,
        weight: 85,
    },
];
const bmi_data2_42 = [
    {
        height: 1.75,
        weight: 55,
    },
    {
        height: 1.75,
        weight: 70,
    },
    {
        height: 1.75,
        weight: 85,
    },
    {
        height: 1.75,
        weight: 75,
    },
    {
        height: 1.75,
        weight: 50,
    },
    {
        height: 1.75,
        weight: 75,
    },
    {
        height: 1.75,
        weight: 95,
    },
    {
        height: 1.75,
        weight: 60,
    },
    {
        height: 1.75,
        weight: 85,
    },
    {
        height: 1.75,
        weight: 45,
    },
];

bmi_data_42.forEach((item)=>{
    bmiCalcSuggest_42(item.height,item.weight);
});

bmi_data2_42.forEach((item)=>{
    const bmi = bmiCalc_42(item.height,item.weight);
    if(bmi<18.5){
        lowerCount++;
    }else if(bmi<=24){
        normalCount++;
    }else{
        higherCount++;
    }
})
    
console.log(`
bmi summary:
    lower:${lowerCount}
    normal:${normalCount}
    higher:${higherCount}
`);

// bmiCalcSuggest_42(1.75, 55);
// bmiCalcSuggest_42(1.75, 70);
// bmiCalcSuggest_42(1.75, 85);
