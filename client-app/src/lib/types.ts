export type PostType = {
  id?: string;
  image?: string;
  author?: string;
  title: string;
  date: Date;
  content: string;
  category: string;
};

export type CreatorType = {
  name: string;
  image: string;
  stack: string;
  execute: boolean;
};
export type UserType = {
  id?: number;
  image?: string;
  fName?: string;
  lName?: string;
  about?: string;
  occupation?: string;
  company?: string;
  username: string;
  email: string;
  password?: string;
  displayName: string;
};

export type LogInType = {
  email: string;
  password: string;
};

export type LinkType = {
  title: string;
  link: string;
};

export type portType = {
  height: number;
  width: number;
};

export type categoryType = {
  name: string;
  value: string;
};
