import { IFoundNode, INode } from './lab2.types';
import { ListNode } from './list-node';

export class LinkedList extends Array<ListNode> {
  append(data: any): void {
    const node = new ListNode(data);
    this.push(node);
  }

  listSize(): number {
    return this.length;
  }

  getByIndex(index: number): INode {
    if (index < 0 || index > this.length) throw new Error('Invalid Input');
    return this[index];
  }

  insert(index: number, data: any): void {
    if (index < 0 || index > this.length) throw new Error('Invalid Input');
    const node = new ListNode(data);
    this.splice(index, 0, node);
  }

  findFirst(data: any): IFoundNode | number {
    for (const node of this) {
      if (node.data === data) {
        return { node, index: this.indexOf(node) };
      }
    }
    return -1;
  }

  findLast(data: any): IFoundNode | number {
    let size = this.listSize();
    let result: IFoundNode;
    for (let i = size - 1; i >= 0; i--) {
      const node = this.getByIndex(i);
      if (node.data === data) {
        return { node, index: i };
      }
    }
    return -1;
  }

  clear() {
    while (this.length > 0) {
      this.pop();
    }
  }

  deleteByIndex(index: number): INode {
    if (index < 0 || index > this.length) throw new Error('Invalid Input');
    const node = this.getByIndex(index);
    this.splice(index, 1);
    return node;
  }

  deleteAll(data: any): void {
    for (let i = 0; i < this.length; i++) {
      const node = this.getByIndex(i);
      if (node.data === data) {
        this.splice(i, 1);
        i--;
      }
    }
  }

  print(): void {
    const result = [];
    for (const node of this) {
      result.push(node.data);
    }
    process.stdout.write('HEAD=>' + result.join(' => ' + '=>END'));
  }

  clone(): LinkedList {
    const clone = new LinkedList();
    for (const node of this) {
      clone.append(node.data);
    }
    return clone;
  }

  extend(list: LinkedList): void {
    for (const node of list) {
      this.append(node.data);
    }
  }
}

const list = new LinkedList();
