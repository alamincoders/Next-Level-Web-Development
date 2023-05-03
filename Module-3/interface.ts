interface IUser {
  id: string;
  name: string;
  email: string;
  phone: number;
  address: {
    city: string;
    zip_code: number;
  };
}

const User: IUser = {
  id: "01",
  name: "John",
  email: "john@example.com",
  phone: 2475,
  address: {
    city: "San Francisco",
    zip_code: 7057,
  },
};
