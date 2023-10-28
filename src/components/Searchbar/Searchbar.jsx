import { Component } from 'react';

import { Form, Button, InputList } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({target: {value}}) => {
    this.setState({ value });
  };

  handleSubmitSearch = event => {
    event.preventDefault();
    
    this.props.onSubmit(this.state.value);
    this.setState({value: ''})
  };

  render() {
    const { value } = this.state;

    return (
      <header>
        <Form onSubmit={this.handleSubmitSearch}>
          <Button type="submit">
            <span>Search</span>
          </Button>

          <InputList
            value={value}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </Form>
      </header>
    );
  }
}

export default Searchbar;
