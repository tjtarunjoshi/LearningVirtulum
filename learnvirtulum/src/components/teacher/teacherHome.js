import React from "react";
import { Grid } from "semantic-ui-react";
import Panel1 from "./panel1";
import NavigationBar from "./navigationbar";

export default function THome() {
  return (
    <div>
      <NavigationBar />
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={4}>
            <Panel1 />
          </Grid.Column>
          <Grid.Column width={6}></Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
