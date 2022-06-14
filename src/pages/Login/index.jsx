
    handleChangeForm = ({ target }) => {
        const { name, value } = target;

        this.setState({ [name]: value});
    };

    buttonDisabled = () => {
        const MIN_LENGTH_NAME = 3;
        const { formName } = this.state;
    
        return formName.length >= MIN_LENGTH_NAME;
      };

