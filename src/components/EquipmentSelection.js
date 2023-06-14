import { React, useState, useEffect }from 'react';

import { NavLink } from 'react-router-dom';

import {
  Container,
  Row, 
  Col,
  Card,
  Button,
  Form,
  Table
} from 'react-bootstrap';

import 'firebase/database';

export function EquipmentSelection(props) {
  
  
  
  
  
  
  if(props.user){
    console.log("Current user:");
    console.log("email:", props.user.email);
    console.log("displayName:", props.user.displayName);
  } else {
    console.log("No current user");
  }


  useEffect(() => {
    // console.log("props.data:");
    // console.log(props.data);

    console.log("Object.keys(props.data).length:")
    console.log(Object.keys(props.data).length)


    if(Object.keys(props.data).length > 0) {
      const rentalContacts = props.data['rental-contact'];
      // console.log("rentalContacts:");
      // console.log(rentalContacts);

      const firstRentalContact = rentalContacts[0];
      // console.log("firstRentalContact:");
      // console.log(firstRentalContact);


      const email = firstRentalContact['email_address'];      ;
      console.log("email:");
      console.log(email);


      // console.log("Example email pulled from props.data:");
      // console.log(email);
    }

  }, [props.data]);


  return (
    <Container className="nav-bar-margin justify-content-center footer-padding">
      <Row className="info">
        <Col md={8} className="mx-auto">
          <h1 className="page-title">Snow Gear Rentals</h1>
          <div className="info-text">
            <p>
              Looking forward to time on the slopes? Take advantage of our Snow Sports rental program!
            </p>
            <p>
              With ski, snowboard, and snowshoe package rentals available for dailies, seasonal, and anything in between, you can try out new ways to play during the winter months!
            </p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-between">

        <Col xs={1} />

        <Col md={3} className="d-flex justify-content-center text-center">
          <NavLink to="/previous-rental">
            <Card className="card-rounded d-flex justify-content-center text-center">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
                <Col className="d-flex justify-content-center text-center">
                  <Row className="d-flex justify-content-center text-center">
                    <Col xs={12}>
                      <img src="icons/back-in-time.png" alt="Clock running backwards" className="mx-auto card-image" />
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-center text-center">
                    <Col xs={12} className="d-flex justify-content-center text-center">
                      <Button variant="primary" className="card-text mt-3">
                        View Previous Rentals
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Card.Body>
            </Card>
          </NavLink>
        </Col>

        <Col xs={3} />

        <Col md={3} className="d-flex justify-content-center">
          <NavLink to="/rider-information">
            <Card className="card-rounded text-center">
              <Card.Body>
                <Col>
                  <Row>
                    <Col xs={12}>
                      <img src="icons/social-media.png" alt="Recommendation icon" className="mx-auto card-image" />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Button variant="primary" className="card-text mt-3">
                        Equipment Recommendations
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Card.Body>
            </Card>
          </NavLink>
        </Col>

        <Col xs={1} />
      </Row>
    </Container>
  );
}

export function PreviousRental(props) {

  const [previousRentalEquipment, setPreviousRentalEquipment] = useState([]);

  useEffect(() => {
    
    if (Object.keys(props.data).length > 0) {
      const rentalContacts = props.data['rental-contact'];
      let rentalContactIDs;

      console.log("props.user.email:");
      console.log(props.user.email);
      console.log("props.user.displayName:");
      console.log(props.user.displayName);
  
      if (rentalContacts && rentalContacts.length > 0) {
        if(props.user) {
          rentalContactIDs = rentalContacts.map((contact) => {
            if (props.user.email === contact['email_address'] && props.user.displayName === (contact['first_name'] + " " +contact['last_name'])) {
              return contact['rental_contact_id'];
            }
            return null;
          })
          .filter((rentalContactID) => rentalContactID !== null);
        }
        
        console.log("Rental Contact IDs:");
        console.log(rentalContactIDs);
    
      }

      const rentals = props.data['rental'];
      let rentalIDs = [];
      for (let i = 0; i < rentalContactIDs.length; i++) {
        const rentalContactID = rentalContactIDs[i];
        
        // console.log(`rentals for rentalContactID ${rentalContactID}:`);
        // console.log(rentals);
        
        let rentalIDsTemp = rentals
          .filter((rental) => rentalContactID === rental['fk_rental_contact_id'])
          .map((rental) => rental['fk_rental_id']);
      
        rentalIDs = rentalIDs.concat(rentalIDsTemp);
      }

      console.log("rentalIDs:");
      console.log(rentalIDs);

      
      const rentalEquipment = props.data['rental-equipment'];
      let rentalSerialNumbers = [];
      for (let i = 0; i < rentalIDs.length; i++) {
        const rentalID = rentalIDs[i];
        
        // console.log(`rentals for rentalContactID ${rentalContactID}:`);
        // console.log(rentals);
        
        let rentalSerialNumbersTemp = rentalEquipment
          .filter((rentalEquipmentItem) => rentalID === rentalEquipmentItem['fk_rental_id'])
          .map((rentalEquipmentItem) => rentalEquipmentItem['rental_serial_number']);
        
          rentalSerialNumbers = rentalSerialNumbers.concat(rentalSerialNumbersTemp);
      }

      console.log("rentalSerialNumbers:");
      console.log(rentalSerialNumbers);

      setPreviousRentalEquipment(
        rentalSerialNumbers.map((rentalSerialNumber) => {
          let rentalID = props.data['rental_equipment']
            .filter((rentalEquipmentItem) => rentalSerialNumber === rentalEquipmentItem['rental_serial_number'])
            .map((rentalEquipmentItem) => rentalEquipmentItem['fk_rental_id']);

          let equipmentType = "Ski Pole";
          if (rentalSerialNumber.subString(0,3) === "SKB") {
            equipmentType = "Ski Boot";
          } else if (rentalSerialNumber.subString(0,3) === "SBB") {
            equipmentType = "Snowboard Boot";
          } else if (rentalSerialNumber.subString(0,3) === "BND") {
            equipmentType = "Snowboard Binding";
          } else if (rentalSerialNumber.subString(0,2) === "SK") {
            equipmentType = "Ski";
          } else if (rentalSerialNumber.subString(0,2) === "SB") {
            equipmentType = "Snowboard";
          }


          
          return [
            rentalID,
            props.data['rental']
              .filter((rental) => rental['fk_rental_id'] === rentalID)
              .map((rental) => rental['pick_up_date']),
            equipmentType,
            rentalSerialNumber,
            props.data['rental-equipment']
              .filter((rentalEquipmentItem) => rentalEquipmentItem['rental_serial_number'] === rentalSerialNumber)
              .map((rentalEquipmentItem) => rentalEquipmentItem['manufacturer']),
            props.data['rental-equipment']
              .filter((rentalEquipmentItem) => rentalEquipmentItem['rental_serial_number'] === rentalSerialNumber)
              .map((rentalEquipmentItem) => rentalEquipmentItem['model']),
            props.data['rental-equipment']
              .filter((rentalEquipmentItem) => rentalEquipmentItem['rental_serial_number'] === rentalSerialNumber)
              .map((rentalEquipmentItem) => rentalEquipmentItem['size']),
            props.data['rental-equipment']
              .filter((rentalEquipmentItem) => rentalEquipmentItem['rental_serial_number'] === rentalSerialNumber)
              .map((rentalEquipmentItem) => rentalEquipmentItem['pricing_status'])
          ];
        })
      );

    }
  }, [props.data, props.user]);


  

  return (
    <Container className="nav-bar-margin justify-content-center footer-padding">
      <Row className="info">
        <Col md={8} className="mx-auto">
          <h1 className="page-title">View Previous Rental Equipment</h1>
          <div className="info-text">
            <p>
              If you've ever rented with us before, feel free to take a look at what equipment you've used on any previous occasion. You can either choose to select the same equipment (or as similar as we have available) or use the information and the
              Equipment Recommendation feature to make a custom equipment selection depending on your personal preferences.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="rental-equipment-table table-container">
        <table>
          <thead>
            <tr>
              <th>Rental ID</th>
              <th>Pick-Up Date</th>
              <th>Eq. Type</th>
              <th>Eq. Ser. No.</th>
              <th>Make</th>
              <th>Model</th>
              <th>Size</th>
              <th>Pricing Status</th>
            </tr>
          </thead>
          <tbody>
            {previousRentalEquipment.map((previousRentalEquipmentItem) => {
              <tr>
                {
                  previousRentalEquipmentItem.map((equipmentStat) => {
                    <td>
                      {equipmentStat}
                    </td>
                  })
                }
              </tr>
            })}
            {/* <tr>
              <td>186</td>
              <td>2/8/2020</td>
              <td>William</td>
              <td>Ski</td>
              <td>SK0598</td>
              <td>Stockli</td>
              <td>Mindbender 99 Ti</td>
              <td>100</td>
              <td>Upgrade</td>
            </tr>
            <tr>
              <td>668</td>
              <td>3/21/2020</td>
              <td>William</td>
              <td>Ski Boot</td>
              <td>SKB0942</td>
              <td>Fischer</td>
              <td>RC Pro 120</td>
              <td>19.5</td>
              <td></td>
            </tr>
            <tr>
              <td>653</td>
              <td>4/1/2021</td>
              <td>William</td>
              <td>Ski Pole</td>
              <td>SP1013</td>
              <td>Salomon</td>
              <td>X-North</td>
              <td>38</td>
              <td></td>
            </tr>
            <tr className="rent-again">
              <td>597</td>
              <td>12/6/2021</td>
              <td>William</td>
              <td>Ski</td>
              <td>SK0967</td>
              <td>Atomic</td>
              <td>Wild Joy</td>
              <td>129</td>
              <td>Upgrade</td>
            </tr>
            <tr className="rent-again">
              <td>373</td>
              <td>1/16/2023</td>
              <td>William</td>
              <td>Ski Boot</td>
              <td>SKB0280</td>
              <td>Nordica</td>
              <td>Speedmachine 100</td>
              <td>24.5</td>
              <td></td>
            </tr>
            <tr className="rent-again">
              <td>529</td>
              <td>1/31/2023</td>
              <td>William</td>
              <td>Ski Pole</td>
              <td>SP0777</td>
              <td>Rossignol</td>
              <td>Stovepipe Jr.</td>
              <td>46</td>
              <td></td>
            </tr> */}
          </tbody>
        </table>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <NavLink to="/reserve-equipment">
            <Card className="card-rounded text-center">
              <Card.Body>
                <Col>
                  <Row>
                    <Col>
                      <img src="icons/repeat.png" alt="Recycle symbol" className="mx-auto d-block img-fluid card-image" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button variant="primary" className="card-text btn mt-3">
                        Select Same Equipment
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Card.Body>
            </Card>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
}

export function RiderInformation(props) {
  
  const frontBindingAngleOptions = [];
  for (let i = 0; i <= 90; i += 3) {
    const value = i === 0 ? "x0" : `positive-${i}`;
    const text = i === 0 ? i.toString() : `+${i}`;
    frontBindingAngleOptions.push(
      <option value={value} key={i}>
        {text}
      </option>
    );
  }
  
  const backBindingAngleOptions = [];
  for (let i = -90; i <= 90; i += 3) {
    const value = i === 0 ? "x0" : (i < 0 ? `negative${i}` : `positive${i}`);
    const text = i === 0 ? i.toString() : i.toString().replace("-", "- ");
    backBindingAngleOptions.push(
      <option value={value} key={i}>
        {text}
      </option>
    );
  }

  const heightOptions = [];
  for (let feet = 4; feet <= 6; feet++) {
    for (let inches = 10; feet === 4 && inches <= 11; inches++) {
      const value = (feet === 4 && inches === 10) ? "less-than-or-equal-to-4-10" : `x${feet}-${inches}`;
      const text = (feet === 4 && inches === 10) ? '≤ 4\' 10"' :  `${feet}' ${inches}"`;
      heightOptions.push(
        <option value={value} key={`${feet}-${inches}`}>
          {text}
        </option>
      );
    }
    for (let inches = 0; feet === 5 && inches <= 11; inches++) {
      const value = `x${feet}-${inches}`;
      const text = `${feet}' ${inches}"`;
      heightOptions.push(
        <option value={value} key={`${feet}-${inches}`}>
          {text}
        </option>
      );
    }
    for (let inches = 0; feet === 6 && inches <= 5; inches++) {
      const value = (feet === 6 && inches === 5) ? "greater-than-or-equal-to-6-5" : `x${feet}-${inches}`;
      const text = (feet === 6 && inches === 5) ? '≥ 6\' 5"' :  `${feet}' ${inches}"`;
      heightOptions.push(
        <option value={value} key={`${feet}-${inches}`}>
          {text}
        </option>
      );
    }
  }

  const weightOptions = [];
  for (let i = 21; i <= 210; i++) {
    let value;
    let text;
    if (i < 22) {
      value = 'less-than-22';
      text = '< 22';
    } else if (i < 210) {
      value = 'x' + i;
      text = i;
    } else {
      value = 'greater-than-or-equal-to-210';
      text = '210+';
    }
    weightOptions.push(
      <option value={value} key={i}>
        {text}
      </option>
    );
  }


  
  
  return (
    <Container className="nav-bar-margin justify-content-center footer-padding">
      <Form>
        <Row className="justify-content-center">
          <Col md={8} className="mx-auto">
            <h1 className="page-title">User Info</h1>
            <div className="info-text rider-information-info-text">
              <p>We just need some info to:</p>
              <p>1. Show you the best options!</p>
              <p>2. Get everything set up safely.</p>
            </div>
          </Col>
        </Row>
        <Row className="sport-selection justify-content-center">
          <Col md={4} className="d-block input-section justify-content-center">
            <div>
              <h2 className="info section-title">Sport</h2>
              <p className="info info-text">Which sport(s) do you want to rent equipment for?</p>
            </div>
            <Col md={4} className="mx-auto">
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  id="snowboard"
                  label="Snowboard"
                  name="sport"
                  value="snowboard"
                />
                <Form.Check
                  type="checkbox"
                  id="ski"
                  label="Ski"
                  name="sport"
                  value="ski"
                />
                <Form.Check
                  type="checkbox"
                  id="snowshoe"
                  label="Snowshoe"
                  name="sport"
                  value="snowshoe"
                />
                <Form.Check
                  type="checkbox"
                  id="paddleboard"
                  label="Paddleboard"
                  name="sport"
                  value="paddleboard"
                />
              </Form.Group>
            </Col>
          </Col>
        </Row>
        <Row className="info justify-content-center">
          <Col md={5} className="mx-auto">
            <div className="info-text">
              <p>If you're skiing or snowboarding, we'll need just a bit more info...</p>
            </div>
          </Col>
        </Row>
        <Row className="snowboard-ski-setting-selection justify-content-center mx-auto">
          <Card.Body>
            <Col md={4} className="snowboard-setting-selection">
              <h2 className="info section-title">
                Snowboarder
              </h2>
              <div className="input-section border-top">
                <Form.Group>
                  <Form.Label htmlFor="snowboard-direction">
                    <h3 className="info input-section-title">
                      Direction
                    </h3>
                  </Form.Label>
                  <div>
                    <div className="input-option">
                      <Form.Check
                        type="radio"
                        id="regular"
                        name="snowboard-direction"
                        value="regular"
                        label="Regular"
                      />
                      <p className="input-option-additional-info">
                        (left foot forward)
                      </p>
                    </div>
                    <div className="input-option">
                      <Form.Check
                        type="radio"
                        id="neutral"
                        name="snowboard-direction"
                        value="neutral"
                        label="Neutral"
                      />
                      <p className="input-option-additional-info">
                        (either/both ways - aka "Switch")
                      </p>
                    </div>
                    <div className="input-option">
                      <Form.Check
                        type="radio"
                        id="goofy"
                        name="snowboard-direction"
                        value="goofy"
                        label="Goofy"
                      />
                      <p className="input-option-additional-info">
                        (right foot forward)
                      </p>
                    </div>
                  </div>
                </Form.Group>
              </div>

              <div className="input-section border-top">
                <h3 className="info input-section-title">
                  Binding Angles
                </h3>
                <div className="info info-text">
                  <p>
                    Positive (+): points down the mountain as you ride.
                  </p>
                  <p>
                    Negative (-): points backward up the mountain as you ride.
                  </p>
                  <p>
                    For reference, Front +15 degrees / Back -9 degrees is fairly normal for a directional setup.
                  </p>
                </div>

                <div className="input-section border-top">
                  <Form.Group>
                    <Form.Label htmlFor="front-binding-angle">
                      <h4 className="info input-section-title binding-angle-input-section-title">
                        Front Binding Angle
                      </h4>
                    </Form.Label>
                    <div>
                      <Form.Select id="front-binding-angle" name="front-binding-angle" defaultValue="positive-15">
                        {frontBindingAngleOptions}
                      </Form.Select>
                      <span> degrees</span>
                    </div>
                  </Form.Group>
                </div>

                <div className="input-section border-top">
                  <Form.Group>
                    <Form.Label htmlFor="back-binding-angle">
                      <h4 className="info input-section-title binding-angle-input-section-title">
                        Back Binding Angle
                      </h4>
                    </Form.Label>
                    <div>
                      <Form.Select id="back-binding-angle" name="back-binding-angle" defaultValue="negative-9">
                        {backBindingAngleOptions}
                      </Form.Select>
                      <span> degrees</span>
                    </div>
                  </Form.Group>
                </div>
              </div>
            </Col>

            <Col md={4} className="ski-setting-selection">
              <div className="input-section">
                <h2 className="info section-title">
                  Skier
                </h2>

                <div className="input-section text-center border-top">
                  <Form.Group>
                    <Form.Label htmlFor="height">
                      <h3 className="info input-section-title">
                        Height
                      </h3>
                    </Form.Label>
                    <div>
                      <Form.Select id="height" name="height" defaultValue="x5-6">
                        {heightOptions}
                      </Form.Select>
                    </div>
                  </Form.Group>
                </div>


                <div className="input-section text-center border-top">
                  <Form.Group>
                    <Form.Label htmlFor="weight">
                      <h3 className="info input-section-title">
                        Weight
                      </h3>
                    </Form.Label>
                    <div>
                      <span>
                        <Form.Select name="weight" id="weight" defaultValue="x140">
                          {weightOptions}
                        </Form.Select>
                        {" lbs"}
                      </span>
                    </div>
                  </Form.Group>
                </div>

                <div className="input-section text-center border-top">
                  <Form.Group>
                    <Form.Label htmlFor="age">
                      <h3 className="info input-section-title">
                        Age
                      </h3>
                    </Form.Label>
                    <div>
                      <span>
                        <Form.Select id="age" name="age" defaultValue="x10-to-49">
                          <option value="less-than-10">
                            {'< 10'}
                          </option>
                          <option value="x10-to-49">
                            10-49
                          </option>
                          <option value="greater-than-or-equal-to-50">
                            50+
                          </option>
                        </Form.Select>
                        {" years old"}
                      </span>
                    </div>
                  </Form.Group>
                </div>

                <div className="input-section border-top">
                  <Form.Group>
                    <Form.Label htmlFor="release-preference" className="d-block">
                      <div className="info input-section-title text-center release-preference-input-section-title">
                        <h3>
                          Release Preference
                        </h3>
                        <h4>
                          aka "Skier Type"
                        </h4>
                      </div>
                    </Form.Label>
                    <div>
                      <div className="input-option">
                        <Form.Check
                          type="radio"
                          id="i-minus"
                          name="release-preference"
                          value="i-minus"
                          label="I-"
                        />
                        <p className="input-option-additional-info">
                          Less common: for some beginners where extra caution is needed
                        </p>
                      </div>
                      <div className="input-option">
                        <Form.Check
                          type="radio"
                          id="i"
                          name="release-preference"
                          value="i"
                          label="I"
                        />
                        <p className="input-option-additional-info">
                          Less aggressive skiing: often corresponds with beginners
                        </p>
                      </div>
                      <div className="input-option">
                        <Form.Check
                          type="radio"
                          id="ii"
                          name="release-preference"
                          value="ii"
                          label="II"
                        />
                        <p className="input-option-additional-info">
                          Moderately aggressive skiing: often corresponds with intermediate-level skiers
                        </p>
                      </div>
                      <div className="input-option">
                        <Form.Check
                          type="radio"
                          id="iii"
                          name="release-preference"
                          value="iii"
                          label="III"
                        />
                        <p className="input-option-additional-info">
                          Aggressive skiing: often corresponds with advanced skiers riding difficult terrain
                        </p>
                      </div>
                      <div className="input-option">
                        <Form.Check
                          type="radio"
                          id="iii-plus"
                          name="release-preference"
                          value="iii-plus"
                          label="III+"
                        />
                        <p className="input-option-additional-info">
                          Most aggressive skiing: for certain experts on extreme terrain
                        </p>
                      </div>
                    </div>
                  </Form.Group>
                </div>
              </div>
            </Col>
          </Card.Body>
        </Row>

        <Row>
          <Col md={4} className="mx-auto input-section">
            <h2 className="info input-section-title">
              Notes
            </h2>
            <Form.Label htmlFor="notes" className="info">
              Anything else for us to know about how you want your rental set up?
            </Form.Label>
            <div className="input-section">
              <Form.Control as="textarea" name="notes" id="notes" rows={3} />
            </div>
            <p className="thank-you">
              Thank you!
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={4} className="d-flex mx-auto">
            <NavLink to="/equipment-db-options">
              <Card className="card-rounded text-center">
                <Card.Body>
                  <div className="d-flex mx-auto justify-content-center text-center">
                    <Row className="d-flex mx-auto justify-content-center text-center">
                      <Col xs={4} className="mx-auto">
                        <img src="icons/snowboard.png" alt="Snowboard" className="mx-auto d-inline img-fluid card-image-two-icons" />
                      </Col>
                      <Col xs={4} className="mx-auto">
                        <img src="icons/ski.png" alt="Pair of skis and pair of ski poles" className="mx-auto d-inline img-fluid card-image-two-icons" />
                      </Col> 
                    </Row>
                    <Row className="d-flex mx-auto justify-content-center text-center">
                      <Col xs={12} className="d-flex mx-auto justify-content-center text-center">
                        <Button variant="primary" className="mt-3">
                          See Options!
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export function EquipmentDBOptions(props) {
  
  const [selectedEquipment01, setSelectedEquipment01] = useState(false);

  const [selectedEquipment02, setSelectedEquipment02] = useState(false);

  const [selectedEquipment03, setSelectedEquipment03] = useState(false);

  const [selectedEquipment04, setSelectedEquipment04] = useState(false);

  const [selectedEquipment05, setSelectedEquipment05] = useState(false);

  const [selectedEquipment06, setSelectedEquipment06] = useState(false);

  const [selectedEquipment07, setSelectedEquipment07] = useState(false);

  const [selectedEquipment08, setSelectedEquipment08] = useState(false);

  const [selectedEquipment09, setSelectedEquipment09] = useState(false);

  // const [selectedEquipment, setSelectedEquipment] = useState(
  //   [
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false
  //   ]
  // );

  // const handleSelect = (boxNumber, newValue) => {
  //   let newSelectedEquipment = selectedEquipment;
  //   newSelectedEquipment[boxNumber] = newValue;
  //   setSelectedEquipment(newSelectedEquipment);
  // }

  // const handleSelect = (boxNumber, newValue) => {
  //   let newSelectedEquipment = selectedEquipment;
  //   newSelectedEquipment[boxNumber] = newValue;
  //   setSelectedEquipment(newSelectedEquipment);
  // }

  // function onIncludeRunnerUpChange(event) {
  //   setIncludeRunnerUp(event.target.checked);
  // }

  function handleSelect01(event) {
    setSelectedEquipment01(event.target.checked);
  }

  function handleSelect02(event) {
    setSelectedEquipment02(event.target.checked);
  }

  function handleSelect03(event) {
    setSelectedEquipment03(event.target.checked);
  }

  function handleSelect04(event) {
    setSelectedEquipment04(event.target.checked);
  }

  function handleSelect05(event) {
    setSelectedEquipment05(event.target.checked);
  }

  function handleSelect06(event) {
    setSelectedEquipment06(event.target.checked);
  }

  function handleSelect07(event) {
    setSelectedEquipment07(event.target.checked);
  }

  function handleSelect08(event) {
    setSelectedEquipment08(event.target.checked);
  }

  function handleSelect09(event) {
    setSelectedEquipment09(event.target.checked);
  }



  return (
    <Container className="nav-bar-margin justify-content-center footer-padding">
      <Row className="info">
        <Col md={5} className="mx-auto">
          <h1 className="page-title">
            Equipment Options
          </h1>
          <div className="info-text">
            <p>
              Use the checkboxes to select the equipment you want to rent!
            </p>
          </div>
        </Col>
      </Row>
      <Row className="rental-equipment-table table-container">
        <Table responsive>
          <thead>
            <tr>
              <th className="text-center">
                Selected
              </th>
              <th>
                Eq. Type
              </th>
              <th>
                Eq. Ser. No.
              </th>
              <th>
                Make
              </th>
              <th>
                Model
              </th>
              <th>
                Size
              </th>
              <th>
                Pricing Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">
                <Form.Check
                  type="checkbox"
                  checked={selectedEquipment01}
                  onChange={handleSelect01}
                />
              </td>
              <td>
                Ski
              </td>
              <td>
                SK0967
              </td>
              <td>
                Atomic
              </td>
              <td>
                Wild Joy
              </td>
              <td>
                129
              </td>
              <td>
                Upgrade
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Form.Check
                  type="checkbox"
                  checked={selectedEquipment02}
                  onChange={handleSelect02}
                />
              </td>
              <td>
                Ski
              </td>
              <td>
                SK0053
              </td>
              <td>
                Dynastar
              </td>
              <td>
                QST Lumen Jr
              </td>
              <td>
                130
              </td>
              <td>
                Standard
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Form.Check
                  type="checkbox"
                  checked={selectedEquipment03}
                  onChange={handleSelect03}
                />
              </td>
              <td>
                Ski
              </td>
              <td>
                SK0677
              </td>
              <td>
                Elan
              </td>
              <td>
                Konic Jr
              </td>
              <td>
                136
              </td>
              <td>
                Upgrade
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Form.Check
                  type="checkbox"
                  checked={selectedEquipment04}
                  onChange={handleSelect04}
                />
              </td>
              <td>
                Ski
              </td>
              <td>
                SK0636
              </td>
              <td>
                Rossignol
              </td>
              <td>
                Backland 107
              </td>
              <td>
                128
              </td>
              <td>
                Upgrade
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Form.Check
                  type="checkbox"
                  checked={selectedEquipment05}
                  onChange={handleSelect05}
                />
              </td>
              <td>
                Ski Boot
              </td>
              <td>
                SKB0280
              </td>
              <td>
                Nordica
              </td>
              <td>
                Speedmachine 100
              </td>
              <td>
                24.5
              </td>
              <td>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Form.Check
                  type="checkbox"
                  checked={selectedEquipment06}
                  onChange={handleSelect06}
                />
              </td>
              <td>
                Ski Boot
              </td>
              <td>
                SKB0072
              </td>
              <td>
                Rossignol
              </td>
              <td>
                Pure Comfort 60
              </td>
              <td>
                24.5
              </td>
              <td>  
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Form.Check
                  type="checkbox"
                  checked={selectedEquipment07}
                  onChange={handleSelect07}
                />
              </td>
              <td>
                Ski Boot
              </td>
              <td>
                SKB0651
              </td>
              <td>
                Fischer
              </td>
              <td>
                RC Pro W 110
              </td>
              <td>
                25
              </td>
              <td>  
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Form.Check
                  type="checkbox"
                  checked={selectedEquipment08}
                  onChange={handleSelect08}
                />
              </td>
              <td>
                Ski Pole
              </td>
              <td>
                SP0777
              </td>
              <td>
                Rossignol
              </td>
              <td>
                Stovepipe Jr.
              </td>
              <td>
                46
              </td>
              <td>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Form.Check
                  type="checkbox"
                  checked={selectedEquipment09}
                  onChange={handleSelect09}
                />
              </td>
              <td>
                Ski Pole
              </td>
              <td>
                SP0319
              </td>
              <td>
                Ice
              </td>
              <td>
                Genesis
              </td>
              <td>
                44
              </td>
              <td>
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>

      <Row className="rental-equipment-table table-container">
        <Table>
          <thead>
            <tr>
              <th>
                Equipment Currently Selected
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedEquipment01 ? (
              <tr>
                <td>
                  <p>
                    SK0967
                  </p>
                </td>
              </tr>
              
            ) : null 
            }
            {selectedEquipment02 ? (
              <tr>
                <td>
                  <p>
                    SK0053
                  </p>
                </td>
              </tr>
              
            ) : null 
            }
            {selectedEquipment03 ? (
              <tr>
                <td>
                  <p>
                    SK0677
                  </p>
                </td>
              </tr>
              
            ) : null 
            }
            {selectedEquipment04 ? (
              <tr>
                <td>
                  <p>
                    SK0636
                  </p>
                </td>
              </tr>
              
            ) : null 
            }
            {selectedEquipment05 ? (
              <tr>
                <td>
                  <p>
                    SKB0280
                  </p>
                </td>
              </tr>
              
            ) : null 
            }
            {selectedEquipment06 ? (
              <tr>
                <td>
                  <p>
                    SKB0072
                  </p>
                </td>
              </tr>
              
            ) : null 
            }
            {selectedEquipment07 ? (
              <tr>
                <td>
                  <p>
                    SKB0651
                  </p>
                </td>
              </tr>
              
            ) : null 
            }
            {selectedEquipment08 ? (
              <tr>
                <td>
                  <p>
                    SP0777
                  </p>
                </td>
              </tr>
              
            ) : null 
            }
            {selectedEquipment09 ? (
              <tr>
                <td>
                  <p>
                    SP0319
                  </p>
                </td>
              </tr>
              
            ) : null 
            }
          </tbody>
        </Table>
      </Row>

      <Row className="card-row justify-content-center">
        <Col md={4} className="d-flex">
          <NavLink to="/reserve-equipment">
            <Card className="card-rounded text-center">
              <Card.Body>
                <Row className="mx-auto justify-content-center text-center">
                  <Col className="mx-auto" xs={4}>
                    <img src="icons/snowboard.png" alt="Snowboard" className="mx-auto d-inline img-fluid card-image-two-icons" />
                  </Col>
                  <Col className="mx-auto" xs={4}>
                    <img src="icons/ski.png" alt="Pair of skis and pair of ski poles" className="mx-auto d-inline img-fluid card-image-two-icons" />
                  </Col>
                </Row>
                <Row className="mx-auto justify-content-center text-center">
                  <Col xs={12} className="d-flex mx-auto justify-content-center text-center">
                    <Button variant="primary" className="mt-3">
                      Get Selected Equipment!
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </NavLink>
        </Col>
      </Row>

      <Row className="card-row justify-content-between">
        
        <Col xs={1} />

        <Col md={3} className="d-flex">
          <NavLink to="/previous-rental">
            <Card className="card-rounded d-flex justify-content-center text-center">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
                <Row className="justify-content-center text-center">
                  <Col xs={12}>
                    <img src="icons/back-in-time.png" alt="Clock running backwards" className="mx-auto card-image" />
                  </Col>
                </Row>
                <Row className="justify-content-center text-center">
                  <Col xs={12} className="d-flex justify-content-center text-center">
                    <Button variant="primary" className="mt-3">
                      View Previous Rentals
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </NavLink>
        </Col>

        <Col xs={3} />

        <Col md={3} className="d-flex">
          <NavLink to="/rider-information">
            <Card className="card-rounded d-flex justify-content-center text-center">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
                <Row className="justify-content-center text-center">
                  <Col xs={12}>
                    <img src="icons/controls.png" alt="Toggles" className="mx-auto d-block img-fluid card-image" />
                  </Col>
                </Row>
                <Row className="justify-content-center text-center">
                  <Col xs={12} className="d-flex justify-content-center text-center">
                    <Button variant="primary" className="mt-3">
                      Adjust User Info
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </NavLink>
        </Col>

        <Col xs={1} />

      </Row>
    </Container>
      
  );
}

export function ReserveEquipment(props) {
  return (
    <Container className="nav-bar-margin justify-content-center footer-padding">
      <Row className="info">
        <Col className="col col-md-5 mx-auto">
          <h1 className="page-title">
            Reserve Equipment
          </h1>
          <div className="info-text">
            <p>
              Double check that this is the equipment you want.
            </p>
            <p>
              Click the button below to reserve it and schedule an appointment (if you haven't already)!
            </p>
            <p>
              We look forward to seeing you!
            </p>
          </div>
        </Col>
      </Row>
      <Row className="rental-equipment-table justify-content-center table-container">
        <Table responsive className="reserve-equipment-table">
          <thead>
            <tr>
              <th>
                Eq. Type
              </th>
              <th>
                Eq. Ser. No.
              </th>
              <th>
                Make
              </th>
              <th>
                Model
              </th>
              <th>
                Size
              </th>
              <th>
                Pricing Status
              </th>
            </tr>
          </thead> 
          <tbody>
            <tr>
              <td>
                Ski
              </td>
              <td>
                SK0967
              </td>
              <td>
                Atomic
              </td>
              <td>
                Wild Joy
              </td>
              <td>
                129
              </td>
              <td>
                Upgrade
              </td>
            </tr>
            <tr>
              <td>
                Ski Boot
              </td>
              <td>
                SKB0280
              </td>
              <td>
                Nordica
              </td>
              <td>
                Speedmachine 100
              </td>
              <td>
                24.5
              </td>
              <td>
              </td>
            </tr>
            <tr>
              <td>
                Ski Pole
              </td>
              <td>
                SP0777
              </td>
              <td>
                Rossignol
              </td>
              <td>
                Stovepipe Jr.
              </td>
              <td>
                46
              </td>
              <td>
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>

      <Row className="card-row justify-content-center">
        <Col md={4} className="d-flex">
          <NavLink to="/appointment">
            <Card className="card-rounded text-center">
              <Card.Body>
                <Row className="mx-auto justify-content-center text-center">
                  <Col className="mx-auto" xs={4}>
                    <img src="icons/snowboard.png" alt="Snowboard" className="mx-auto d-inline img-fluid card-image-two-icons" />
                  </Col>
                  <Col className="mx-auto" xs={4}>
                    <img src="icons/ski.png" alt="Pair of skis and pair of ski poles" className="mx-auto d-inline img-fluid card-image-two-icons" />
                  </Col>
                </Row>
                <Row className="mx-auto justify-content-center text-center">
                  <Col xs={12} className="d-flex mx-auto justify-content-center text-center">
                    <Button variant="primary" className="mt-3">
                      Get Selected Equipment!
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </NavLink>
        </Col>
      </Row>

      <Row className="card-row justify-content-between">

        <Col xs={1} />

        <Col md={3} className="d-flex">
          <NavLink to="/previous-rental">
            <Card className="card-rounded d-flex justify-content-center text-center">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
                <Row className="justify-content-center text-center">
                  <Col xs={12}>
                    <img src="icons/back-in-time.png" alt="Clock running backwards" className="mx-auto card-image" />
                  </Col>
                </Row>
                <Row className="justify-content-center text-center">
                  <Col xs={12} className="d-flex justify-content-center text-center">
                    <Button variant="primary" className="mt-3">
                      View Previous Rentals
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </NavLink>
        </Col>

        <Col xs={3} />

        <Col md={3} className="d-flex">
          <NavLink to="/rider-information">
            <Card className="card-rounded d-flex justify-content-center text-center">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
                <Row className="justify-content-center text-center">
                  <Col xs={12}>
                    <img src="icons/controls.png" alt="Toggles" className="mx-auto d-block img-fluid card-image" />
                  </Col>
                </Row>
                <Row className="justify-content-center text-center">
                  <Col xs={12} className="d-flex justify-content-center text-center">
                    <Button variant="primary" className="mt-3">
                      Adjust User Info
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </NavLink>
        </Col>

        <Col xs={1} />

      </Row>
    </Container>
  );
}