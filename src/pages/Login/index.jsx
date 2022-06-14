import React from "react";
import PropTypes from 'prop-types';

import { createUser } from '../../services/userAPI';

export default class Login extends React.Component {
    state = {
        formName: '',
        loading: false,
    };

    handleChangeForm = ({ target }) => {
        const { name, value } = target;

        this.setState({ [name]: value});
    };

    buttonDisabled = () => {
        const MIN_LENGTH_NAME = 3;
        const { formName } = this.state;
    
        return formName.length >= MIN_LENGTH_NAME;
      };

    onButtonClick = (e) => {
        e.preventDefault();
        const { formName } = this.state;
        const { history } = this.props;

        this.setState(
            { loading: true },
            () => createUser({name: formName})
            .then(() => history.push('search')),
        );
    };

    render() {
        const { formName, loading } = this.state;

        return loading ? (
            <p> Carregando...</p>
        ) : (            
            <div>
                <h1> My Tunes</h1>
                <form>
                    <label htmlFor="login-submit-input">
                        Login:
                        <input
                            name="formName"
                            id="login-submit-button"
                            type="text"
                            value={formName}
                            placeholder="Nome"
                            onChange={this.handleChangeForm}
                        />
                    </label>
                    <button
                        type="submit"
                        onClick={this.onButtonClick}
                        disabled={!this.buttonDisabled()}
                    >
                        Entrar
                    </button>
                </form>
            </div>            
        );
    }
}

Login.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };