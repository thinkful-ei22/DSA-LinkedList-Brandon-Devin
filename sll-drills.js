'use strict';
const SLL = require('./sll');

function main (){
  const sll = new SLL();
  // Apollo, Boomer, Helo, Husker, Starbuck

  // sll.insertFirst('Apollo');
  // sll.insertFirst('Boomer');
  // sll.insertFirst('Helo');
  // sll.insertFirst('Husker');
  // sll.insertFirst('Starbuck');


  sll.insertLast('Apollo');
  sll.insertLast('Boomer');
  sll.insertLast('Helo');
  sll.insertLast('Husker');
  sll.insertLast('Starbuck');

  display(sll);

  sll.insertLast('tauhida');

  display(sll);

  sll.remove('squirrel');
  
  sll.insertBefore('Athena', 'Boomer');
  display(sll);

  sll.insertAfter('Hotdog', 'Helo');
  display(sll);

  sll.insertAt('Kat', 2);
  display(sll);

  sll.remove('tauhida');
  display(sll);

  // console.log(getSllSize(sll));

  // console.log(isEmpty(sll));
  
  // const sll2 = new SLL();
  // console.log(isEmpty(sll2));

  // console.log(findPrevious(sll, 'Husker'));

  // console.log(findLast(sll));
  // console.log(findLast(sll2));


  // console.log('Reverse List:');
  // reverseList(sll);
  // display(sll);

  console.log('3rd to last node: ', thirdFromTheEnd(sll));
}

function display (linkedList){
  let curNode = linkedList.head; 

  console.log('Linked List printing: ');

  while (curNode !== null){
    console.log(curNode.value);

    curNode = curNode.next;
  }
}

function getSllSize(linkedList){
  let counter = 0;
  let curNode = linkedList.head;

  while(curNode !== null){
    curNode = curNode.next;
    counter++;
  }
  
  return counter;
}

function isEmpty(linkedList){
  return linkedList.head === null;
}

function findPrevious(linkedList, targetVal){
  let curNode = linkedList.head;

  while(curNode !== null && curNode.next !== null){
    if(curNode.next.value === targetVal)
      return curNode;
    curNode = curNode.next;
  }

  console.log('Linked List: Could not find previous node');
  return null;
}

function findLast(linkedList){
  let curNode = linkedList.head;

  if(curNode === null)
    return curNode; //empty list

  while(curNode.next !== null)
    curNode = curNode.next;

  return curNode;
}

/*  Mystery Program
 *    function WhatDoesThisProgramDo() removes
 *    all duplicate items in a linked list.
 * 
 *    Runtime: Polynomial, O(n^2)
 */


function reverseList(linkedList){
  let curNode = linkedList.head;
  let prevNode = null, nextNode;

  if (curNode === null){
    return curNode;
  }

  while (curNode.next !== null){
   

    nextNode = curNode.next;
    curNode.next = prevNode;
    prevNode = curNode;
    
   
    curNode = nextNode;


  }
  linkedList.head = curNode;
  curNode.next = prevNode;

  return linkedList;
}

function thirdFromTheEnd (linkedList){
  let curNode = linkedList.head;
  let prevTwoNode;
  if (curNode === null || curNode.next === null || curNode.next.next === null){
    return curNode;
  }
  prevTwoNode = curNode;
  curNode = curNode.next.next;

  while (curNode.next !== null)
  {

    curNode = curNode.next;
    prevTwoNode = prevTwoNode.next;

  }

  return prevTwoNode;
}



main();

