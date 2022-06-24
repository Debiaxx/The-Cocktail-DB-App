const filterOfThree = (arr1, arr2, arr3, arr4) => {
    if (arr1 !== 'None Found' && arr2 !== 'None Found' && arr3 !== 'None Found' && arr4 === "None Found") {
        let res1 = arr1.filter(a1 => arr2.some(a2 => a2.idDrink === a1.idDrink));
        let res = res1.filter(r1 => arr3.some(a3 => a3.idDrink === r1.idDrink));
        return res;
    } else {
        return false;
    }
}

export default filterOfThree;