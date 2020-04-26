import React from 'react';
import {Container, Col, Row, CardColumns} from "react-bootstrap";

import ProjectBlock from './projectBlock/projBlock';
import SearchBlock from "./searchBlock/searchBlock";



export default function(props) {
    return(
        <Container fluid>
            <Row className="mt-lg-3">
                <Col xs={3}>
                    <SearchBlock/>
                </Col>

                <Col xs={8}>
                    <CardColumns>
                        {props.state.map( el => <ProjectBlock link={el.link} text={el.text}/>)}
                    </CardColumns>
                </Col>
            </Row>
        </Container>
    )
}