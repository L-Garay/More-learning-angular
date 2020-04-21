export interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  image: string;
  isActive?: boolean;
  registeredDate: any;
  address?: {
    /* NOTE adding a ? after a property means that it is optional when creating a new object*/
    street?: string;
    city?: string;
    state?: string;
  };
}
