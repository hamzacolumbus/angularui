export class User {
  name?: string;
  adress: string;
  pw_2?: string;
  pw: string;
  constructor(name: string, adress: string, pw_2: string, pw: string) {
    (this.name = name), (this.adress = adress);
    (this.pw = pw), (this.pw_2 = pw_2);
  }
}

export interface Create_dto {
  adress: string;
  pw: string;
}

export interface Registartion_dto {
  registation: {
    applicationId: 'ac0e2e01-72d0-4c1d-a1e3-7fc1be4fd0d2';
  };
}
