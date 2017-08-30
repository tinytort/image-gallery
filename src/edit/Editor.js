import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultBunny = {
    title: '',
    description: '',
    url: ''
};


export default class Editor extends Component {

    constructor(props) {
        super(props);
        // const { bunny } = props;
        this.state = {};
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        });
    }

    handleSubmit = () => {
        let { title, description, url } = this.state;
        this.props.onSave({ title, description, url });
        this.setState({ ...defaultBunny });
    }

    resetBunny = () => {
        this.setState({ ...defaultBunny });
    }

    render() {

        const { title, description, url } = this.state;
        const { onAdd } = this.props;
        if(this.props.addBunny) {
            return (
                <section>
                <h4> Add new bunbun </h4>
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        this.handleSubmit();
                    }}
                    >
                    <label>
                        title:
                    <input name="title" value={title}
                            onChange={({ target }) => {
                                this.handleChange(target.name, target.value)
                            }} />
                    </label>
                    <label>
                        description:
                    <input name="description" value={description}
                            onChange={({ target }) => {
                                this.handleChange(target.name, target.value)
                            }} />
                    </label>
                    <label>
                        url:
                    <input name="url" value={url}
                            onChange={({ target }) => {
                                this.handleChange(target.name, target.value)
                            }} />
                    </label>
                    <button type="reset" > Reset </button>
                    <button type="submit"> Save </button>
                </form>
            </section>
        )
    }
        return <div></div>
    }
}