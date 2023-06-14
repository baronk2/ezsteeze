import { React, useState }from 'react';

import { NavLink } from 'react-router-dom';

import {
  Container,
  Row, 
  Col,
  Card
} from 'react-bootstrap';

export function EquipmentSelection(props) {
  if(props.user){
    console.log("Current user:");
    console.log("email:", props.user.email);
    console.log("displayName:", props.user.displayName);
  } else {
    console.log("No current user");
  }
  
  return (
    <div className="container nav-bar-margin justify-content-center footer-padding">
      <div className="row info padded-down">
        <div className="col col-md-8 mx-auto">
          <h1 className="page-title">
            Snow Gear Rentals
          </h1>
          <div className="info-text">
            <p>
              Looking forward to time on the slopes? Take advantage of our Snow Sports rental program!
            </p>
            <p>
              With ski, snowboard, and snowshoe package rentals available for dailies, seasonal, and anything in between, you can try out new ways to play during the winter months!
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center text-center">
        <div className="col col-md-4 d-flex justify-content-center text-center">
          <NavLink to="/previous-rental">
            <div className="card card-rounded d-flex justify-content-center text-center">
              <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                <div className="col d-flex justify-content-center text-center">
                  <div className='row d-flex justify-content-center text-center'>
                    <div className='col-12'>
                    {/* <div className='col-12' style={{ display: 'flex', justifyContent: 'center' }}> */}
                      <img src="icons/back-in-time.png" alt="Clock running backwards" className="mx-auto card-image" />
                    </div>
                  </div>
                  <div className='row d-flex justify-content-center  text-center'>
                    <div className='col-12 d-flex justify-content-center text-center'>
                      <button className="card-text btn btn-primary mt-3">
                        View Previous Rentals
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="col col-md-4 d-flex justify-content-center">
          <NavLink to="/rider-information">
            <div className="card card-rounded text-center">
              <div className="card-body">
                <div className="col">
                  <div className='row'>
                    <div className='col-12'>
                    {/* <div className='col-12' style={{ display: 'flex', justifyContent: 'center' }}> */}
                      <img src="icons/social-media.png" alt="Recommendation icon" className="mx-auto card-image" />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                      <button className="card-text btn btn-primary mt-3">
                        Equipment Recommendations
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export function PreviousRental(props) {
  return (
    <div className="container nav-bar-margin justify-content-center footer-padding">
      <div className="row info">
        <div className="col col-md-8 mx-auto">
          <h1 className="page-title">
            View Previous Rental Equipment
          </h1>
          <div className="info-text">
            <p>
              If you've ever rented with us before, feel free to take a look at what equipment you've used on any previous occasion. You can either choose to select the same equipment (or as similar as we have available) or use the information and the
              <span>
                Equipment Recommendation feature
              </span>
              to make a custom equipment selection depending on your personal preferences.
            </p>
          </div>
        </div>
      </div>
      <div className="row rental-equipment-table table-container">
        <table>
          <thead>
            <tr>
              <th>
                Rental ID
              </th>
              <th>
                Pick-Up Date
              </th>
              <th>
                User
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
              <td>
                186
              </td>
              <td>
                2/8/2020
              </td>
              <td>
                William
              </td>
              <td>
                Ski
              </td>
              <td>
                SK0598
              </td>
              <td>
                Stockli
              </td>
              <td>
                Mindbender 99 Ti
              </td>
              <td>
                100
              </td>
              <td>
                Upgrade
              </td>
            </tr>
            <tr>
              <td>
                668
              </td>
              <td>
                3/21/2020
              </td>
              <td>
                William
              </td>
              <td>
                Ski Boot
              </td>
              <td>
                SKB0942
              </td>
              <td>
                Fischer
              </td>
              <td>
                RC Pro 120
              </td>
              <td>
                19.5
              </td>
              <td>
                
              </td>
            </tr>
            <tr>
              <td>
                653
              </td>
              <td>
                4/1/2021
              </td>
              <td>
                William
              </td>
              <td>
                Ski Pole
              </td>
              <td>
                SP1013
              </td>
              <td>
                Salomon
              </td>
              <td>
                X-North
              </td>
              <td>
                38
              </td>
              <td>
                
              </td>
            </tr>
            <tr className="rent-again">
              <td>
                597
              </td>
              <td>
                12/6/2021               
              </td>
              <td>
                William                
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
            <tr className="rent-again">
              <td>
                373               
              </td>
              <td>
                1/16/2023                
              </td>
              <td>
                William                
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
            <tr className="rent-again">
              <td>
                529
              </td>
              <td>
                1/31/2023                
              </td>
              <td>
                William                
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
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <NavLink to="/reserve-equipment">
            <div className="card card-rounded text-center">
              <div className="card-body">
                <div className='col'>
                  <div className='row'>
                    <div className="col">
                    {/* <div className="col" style={{ display: 'flex', justifyContent: 'center' }}> */}
                      <img src="icons/repeat.png" alt="Recycle symbol" className="mx-auto d-block img-fluid card-image" />
                    </div>
                  </div>
                  <div className='row'>
                    <div className="col">
                      <button className="card-text btn btn-primary mt-3">
                        Select Same Equipment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export function RiderInformation(props) {
  return (
    <div className="container nav-bar-margin justify-content-center footer-padding">
      <form>
        <div className="row info justify-content-center">
          <div className="col col-md-8 mx-auto">
            <h1 className="page-title">
              User Info
            </h1>
            <div className="info-text rider-information-info-text">
              <p>
                We just need some info to:
              </p>
              <p>
                1. Show you the best options!
              </p>
              <p>
                2. Get everything set up safely.
              </p>
            </div>
          </div>
        </div>
        <div className="row sport-selection justify-content-center">
          <div className="col col-md-4 d-block input-section justify-content-center">
            <div>
              <h2 className="info section-title">
                Sport
              </h2>
              <p className="info info-text">
                Which sport(s) do you want to rent equipment for?
              </p>
            </div>
            <div className="col col-md-4 mx-auto">
              <div className="input-option">
                <label htmlFor="snowboard">
                  <input type="checkbox" id="snowboard" name="sport" value="snowboard" />
                  Snowboard
                </label>
              </div>
              <div className="input-option">
                <label htmlFor="ski">
                  <input type="checkbox" id="ski" name="sport" value="ski" />
                  Ski
                </label>
              </div>
              <div className="input-option">
                <label htmlFor="snowshoe">
                  <input type="checkbox" id="snowshoe" name="sport" value="snowshoe" />
                  Snowshoe
                </label>
              </div>
              <div className="input-option">
                <label htmlFor="paddleboard">
                  <input type="checkbox" id="paddleboard" name="sport" value="paddleboard" />
                  Paddleboard
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row info justify-content-center">
          <div className="col col-md-5 mx-auto">
            <div className="info-text">
              <p>
                If you're skiing or snowboarding, we'll need just a bit more info...
              </p>
            </div>
          </div>
        </div>
        <div className="row snowboard-ski-setting-selection justify-content-center mx-auto card-body">
          <div className="col col-md-4 snowboard-setting-selection">
            <h2 className="info section-title">
              Snowboarder
            </h2>
            <div className="input-section border-top">
              <label htmlFor="snowboard-direction" className="d-block">
                <h3 className="info input-section-title">
                  Direction
                </h3>
              </label>
              <div>
                <div className="input-option">
                  <label>
                    <input type="radio" id="regular" name="snowboard-direction" value="regular" />
                    Regular
                    <p className="input-option-additional-info">
                      (left foot forward)
                    </p>
                  </label>
                </div>
                <div className="input-option">
                  <label>
                    <input type="radio" id="neutral" name="snowboard-direction" value="neutral" />
                    Neutral
                    <p className="input-option-additional-info">
                      (either/both ways - aka "Switch")
                    </p>
                  </label>
                </div>
                <div className="input-option">
                  <label>
                    <input type="radio" id="goofy" name="snowboard-direction" value="goofy" />
                    Goofy
                    <p className="input-option-additional-info">
                      (right foot forward)
                    </p>
                  </label>
                </div>
              </div>
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
                <label htmlFor="front-binding-angle">
                  <h4 className="info input-section-title binding-angle-input-section-title">
                    Front Binding Angle
                  </h4>
                </label>
                <div>
                  <span>  
                    <select id="front-binding-angle" name="front-binding-angle" defaultValue="positive-15">
                      <option value="x0">
                        0
                      </option>
                      <option value="positive-3">
                        +3
                      </option>
                      <option value="positive-6">
                        +6
                      </option>
                      <option value="positive-9">
                        +9
                      </option>
                      <option value="positive-12">
                        +12
                      </option>
                      <option value="positive-15">
                        +15
                      </option>
                      <option value="positive-18">
                        +18
                      </option>
                      <option value="positive-21">
                        +21
                      </option>
                      <option value="positive-24">
                        +24
                      </option>
                      <option value="positive-27">
                        +27
                      </option>
                      <option value="positive-30">
                        +30
                      </option>
                      <option value="positive-33">
                        +33
                      </option>
                      <option value="positive-36">
                        +36
                      </option>
                      <option value="positive-39">
                        +39
                      </option>
                      <option value="positive-42">
                        +42
                      </option>
                      <option value="positive-45">
                        +45
                      </option>
                      <option value="positive-48">
                        +48
                      </option>
                      <option value="positive-51">
                        +51
                      </option>
                      <option value="positive-54">
                        +54
                      </option>
                      <option value="positive-57">
                        +57
                      </option>
                      <option value="positive-60">
                        +60
                      </option>
                      <option value="positive-63">
                        +63
                      </option>
                      <option value="positive-66">
                        +66
                      </option>
                      <option value="positive-69">
                        +69
                      </option>
                      <option value="positive-72">
                        +72
                      </option>
                      <option value="positive-75">
                        +75
                      </option>
                      <option value="positive-78">
                        +78
                      </option>
                      <option value="positive-81">
                        +81
                      </option>
                      <option value="positive-84">
                        +84
                      </option>
                      <option value="positive-87">
                        +87
                      </option>
                      <option value="positive-90">
                        +90
                      </option>
                    </select>
                    degrees
                  </span>
                </div>
              </div>
              
              
              <div className="input-section border-top">
                <label htmlFor="back-binding-angle">
                  <h4 className="info input-section-title binding-angle-input-section-title">
                    Back Binding Angle
                  </h4>
                </label>
                <div>
                  <span>
                    <select id="back-binding-angle" name="back-binding-angle" defaultValue="negative-9">
                      <option value="negative-90">
                        -90
                      </option>
                      <option value="negative-87">
                        -87
                      </option>
                      <option value="negative-84">
                        -84
                      </option>
                      <option value="negative-81">
                        -81
                      </option>
                      <option value="negative-78">
                        -78
                      </option>
                      <option value="negative-75">
                        -75
                      </option>
                      <option value="negative-72">
                        -72
                      </option>
                      <option value="negative-69">
                        -69
                      </option>
                      <option value="negative-66">
                        -66
                      </option>
                      <option value="negative-63">
                        -63
                      </option>
                      <option value="negative-60">
                        -60
                      </option>
                      <option value="negative-57">
                        -57
                      </option>
                      <option value="negative-54">
                        -54
                      </option>
                      <option value="negative-51">
                        -51
                      </option>
                      <option value="negative-48">
                        -48
                      </option>
                      <option value="negative-45">
                        -45
                      </option>
                      <option value="negative-42">
                        -42
                      </option>
                      <option value="negative-39">
                        -39
                      </option>
                      <option value="negative-36">
                        -36
                      </option>
                      <option value="negative-33">
                        -33
                      </option>
                      <option value="negative-30">
                        -30
                      </option>
                      <option value="negative-27">
                        -27
                      </option>
                      <option value="negative-24">
                        -24
                      </option>
                      <option value="negative-21">
                        -21
                      </option>
                      <option value="negative-18">
                        -18
                      </option>
                      <option value="negative-15">
                        -15
                      </option>
                      <option value="negative-12">
                        -12
                      </option>
                      <option value="negative-9">
                        -9
                      </option>
                      <option value="negative-6">
                        -6
                      </option>
                      <option value="negative-3">
                        -3
                      </option>
                      <option value="x0">
                        0
                      </option>
                      <option value="positive-3">
                        +3
                      </option>
                      <option value="positive-6">
                        +6
                      </option>
                      <option value="positive-9">
                        +9
                      </option>
                      <option value="positive-12">
                        +12
                      </option>
                      <option value="positive-15">
                        +15
                      </option>
                      <option value="positive-18">
                        +18
                      </option>
                      <option value="positive-21">
                        +21
                      </option>
                      <option value="positive-24">
                        +24
                      </option>
                      <option value="positive-27">
                        +27
                      </option>
                      <option value="positive-30">
                        +30
                      </option>
                      <option value="positive-33">
                        +33
                      </option>
                      <option value="positive-36">
                        +36
                      </option>
                      <option value="positive-39">
                        +39
                      </option>
                      <option value="positive-42">
                        +42
                      </option>
                      <option value="positive-45">
                        +45
                      </option>
                      <option value="positive-48">
                        +48
                      </option>
                      <option value="positive-51">
                        +51
                      </option>
                      <option value="positive-54">
                        +54
                      </option>
                      <option value="positive-57">
                        +57
                      </option>
                      <option value="positive-60">
                        +60
                      </option>
                      <option value="positive-63">
                        +63
                      </option>
                      <option value="positive-63">
                        +63
                      </option>
                      <option value="positive-66">
                        +66
                      </option>
                      <option value="positive-69">
                        +69
                      </option>
                      <option value="positive-72">
                        +72
                      </option>
                      <option value="positive-75">
                        +75
                      </option>
                      <option value="positive-78">
                        +78
                      </option>
                      <option value="positive-81">
                        +81
                      </option>
                      <option value="positive-84">
                        +84
                      </option>
                      <option value="positive-87">
                        +87
                      </option>
                      <option value="positive-90">
                        +90
                      </option>
                    </select>
                    degrees
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-md-4 ski-setting-selection">
            <div className="input-section">
              <h2 className="info section-title">
                Skier
              </h2>
  
              <div className="input-section text-center border-top">
                <label htmlFor="height">
                  <h3 className="info input-section-title">
                    Height
                  </h3>
                </label>
                <div>
                  <select id="height" name="height" defaultValue="x5-6">
                    <option value="less-than-4-10">
                      &lt;4&#39; 10&quot;
                    </option>
                    <option value="x4-11">
                      4&#39; 11&quot;
                    </option>
                    <option value="x5-0">
                      5&#39; 0&quot;
                    </option>
                    <option value="x5-1">
                      5&#39; 1&quot;
                    </option>
                    <option value="x5-2">
                      5&#39; 2&quot;
                    </option>
                    <option value="x5-3">
                      5&#39; 3&quot;
                    </option>
                    <option value="x5-4">
                      5&#39; 4&quot;
                    </option>
                    <option value="x5-5">
                      5&#39; 5&quot;
                    </option>
                    <option value="x5-6">
                      5&#39; 6&quot;
                    </option>
                    <option value="x5-7">
                      5&#39; 7&quot;
                    </option>
                    <option value="x5-8">
                      5&#39; 8&quot;
                    </option>
                    <option value="x5-9">
                      5&#39; 9&quot;
                    </option>
                    <option value="x5-10">
                      5&#39; 10&quot;
                    </option>
                    <option value="x5-11">
                      5&#39; 11&quot;
                    </option>
                    <option value="x6-0">
                      6&#39; 0&quot;
                    </option>
                    <option value="x6-1">
                      6&#39; 1&quot;
                    </option>
                    <option value="x6-2">
                      6&#39; 2&quot;
                    </option>
                    <option value="x6-3">
                      6&#39; 3&quot;
                    </option>
                    <option value="x6-4">
                      6&#39; 4&quot;
                    </option>
                    <option value="greater-than-or-equal-to-6-5">
                      &ge; 6&#39; 5&quot;
                    </option>
                  </select>
                </div>
              </div>
              
              
              <div className="input-section text-center border-top">
                <label htmlFor="weight">
                  <h3 className="info input-section-title">
                    Weight
                  </h3>
                </label>
                <div>
                  <span>
                    <select name="weight" id="weight" defaultValue="x140">
                      <option value="less-than-22">
                        &lt;22
                      </option>
                      <option value="x22">
                        22
                      </option>
                      <option value="x23">
                        23
                      </option>
                      <option value="x24">
                        24
                      </option>
                      <option value="x25">
                        25
                      </option>
                      <option value="x26">
                        26
                      </option>
                      <option value="x27">
                        27
                      </option>
                      <option value="x28">
                        28
                      </option>
                      <option value="x29">
                        29
                      </option>
                      <option value="x30">
                        30
                      </option>
                      <option value="x31">
                        31
                      </option>
                      <option value="x32">
                        32
                      </option>
                      <option value="x33">
                        33
                      </option>
                      <option value="x34">
                        34
                      </option>
                      <option value="x35">
                        35
                      </option>
                      <option value="x36">
                        36
                      </option>
                      <option value="x37">
                        37
                      </option>
                      <option value="x38">
                        38
                      </option>
                      <option value="x39">
                        39
                      </option>
                      <option value="x40">
                        40
                      </option>
                      <option value="x41">
                        41
                      </option>
                      <option value="x42">
                        42
                      </option>
                      <option value="x43">
                        43
                      </option>
                      <option value="x44">
                        44
                      </option>
                      <option value="x45">
                        45
                      </option>
                      <option value="x46">
                        46
                      </option>
                      <option value="x47">
                        47
                      </option>
                      <option value="x48">
                        48
                      </option>
                      <option value="x49">
                        49
                      </option>
                      <option value="x50">
                        50
                      </option>
                      <option value="x51">
                        51
                      </option>
                      <option value="x52">
                        52
                      </option>
                      <option value="x53">
                        53
                      </option>
                      <option value="x54">
                        54
                      </option>
                      <option value="x55">
                        55
                      </option>
                      <option value="x56">
                        56
                      </option>
                      <option value="x57">
                        57
                      </option>
                      <option value="x58">
                        58
                      </option>
                      <option value="x59">
                        59
                      </option>
                      <option value="x60">
                        60
                      </option>
                      <option value="x61">
                        61
                      </option>
                      <option value="x62">
                        62
                      </option>
                      <option value="x63">
                        63
                      </option>
                      <option value="x64">
                        64
                      </option>
                      <option value="x65">
                        65
                      </option>
                      <option value="x66">
                        66
                      </option>
                      <option value="x67">
                        67
                      </option>
                      <option value="x68">
                        68
                      </option>
                      <option value="x69">
                        69
                      </option>
                      <option value="x70">
                        70
                      </option>
                      <option value="x71">
                        71
                      </option>
                      <option value="x72">
                        72
                      </option>
                      <option value="x73">
                        73
                      </option>
                      <option value="x74">
                        74
                      </option>
                      <option value="x75">
                        75
                      </option>
                      <option value="x76">
                        76
                      </option>
                      <option value="x77">
                        77
                      </option>
                      <option value="x78">
                        78
                      </option>
                      <option value="x79">
                        79
                      </option>
                      <option value="x80">
                        80
                      </option>
                      <option value="x81">
                        81
                      </option>
                      <option value="x82">
                        82
                      </option>
                      <option value="x83">
                        83
                      </option>
                      <option value="x84">
                        84
                      </option>
                      <option value="x85">
                        85
                      </option>
                      <option value="x86">
                        86
                      </option>
                      <option value="x87">
                        87
                      </option>
                      <option value="x88">
                        88
                      </option>
                      <option value="x89">
                        89
                      </option>
                      <option value="x90">
                        90
                      </option>
                      <option value="x91">
                        91
                      </option>
                      <option value="x92">
                        92
                      </option>
                      <option value="x93">
                        93
                      </option>
                      <option value="x94">
                        94
                      </option>
                      <option value="x95">
                        95
                      </option>
                      <option value="x96">
                        96
                      </option>
                      <option value="x97">
                        97
                      </option>
                      <option value="x98">
                        98
                      </option>
                      <option value="x99">
                        99
                      </option>
                      <option value="x100">
                        100
                      </option>
                      <option value="x101">
                        101
                      </option>
                      <option value="x102">
                        102
                      </option>
                      <option value="x103">
                        103
                      </option>
                      <option value="x104">
                        104
                      </option>
                      <option value="x105">
                        105
                      </option>
                      <option value="x106">
                        106
                      </option>
                      <option value="x107">
                        107
                      </option>
                      <option value="x108">
                        108
                      </option>
                      <option value="x109">
                        109
                      </option>
                      <option value="x110">
                        110
                      </option>
                      <option value="x111">
                        111
                      </option>
                      <option value="x112">
                        112
                      </option>
                      <option value="x113">
                        113
                      </option>
                      <option value="x114">
                        114
                      </option>
                      <option value="x115">
                        115
                      </option>
                      <option value="x116">
                        116
                      </option>
                      <option value="x117">
                        117
                      </option>
                      <option value="x118">
                        118
                      </option>
                      <option value="x119">
                        119
                      </option>
                      <option value="x120">
                        120
                      </option>
                      <option value="x121">
                        121
                      </option>
                      <option value="x122">
                        122
                      </option>
                      <option value="x123">
                        123
                      </option>
                      <option value="x124">
                        124
                      </option>
                      <option value="x125">
                        125
                      </option>
                      <option value="x126">
                        126
                      </option>
                      <option value="x127">
                        127
                      </option>
                      <option value="x128">
                        128
                      </option>
                      <option value="x129">
                        129
                      </option>
                      <option value="x130">
                        130
                      </option>
                      <option value="x131">
                        131
                      </option>
                      <option value="x132">
                        132
                      </option>
                      <option value="x133">
                        133
                      </option>
                      <option value="x134">
                        134
                      </option>
                      <option value="x135">
                        135
                      </option>
                      <option value="x136">
                        136
                      </option>
                      <option value="x137">
                        137
                      </option>
                      <option value="x138">
                        138
                      </option>
                      <option value="x139">
                        139
                      </option>
                      <option value="x140">
                        140
                      </option>
                      <option value="x141">
                        141
                      </option>
                      <option value="x142">
                        142
                      </option>
                      <option value="x143">
                        143
                      </option>
                      <option value="x144">
                        144
                      </option>
                      <option value="x145">
                        145
                      </option>
                      <option value="x146">
                        146
                      </option>
                      <option value="x147">
                        147
                      </option>
                      <option value="x148">
                        148
                      </option>
                      <option value="x149">
                        149
                      </option>
                      <option value="x150">
                        150
                      </option>
                      <option value="x151">
                        151
                      </option>
                      <option value="x152">
                        152
                      </option>
                      <option value="x153">
                        153
                      </option>
                      <option value="x154">
                        154
                      </option>
                      <option value="x155">
                        155
                      </option>
                      <option value="x156">
                        156
                      </option>
                      <option value="x157">
                        157
                      </option>
                      <option value="x158">
                        158
                      </option>
                      <option value="x159">
                        159
                      </option>
                      <option value="x160">
                        160
                      </option>
                      <option value="x161">
                        161
                      </option>
                      <option value="x162">
                        162
                      </option>
                      <option value="x163">
                        163
                      </option>
                      <option value="x164">
                        164
                      </option>
                      <option value="x165">
                        165
                      </option>
                      <option value="x166">
                        166
                      </option>
                      <option value="x167">
                        167
                      </option>
                      <option value="x168">
                        168
                      </option>
                      <option value="x169">
                        169
                      </option>
                      <option value="x170">
                        170
                      </option>
                      <option value="x171">
                        171
                      </option>
                      <option value="x172">
                        172
                      </option>
                      <option value="x173">
                        173
                      </option>
                      <option value="x174">
                        174
                      </option>
                      <option value="x175">
                        175
                      </option>
                      <option value="x176">
                        176
                      </option>
                      <option value="x177">
                        177
                      </option>
                      <option value="x178">
                        178
                      </option>
                      <option value="x179">
                        179
                      </option>
                      <option value="x180">
                        180
                      </option>
                      <option value="x181">
                        181
                      </option>
                      <option value="x182">
                        182
                      </option>
                      <option value="x183">
                        183
                      </option>
                      <option value="x184">
                        184
                      </option>
                      <option value="x185">
                        185
                      </option>
                      <option value="x186">
                        186
                      </option>
                      <option value="x187">
                        187
                      </option>
                      <option value="x188">
                        188
                      </option>
                      <option value="x189">
                        189
                      </option>
                      <option value="x190">
                        190
                      </option>
                      <option value="x191">
                        191
                      </option>
                      <option value="x192">
                        192
                      </option>
                      <option value="x193">
                        193
                      </option>
                      <option value="x194">
                        194
                      </option>
                      <option value="x195">
                        195
                      </option>
                      <option value="x196">
                        196
                      </option>
                      <option value="x197">
                        197
                      </option>
                      <option value="x198">
                        198
                      </option>
                      <option value="x199">
                        199
                      </option>
                      <option value="x200">
                        200
                      </option>
                      <option value="x201">
                        201
                      </option>
                      <option value="x202">
                        202
                      </option>
                      <option value="x203">
                        203
                      </option>
                      <option value="x204">
                        204
                      </option>
                      <option value="x205">
                        205
                      </option>
                      <option value="x206">
                        206
                      </option>
                      <option value="x207">
                        207
                      </option>
                      <option value="x208">
                        208
                      </option>
                      <option value="x209">
                        209
                      </option>
                      <option value="greater-than-or-equal-to-210">
                        210+
                      </option>
                    </select>
                    lbs
                  </span>
                </div>
              </div>
  
              <div className="input-section text-center border-top">
                <label htmlFor="age">
                  <h3 className="info input-section-title">
                    Age
                  </h3>
                </label>
                <div>
                  <span>
                    <select id="age" name="age" defaultValue="x10-to-49">
                      <option value="less-than-10">
                        &lt;10
                      </option>
                      <option value="x10-to-49">
                        10-49
                      </option>
                      <option value="greater-than-or-equal-to-50">
                        50+
                      </option>
                    </select>
                    years old
                  </span>
                </div>
              </div>
  
              <div className="input-section border-top">
                <label htmlFor="release-preference" className="d-block">
                  <div className="info input-section-title text-center release-preference-input-section-title">
                    <h3>
                      Release Preference
                    </h3>
                    <h4>
                      aka "Skier Type"
                    </h4>
                  </div>
                </label>
                <div>
                  <div className="input-option">
                    <label>
                      <input type="radio" id="i-minus" name="release-preference" value="i-minus" />
                      I-
                      <p className="input-option-additional-info">
                        Less common: for some beginners where extra caution is needed
                      </p>
                    </label>
                  </div>
                  <div className="input-option">
                    <label>
                      <input type="radio" id="i" name="release-preference" value="i" />
                      I
                      <p className="input-option-additional-info">
                        Less aggressive skiing: often corresponds with beginners
                      </p>
                    </label>
                  </div>
                  <div className="input-option">
                    <label>
                      <input type="radio" id="ii" name="release-preference" value="ii" />
                      II
                      <p className="input-option-additional-info">
                        Moderately aggressive skiing: often corresponds with intermediate-level skiers
                      </p>
                    </label>
                  </div>
                  <div className="input-option">
                    <label>
                      <input type="radio" id="iii" name="release-preference" value="iii" />
                      III
                      <p className="input-option-additional-info">
                        Aggressive skiing: often corresponds with advanced skiers riding difficult terrain
                      </p>
                    </label>
                  </div>
                  <div className="input-option">
                    <label>
                      <input type="radio" id="iii-plus" name="release-preference" value="iii-plus" />
                      III+
                      <p className="input-option-additional-info">
                        Most aggressive skiing: for certain experts on extreme terrain
                      </p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col col-md-4 mx-auto input-section">
            <h2 className="info input-section-title">
              Notes
            </h2>
            <label htmlFor="notes" className="info">
              Anything else for us to know about how you want your rental set up?
            </label>
            <div className="input-section">
              <textarea name="notes" id="notes" cols="40" rows="3"></textarea>
            </div>
            <p className="thank-you">
              Thank you!
            </p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col col-md-4 d-flex mx-auto">
            <NavLink to="/equipment-db-options">
              <div className="card card-rounded text-center">
                <div className="card-body">
                  <div className="col d-flex mx-auto justify-content-center text-center">
                    <div className="row d-flex mx-auto justify-content-center text-center">
                      <div className="col-4 mx-auto">
                      {/* <div className="col-4 mx-auto" style={{ display: 'flex', justifyContent: 'center' }}> */}
                        <img src="icons/snowboard.png" alt="Snowboard" className="mx-auto d-inline img-fluid card-image-two-icons" />
                      </div>
                      <div className="col-4 mx-auto">
                      {/* <div className="col-4 mx-auto" style={{ display: 'flex', justifyContent: 'center' }}> */}
                        <img src="icons/ski.png" alt="Pair of skis and pair of ski poles" className="mx-auto d-inline img-fluid card-image-two-icons" />
                      </div> 
                    </div>
                    <div className='row d-flex mx-auto justify-content-center text-center'>
                      <div className='col-12 d-flex mx-auto justify-content-center text-center'>
                        <button className="card-text btn btn-primary mt-3">
                          See Options!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
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
    <div className="container nav-bar-margin justify-content-center footer-padding">
      <div className="row info">
        <div className="col col-md-5 mx-auto">
          <h1 className="page-title">
            Equipment Options
          </h1>
          <div className="info-text">
            <p>
              Use the checkboxes to select the equipment you want to rent!
            </p>
          </div>
        </div>
      </div>
      <div className="row rental-equipment-table table-container">
        <table>
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
                <label>
                  <input type="checkbox" 
                checked={selectedEquipment01} onChange={handleSelect01} name="selected" />
                </label>
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
                <label>
                  <input type="checkbox" checked={selectedEquipment02} onChange={handleSelect02} name="selected" />
                </label>
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
                <label>
                  <input type="checkbox" checked={selectedEquipment03} onChange={handleSelect03} name="selected" />
                </label>
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
                <label>
                  <input type="checkbox" checked={selectedEquipment04} onChange={handleSelect04} name="selected" />
                </label>
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
                <label>
                  <input type="checkbox" checked={selectedEquipment05} onChange={handleSelect05} name="selected" />
                </label>
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
                <label>
                  <input type="checkbox" checked={selectedEquipment06} onChange={handleSelect06} name="selected" />
                </label>
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
                <label>
                  <input type="checkbox" checked={selectedEquipment07} onChange={handleSelect07} name="selected" />
                </label>
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
                <label>
                  <input type="checkbox" checked={selectedEquipment08} onChange={handleSelect08} name="selected" />
                </label>
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
                <label>
                  <input type="checkbox" checked={selectedEquipment09} onChange={handleSelect09} name="selected" />
                </label>
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
        </table>
      </div>

      <div className="row rental-equipment-table table-container">
        <table>
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
        </table>
      </div>


      

      <div className="row card-row justify-content-center">
        <div className="col col-md-4 d-flex">
          <NavLink to="/reserve-equipment">
            <div className="card card-rounded text-center">
              <div className="card-body">
                <div className="col d-flex mx-auto justify-content-center text-center">
                  <div className="row d-flex mx-auto justify-content-center text-center">
                    <div className="col-4 mx-auto">
                    {/* <div className="col-4 mx-auto" style={{ display: 'flex', justifyContent: 'center' }}> */}
                      <img src="icons/snowboard.png" alt="Snowboard" className="mx-auto d-inline img-fluid card-image-two-icons" />
                    </div>
                    <div className="col-4 mx-auto">
                    {/* <div className="col-4 mx-auto" style={{ display: 'flex', justifyContent: 'center' }}> */}
                      <img src="icons/ski.png" alt="Pair of skis and pair of ski poles" className="mx-auto d-inline img-fluid card-image-two-icons" />
                    </div> 
                  </div>
                  <div className='row d-flex mx-auto justify-content-center text-center'>
                    <div className='col-12 d-flex mx-auto justify-content-center text-center'>
                      <button className="card-text btn btn-primary mt-3">
                        Get Selected Equipment!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>                
      </div>
      <div className="row card-row justify-content-center">
        <div className="col col-md-4 d-flex">
          <NavLink to="/previous-rental">
            <div className="card card-rounded d-flex justify-content-center text-center">
              <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                <div className="col d-flex justify-content-center text-center">
                  <div className='row d-flex justify-content-center text-center'>
                    <div className='col-12'>
                    {/* <div className='col-12' style={{ display: 'flex', justifyContent: 'center' }}> */}
                      <img src="icons/back-in-time.png" alt="Clock running backwards" className="mx-auto card-image" />
                    </div>
                  </div>
                  <div className='row d-flex justify-content-center  text-center'>
                    <div className='col-12 d-flex justify-content-center text-center'>
                      <button className="card-text btn btn-primary mt-3">
                        View Previous Rentals
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="col col-md-4 d-flex">
          <NavLink to="/rider-information">
            <div className="card card-rounded d-flex justify-content-center text-center">
              <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                <div className="col d-flex justify-content-center text-center">
                  <div className='row d-flex justify-content-center text-center'>
                    <div className='col-12'>
                    {/* <div className='col-12' style={{ display: 'flex', justifyContent: 'center' }}> */}
                      <img src="icons/controls.png" alt="Toggles" className="mx-auto d-block img-fluid card-image" />
                    </div>
                  </div>
                  <div className='row d-flex justify-content-center  text-center'>
                    <div className='col-12 d-flex justify-content-center text-center'>
                      <button className="card-text btn btn-primary mt-3">
                        Adjust User Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export function ReserveEquipment(props) {
  return (
    <div className="container nav-bar-margin justify-content-center footer-padding">
      <div className="row info">
        <div className="col col-md-5 mx-auto">
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
        </div>
      </div>
      <div className="row rental-equipment-table justify-content-center table-container">
        <table className="reserve-equipment-table">
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
        </table>
      </div>
      <div className="row card-row justify-content-center">
        <div className="col col-md-4 d-flex">
          <NavLink to="/appointment">
            <div className="card card-rounded text-center">
              <div className="card-body">
                <div className="col d-flex mx-auto justify-content-center text-center">
                  <div className="row d-flex mx-auto justify-content-center text-center">
                    <div className="col-4 mx-auto">
                    {/* <div className="col-4 mx-auto" style={{ display: 'flex', justifyContent: 'center' }}> */}
                      <img src="icons/snowboard.png" alt="Snowboard" className="mx-auto d-inline img-fluid card-image-two-icons" />
                    </div>
                    <div className="col-4 mx-auto">
                    {/* <div className="col-4 mx-auto" style={{ display: 'flex', justifyContent: 'center' }}> */}
                      <img src="icons/ski.png" alt="Pair of skis and pair of ski poles" className="mx-auto d-inline img-fluid card-image-two-icons" />
                    </div> 
                  </div>
                  <div className='row d-flex mx-auto justify-content-center text-center'>
                    <div className='col-12 d-flex mx-auto justify-content-center text-center'>
                      <button className="card-text btn btn-primary mt-3">
                        Reserve and Schedule!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>                
      </div>
      <div className="row card-row justify-content-center">
        <div className="col col-md-4 d-flex">
          <NavLink to="/equipment-db-options">
            <div className="card card-rounded d-flex justify-content-center text-center">
              <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                <div className="col d-flex justify-content-center text-center">
                  <div className='row d-flex justify-content-center text-center'>
                    <div className='col-12'>
                    {/* <div className='col-12' style={{ display: 'flex', justifyContent: 'center' }}> */}
                      <img src="icons/controls.png" alt="Toggles" className="mx-auto d-block img-fluid card-image" />
                    </div>
                  </div>
                  <div className='row d-flex justify-content-center  text-center'>
                    <div className='col-12 d-flex justify-content-center text-center'>
                      <button className="card-text btn btn-primary mt-3">
                        Select Different Equipment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}