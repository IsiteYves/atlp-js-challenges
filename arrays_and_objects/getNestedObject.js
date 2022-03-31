const myArr=["Patrick wayne, 30", "lil wayne, 32","Eric mimi, 21","Dodos deck, 21","Alien Dwine, 22",
"Patrick wayne, 33","Patrick wayne, 100","Patrick wayne, 40"];
function returnNestedObject(arr) {
    let returnArr=[];
    for(let i=0;i<arr.length;i++) {
        let splittedData=arr[i].split(", ");
        let firstPart=splittedData[0].split(" ");
        let age=parseInt(splittedData[1]);
        returnArr[i]={
            [firstPart[0].toLowerCase()]: {
                "second-name": firstPart[1],
                age
            }
        }
    }
    return returnArr;
}
console.log(returnNestedObject(myArr));