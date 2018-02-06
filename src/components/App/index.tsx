import * as React from 'react';
import { connect } from '../../fluent';
import { Container } from 'bloomer';
import Nav from '../Nav';

export default connect()
  .with(({ state }) => ({
    page: state.page,
  }))
  .toClass(props =>
    class App extends React.PureComponent<typeof props> {
      render() {
        return (
          <Container isFluid={true} style={{ marginTop: 10 }}>
            <Nav/>
          </Container>
        );
      }
    },
  );
