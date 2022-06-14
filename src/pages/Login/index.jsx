
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

