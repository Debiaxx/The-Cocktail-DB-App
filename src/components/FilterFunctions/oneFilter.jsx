const filterOfOne = (arr1, arr2, arr3, arr4) => {
    if (arr1 !== 'None Found' && arr2 === "None Found" && arr3 === "None Found" && arr4 === "None Found") {
        let res = arr1;
        return res;
    } else {
        return false;
    }
}

export default filterOfOne;