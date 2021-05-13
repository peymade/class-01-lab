import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="modal">
        <Modal id="body" show={this.props.showVar} onHide={() => this.props.nowHide()}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.src} width="600px"/>
            <p>{this.props.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.props.nowHide()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.props.nowHide()}>
              Bye!
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;
