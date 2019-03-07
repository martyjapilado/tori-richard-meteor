import React from 'react';
import { Image, Grid } from 'semantic-ui-react';

export default class ToriRichardMain extends React.Component {
  render() {
    return (
        <main>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image src='/images/bwod-10268.jpg' size='large' />
              </Grid.Column>
              <Grid.Column>
                <Image src='/images/bwod-10534.jpg' size='large' />
              </Grid.Column>
              <Grid.Column>
                <Image src='/images/bwod-10098.jpg' size='large' />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image src='/images/bwod-10535.jpg' size='large' />
              </Grid.Column>
              <Grid.Column>
                <Image src='/images/bwod-8883.jpg' size='large' />
              </Grid.Column>
              <Grid.Column>
                <Image src='/images/bwod-2777.jpg' size='large' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </main>
    );
  }
}
