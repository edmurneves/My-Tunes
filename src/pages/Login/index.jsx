
    handleChangeForm = ({ target }) => {
        const { name, value } = target;

        this.setState({ [name]: value});
    };

