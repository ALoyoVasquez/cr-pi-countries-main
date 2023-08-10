export default function formatNumber(floatValue = 0, decimals = 0, multiplier = 1) {
    let floatMultiplied = floatValue * multiplier;
    let stringFloat = floatMultiplied + "";
    let arraySplitFloat = stringFloat.split(".");
    let decimalsValue = "0";
    if (arraySplitFloat.length > 1) {
        decimalsValue = arraySplitFloat[1].slice(0, decimals);
    }
    let integerValue = arraySplitFloat[0];
    let arrayFullStringValue = [integerValue, decimalsValue];
    let FullStringValue = arrayFullStringValue.join(".")
    let floatFullValue = parseFloat(FullStringValue) + "";
    let formatFloatFullValue = new Intl.NumberFormat('es-ES', { minimumFractionDigits: decimals }).format(floatFullValue);
    return formatFloatFullValue;
}

// console.log(

//     formatNumber(16482421, 0, 1)
// );