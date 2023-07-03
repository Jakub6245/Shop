import { useSelector } from "react-redux";
import IState from "../../../../types/StateType";
import { ChangeEvent } from "react";
import { boundLoginActions } from "../../../../hooks/useBindActionsToDispatch";
import { useNavigate } from "react-router-dom";
import "../../../../styles/ButtonStyles.scss";
import "./LoginForm.scss";

const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  boundLoginActions.changeName({ name: value });
};

const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  boundLoginActions.changePassword({ password: value });
};

const LoginForm = () => {
  const loginState = useSelector((state: IState) => state.login);
  const usersState = useSelector((state: IState) => state.users);

  const navigate = useNavigate();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const checkUserName = usersState.find((el) => el.name === loginState.name);
    if (checkUserName && checkUserName.password === loginState.password) {
      boundLoginActions.logIn();
      navigate("/");
    }
    boundLoginActions.firstLogIn();
  };

  return (
    <div className="login">
      <h1>Log in</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        Name:
        <input
          className="login__input"
          value={loginState.name}
          onChange={handleNameInputChange}
          name="name"
          type="text"
        />
        Password:
        <input
          className="login__input"
          value={loginState.password}
          onChange={handlePasswordInputChange}
          name="password"
          type="text"
        />
        <input className="button" value="Send" type="submit" />
      </form>
      {!loginState.isFirstLogIn && <p>Wrong name or password</p>}
    </div>
  );
};

export default LoginForm;
