export interface INode {
  data: string;
  next: INode;
}

export interface IFoundNode {
  node?: INode;
  index: number;
}
