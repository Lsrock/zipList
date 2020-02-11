//Time: 8:02

const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

function zipList(list1, list2) {
  const resultList = [];
  for (let i = 0; i < list1.length; i++){
    resultList.push(list1[i], list2[i]);
  }
  return resultList;
}

console.log(zipList(testList1, testList2));

function zipListSimple(list1, list2) {
  let zipL = _.zip(list1, list2);
  return _.flatten(zipL);
}

console.log(zipListSimple(testList1, testList2));