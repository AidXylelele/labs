import { INode } from './lab2.types';

export class ListNode implements INode {
  next: INode;
  constructor(public data: string) {
    this.next = null;
  }
}
