import React from 'react';
import guidesData from './guidebook.json';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function Guides(props){
    const guideCards = guidesData.map((guide) =>
<Col sm="4">
        <Card body>
          <CardTitle>{guide.title}</CardTitle>
          <CardText><em>{guide.type} guide</em> — ${guide.price}</CardText>
          <Button>Buy Guide</Button>
        </Card>
      </Col>
);
    return(
    <Row>
      {guideCards}
    </Row>
  );
};

export default Guides;
