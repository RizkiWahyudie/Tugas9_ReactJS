import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button, Row, Col, Breadcrumb, BreadcrumbItem, Tabs, Tab, Table, ProgressBar, Pagination, Popover, OverlayTrigger, Collapse, Spinner } from "react-bootstrap";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true
    }
  }
  render() {
    const popover = (
      <Popover>
        <Popover.Header>Informasi Website</Popover.Header>
        <Popover.Body>Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga</Popover.Body>
      </Popover>
    )
    return (
      <div style={{ overflow: "hidden" }}>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Collapse>
              <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#berita">Berita</Nav.Link>
                <Nav.Link href="#berita">Live Scores</Nav.Link>
                <NavDropdown title="Piala & Liga" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">EPL</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Laliga</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Ligue 1</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Champions League</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#berita">Transfer Pemain</Nav.Link>
                <Nav.Link href="#berita">Tim</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className="me-auto" variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Row>
          <Col lg={7}></Col>
          <Col>
            <Breadcrumb className="pt-3 pb-1 px-3" style={{ backgroundColor: "rgb(240, 240, 240)", borderRadius: "8px" }}>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Liga Inggris</BreadcrumbItem>
              <BreadcrumbItem active>Transfer Pemain</BreadcrumbItem>
            </Breadcrumb>
          </Col>
          <Col lg={1}></Col>
        </Row>
        <Container>
          <Row className="mt-3 mb-2">
            <Col lg={11}>
              <h3>Rumor Transfer</h3>
            </Col>
            <Col>
            <Spinner animation="border" variant="success" />
            <Spinner animation="grow" variant="success" />
            </Col>
          </Row>
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 justify-content-around">
            <Tab eventKey="home" title="Home">
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nama Pemain</th>
                    <th>Tim</th>
                    <th>Transfer</th>
                    <th>Proses Transfer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>MAROUANE FELLAINI</td>
                    <td>MANCHESTER UNITED</td>
                    <td>SHANDONG LUNENG</td>
                    <td>
                      <ProgressBar striped now={85} label="85%" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>LUIS NANI</td>
                    <td>SPORTING CP</td>
                    <td>ORLANDO CITY</td>
                    <td>
                      <ProgressBar striped now={55} label="55%" />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>MAREK HAMSIK</td>
                    <td>NAPOLI</td>
                    <td>DALIAN YIFANG</td>
                    <td>
                      <ProgressBar striped now={95} label="95%" />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>SARDAR AZMOUN</td>
                    <td>RUBIN KAZAN</td>
                    <td>ZENIT ST PETEESBURG</td>
                    <td>
                      <ProgressBar striped now={100} label="100%" />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>MICHY BATSHUAYI</td>
                    <td>CHELSEA</td>
                    <td>CRYSTAL PALACE</td>
                    <td>
                      <ProgressBar striped now={50} label="50%" />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>LUCAS PIAZON</td>
                    <td>CHELSEA</td>
                    <td>CHIEVO</td>
                    <td>
                      <ProgressBar striped now={100} label="100%" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="profile" title="Liga Primer Inggris">

            </Tab>
            <Tab eventKey="seriea" title="Serie A">

            </Tab>
            <Tab eventKey="primera" title="Divisi Primera">

            </Tab>
            <Tab eventKey="bundes" title="Bundesliga">

            </Tab>
            <Tab eventKey="liga1" title="Liga 1 Indonesia">

            </Tab>
          </Tabs>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>

          <div className="d-flex mb-3">
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Button>Informasi</Button>
            </OverlayTrigger>

            <Button className="mx-2" onClick={() => this.setState({ collapse: !this.state.collapse })}>Versi Website</Button>
            <Collapse in={this.state.collapse} placement="bottom">
              <p>Akses Sport V1.0</p>
            </Collapse>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
