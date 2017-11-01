import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Column from '../layout/Column';
import Row from '../layout/Row';

import './Header.css';

type Props = {
  children?: string | Element<*> | Array<Element<*>>,
  history: { push: Function },
  onBack: Function,
};

class Header extends Component {
  props: Props;

  render() {
    const { children, onBack = () => this.props.history.push('/') } = this.props;

    return (
      <div className="header">
        <Row>
          <Column width={4}>
            <div className="back-button" onClick={onBack}>
              {"< Back"}
            </div>
          </Column>
          <Column width={4}>
            {children}
          </Column>
        </Row>
      </div>
    );
  }
}

export default withRouter(Header);
