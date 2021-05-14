import React from 'react';
import Form from 'react-bootstrap/Form';



class SearchForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Label>Choose Number of Horns</Form.Label>

          {/* When there is a change in which of the numbers in the dropdown is selected, pass the value to the function handleSubmit, so that it knows which one was selected */}
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control onChange={this.props.handleSubmit} as="select">
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='100'>100</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div >
    );

  }
}

export default SearchForm;
