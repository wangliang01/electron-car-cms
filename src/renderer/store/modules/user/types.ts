export type RoleType = '' | '*' | 'admin' | 'user';
export interface UserState {
  name?: string;
  avatar?: string;
  email?: string;
  storeName?: string;
  phone?: string;
  storeId?: string;
  accountId?: string;
  domicile?: number;
  sex?: string;
  birthday?: string;
  role: RoleType;
}
