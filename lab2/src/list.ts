import { IFoundNode, INode } from './lab2.types';
import { ListNode } from './list-node';

export class LinkedList {
  constructor(
    private head: INode | null = null,
    private tail: INode | null = null
  ) {}

  append(data: string): void {
    const newNode = new ListNode(data);
    let temp = this.head;
    if (!temp) {
      this.head = newNode;
      newNode.next = this.head;
      this.tail = newNode;
      return;
    }
    while (temp.next !== this.head) {
      temp = temp.next;
    }
    temp.next = newNode;
    newNode.next = this.head;
    this.tail = newNode;
    return;
  }

  insert(idx: number, data: string): void {
    const newNode = new ListNode(data);
    if (idx > this.listSize() || idx < 0) {
      throw new Error('Invalid Input');
    }
    let temp = this.head;
    if (idx == 0) {
      newNode.next = temp;
      this.head = newNode;
      this.tail.next = this.head;
      return;
    }
    while (--idx) {
      if (temp.next !== this.head) temp = temp.next;
    }
    const tempNext = temp.next;
    temp.next = newNode;
    newNode.next = tempNext;
    if (temp === this.tail) this.tail = newNode;
    return;
  }

  getByIndex(idx: number): INode {
    let temp = this.head;
    if (idx > this.listSize() || idx < 0) {
      throw new Error('Invalid Input');
    }
    if (!idx) {
      return this.head;
    }
    while (idx--) {
      if (temp.next !== this.head) temp = temp.next;
    }
    return temp;
  }

  deleteByIndex(idx: number): INode {
    let temp = this.head;
    let prevTemp: INode;

    if (idx > this.listSize() || idx < 0) {
      throw new Error('Invalid Input');
    }

    if (!idx) {
      this.head = temp.next;
      this.tail.next = this.head;
      return;
    }

    while (idx--) {
      if (temp.next !== this.head) {
        prevTemp = temp;
        temp = temp.next;
      }
    }

    prevTemp.next = temp.next;

    if (temp === this.tail) {
      prevTemp.next = this.head;
      this.tail = prevTemp;
    }
    return temp;
  }

  listSize(): number {
    let size = 0;
    let node = this.head;

    if (!node) return 0;

    while (node.next !== this.head) {
      size++;
      node = node.next;
    }
    return ++size;
  }

  print(): void {
    let node = this.head;

    if (!node) return console.log('Empty List!');

    process.stdout.write('HEAD->');
    while (node !== this.tail) {
      process.stdout.write(node.data + '->');
      node = node.next;
    }
    process.stdout.write(this.tail.data + '->END');
    return;
  }

  deleteAll(data: string): void {
    let size = this.listSize();

    for (let i = 0; i < size; i++) {
      const node = this.getByIndex(i);
      if (node.data === data) {
        this.deleteByIndex(i);
        i -= 1;
        size -= 1;
      }
    }
    return;
  }

  clone(): LinkedList {
    const newList = new LinkedList();
    let temp = this.head;

    while (temp.next !== this.head) {
      newList.append(temp.data);
      temp = temp.next;
    }

    newList.append(temp.data);
    return newList;
  }

  reverse(): void {
    let prevNode = this.tail;
    let currentNode = this.head;
    let nextNode: INode;

    if (!currentNode) {
      throw new Error('Can not reverse an empty list!');
    }

    while (currentNode.next !== this.head) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
      this.head = prevNode;
    }

    this.tail = currentNode;
    return;
  }

  findFirst(data: string): IFoundNode {
    const size = this.listSize();
    for (let i = 0; i < size; i++) {
      const node = this.getByIndex(i);
      if (node.data === data) {
        return { node, index: i };
      }
    }
    return { index: -1 };
  }

  findLast(data: string): IFoundNode {
    const size = this.listSize();
    for (let i = size - 1; i >= 0; i--) {
      const node = this.getByIndex(i);
      if (node.data === data) {
        return { node, index: i };
      }
    }
    return { index: -1 };
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    return;
  }

  extend(list: LinkedList): void {
    let temp = list.head;
    while (temp.next !== list.head) {
      this.append(temp.data);
      temp = temp.next;
    }
    this.append(temp.data);
    return;
  }
}
