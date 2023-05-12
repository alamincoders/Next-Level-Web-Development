export interface IUser {
  id: number;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  email: string;
  phone: string;
  address: {
    present: string;
    permanent: string;
  };
  password: string;
}
