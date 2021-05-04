export interface LoginStateI {
  //   loggedIn: boolean;
  //   username: string;
  //   message: string;
  loginMessage: string;
}

const loginInitialState: LoginStateI = {
  //   loggedIn: false,
  //   username: '',
  //   message: 'Test from login state',
  loginMessage: 'Login msg initial state!',
};

export default loginInitialState;
