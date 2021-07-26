
interface IUserStore {
  jwt: string;
  apps: [{
    desc: string;
    name: string;
    title: string;
  }]
}

const USER_STORE_KEY = 'USER_STORE';

class UserStore {
  private store: IUserStore | null;
  constructor() {
    this.store = JSON.parse(sessionStorage.getItem(USER_STORE_KEY)||'{}');
  }

  public setStore = (value:IUserStore) => {
    this.store = value;
    sessionStorage.setItem(USER_STORE_KEY, JSON.stringify(value))
  }

  public getToken = () => {
    return this.store?.jwt;
  }

  public hasPermission = (module: string) => {
    return this.store?.apps.some(({name}) => module === name);
  }

  public clear = () => {
    this.store = null;
    sessionStorage.removeItem(USER_STORE_KEY);
  }
}

const userStore = new UserStore();

export default userStore;