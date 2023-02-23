export interface IConfiguration {
  input: NodeJS.ReadStream;
  output: NodeJS.WriteStream;
  prompt: string;
}

export interface IValues {
  a: number;
  b: number;
  c: number;
}