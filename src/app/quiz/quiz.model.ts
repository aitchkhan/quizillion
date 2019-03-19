

export interface Quiz {
  id: string;
  title: string;
  questions?: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: Option;
}

export interface Option {
  a: string;
  b: string;
  c: string;
  d: string;
}
