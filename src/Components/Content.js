import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Modal from 'react-modal';

export class Content extends Component {

  state = {
    modalIsOpen: false
  }

  pageLoad(e) {
    e.preventDefault();

    browserHistory.push({
      pathname: "page",
      // state: this.props.data
      query: { id: this.props.data.id },

    });
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  };

  closeModal = () => {
    this.setState({modalIsOpen: false});
  };


  render() {
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    return (
      <div className="news-container overflow-hidden col-xs-12 col-sm-6 col-md-4">
        {/*<button >Open Modal</button>*/}
        <Modal
          isOpen={this.state.modalIsOpen}
          style={customStyles}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <div className="panel-heading overflow-hidden">
            <h4 className="col-xs-12"><img src={this.props.pageInfo.picture} className="rounded fanpage-logo"/>{this.props.pageInfo.name}</h4>
          </div>

          <div className="panel-body box">
            <a onClick={this.pageLoad.bind(this)}><img src={this.props.data.picture} className="img-responsive col-xs-6" alt="" /></a>
            <div className="col-xs-6 text-left">
              <ul className="nav-detail">
                <li className="f-small"><i className="fa fa-clock-o"></i>{this.props.data.created_time}</li>
              </ul>
              <p className="color-text">{this.props.data.message}</p>
            </div>
          </div>
          <button onClick={this.closeModal}>close</button>

        </Modal>

        <div onClick={this.openModal} className="news-content panel panel-default">
          <div className="panel-heading overflow-hidden">
            <h4 className="col-xs-12"><img src={this.props.pageInfo.picture} className="rounded fanpage-logo"/>{this.props.pageInfo.name}</h4>
          </div>
          <div className="panel-body box">
          <a onClick={this.pageLoad.bind(this)}><img src={this.props.data.picture} className="img-responsive col-xs-6" alt="" /></a>
            <div className="col-xs-6 text-left">
              <ul className="nav-detail">
                <li className="f-small"><i className="fa fa-clock-o"></i>{this.props.data.created_time}</li>
              </ul>
              <p className="color-text">{this.props.data.shortMsg}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
