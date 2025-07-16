// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

const list1 = [0];
const list2 = [0];
// var mergeTwoLists = function (list1, list2) {
//   let list = list1.concat(list2);
//   let updatedList = list;
//   console.log("concat list", updatedList);

//   let mergedList = [];
//   while (mergedList.length < list.length) {
//     let min = Math.min(...updatedList);
//     console.log("min", min);
//     mergedList.push(min);
//     console.log("mergedList", mergedList);

//     const indexofMin = updatedList.indexOf(min);
//     console.log("indexofMin", indexofMin);

//     updatedList = updatedList.filter((num, index) => index != indexofMin);
//     console.log("updatedList", updatedList);
//   }
//   return mergedList;
// };

var mergeTwoLists = function(list1, list2) {
  // نود فرضی برای شروع (برای ساده‌تر شدن ساخت لیست جدید)
  let dummy = new ListNode(-1);
  let current = dummy;

  // تا وقتی هر دو لیست خالی نیستند
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;       // گره کوچکتر را به لیست نهایی وصل کن
      list1 = list1.next;         // برو به گره بعدی
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;       // برو به انتهای لیست نهایی
  }

  // اگر یکی از لیست‌ها هنوز ادامه داشت، همون رو وصل کن
  current.next = list1 !== null ? list1 : list2;

  // head واقعی لیست ترکیبی از بعد از dummy شروع میشه
  return dummy.next;
};
console.log(mergeTwoLists(list1, list2));
