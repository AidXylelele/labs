import { LinkedList } from '../src/list';

describe('list', () => {
  let list: LinkedList;
  let secondList: LinkedList;
  const initArray = ['1', '2', '3', '4'];

  beforeAll(() => {
    list = new LinkedList();
    secondList = new LinkedList();
  });

  it('both lists must be empty', () => {
    expect(list.listSize()).toBe(0);
  });

  it('should append new nodes', () => {
    initArray.forEach((item) => {
      list.append(item);
      secondList.append(item);
    });
    expect(list.listSize()).toBe(4);
    expect(secondList.listSize()).toBe(4);
    expect(secondList.listSize() === list.listSize()).toBe(true);
  });

  it('should return a node by its index', () => {
    const { data } = list.getByIndex(3);

    expect(data).toBe('4');

    try {
      list.getByIndex(100);
    } catch (error) {
      expect(error).toHaveProperty('message', 'Invalid Input');
    }
  });

  it('should delete node by index', () => {
    const { data } = list.deleteByIndex(3);

    expect(data).toBe('4');
    expect(list.listSize()).toBe(3);
    expect(list.findFirst('4').index).toBe(-1);
    expect(list.findLast('4').index).toBe(-1);
  });

  it('should reverse list', () => {
    list.reverse();

    expect(list.listSize()).toBe(3);
    expect(list.getByIndex(0).data === '3').toBe(true);
    expect(list.getByIndex(1).data === '2').toBe(true);
    expect(list.getByIndex(2).data === '1').toBe(true);
  });

  it('should insert a node at the begining of list', () => {
    list.insert(0, '10');

    expect(list.listSize()).toBe(4);
    expect(list.getByIndex(0).data).toBe('10');

    try {
      list.insert(100, '100');
    } catch (error) {
      expect(error).toHaveProperty('message', 'Invalid Input');
    }
  });

  it('should find first and last nodes which values = 10', () => {
    list.append('10');

    expect(list.findFirst('10').index).toBe(0);
    expect(list.findLast('10').index).toBe(4);
  });

  it(`should delete all node where data = '10'`, () => {
    list.deleteAll('10');

    expect(list.findFirst('10').index).toBe(-1);
    expect(list.findLast('10').index).toBe(-1);
  });

  it('should clone list', () => {
    const clone = list.clone();
    clone.insert(0, '1');

    expect(list === clone).toBe(false);
    expect(list.listSize() !== clone.listSize()).toBe(true);
    expect(list.getByIndex(0).data !== clone.getByIndex(0).data).toBe(true);
  });

  it('should extend list by another one list', () => {
    list.extend(secondList);
    secondList.insert(0, '1');

    expect(list.listSize() !== secondList.listSize()).toBe(true);
    expect(secondList.listSize() !== list.listSize()).toBe(true);
    expect(list.getByIndex(0).data !== secondList.getByIndex(0).data).toBe(
      true
    );
  });
});
