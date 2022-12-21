export type PostType = {
  id?: string;
  image?: string;
  author?: string;
  title: string;
  date: Date;
  content: string;
  category: string;
};

export type UserType = {
  id: number;
  image?: string;
  fName: string;
  lName: string;
  about: string;
  occupation: string;
  company: string;
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
