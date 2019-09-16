import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';
import plus from '../images/plus.svg';
import minus from '../images/minus.svg';

const PositionCol = styled(Col)`
  background-color: white;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
`;

const Role = styled.div`
  img {
    display: inline-block;
    margin-left: 0.5rem;
  }
  h3 {
    display: inline-block;
    margin-left: 0.5rem;
    font-size: 1rem;
    font-family: 'DINWebPro-Bold W02 Regular';
  }
  cursor: pointer;
`;
const Description = styled.div`
  margin-left: 1.8rem;
  margin-right: 1.8rem;
  overflow: hidden;
  max-height: 1000px;
  box-sizing: border-box;
  transition: max-height 0.5s ease;
  margin-top: -1rem;
  ${props => !props.open && `max-height: 0px;`};
`;

class Position extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState(prevState => ({ ...prevState, open: !prevState.open }));
  }

  render() {
    const { children, title } = this.props;
    const { open } = this.state;
    return (
      <PositionCol sm={12} md={10} mdOffset={1}>
        <Role onClick={this.toggleOpen}>
          {open ? <img alt="minus" src={minus} /> : <img alt="plus" src={plus} />}
          <h3>{title}</h3>
        </Role>
        <Description open={open}>{children}</Description>
      </PositionCol>
    );
  }
}

export default Position;
