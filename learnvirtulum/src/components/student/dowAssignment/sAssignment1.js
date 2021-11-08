import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

export default function SAssignment1() {
  return (
    <div>
      <Card.Group>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="data:image/png;base64,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"
            />
            <Card.Header>Class 4B</Card.Header>
            <Card.Meta>History</Card.Meta>
            <Card.Description>World War 2</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Download Assignment
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="data:image/png;base64,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"
            />
            <Card.Header>Class 9A</Card.Header>
            <Card.Meta>Algebra</Card.Meta>
            <Card.Description>Arithmetic Expressions</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Download Assignment
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="data:image/png;base64,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"
            />
            <Card.Header>Class 5B</Card.Header>
            <Card.Meta>Science </Card.Meta>
            <Card.Description>Environemnt</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Download Assignment
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}