import React, {Component} from 'react';

import './Deals.css';

export default class Deals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 23,
      minutes: 45,
      hours: 15,
      days: 3
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.countDown(), 1000);
  }

  countDown() {
    if(this.state.hours == 0 && this.state.seconds == 0 && this.state.minutes == 0) {
      this.setState({
        seconds: 59,
        minutes: 59,
        hours: 23,
        days: this.state.days - 1
      })
    } else if(this.state.seconds == 0 && this.state.minutes == 0) {
      this.setState({
        seconds: 59,
        minutes: 59,
        hours: this.state.hours - 1
      })
    } else if(this.state.seconds == 0) {
      this.setState({
        seconds: 59,
        minutes: this.state.minutes - 1
      })
    } else {
      this.setState({
        seconds: this.state.seconds - 1
      })
    }
  }

  render () {
    return (
      <div className="deal_ofthe_week">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="deal_ofthe_week_img">
                <img src="assets/images/deal_ofthe_week.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 text-right deal_ofthe_week_col">
              <div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                <div className="section_title">
                  <h2>Deal Of The Week</h2>
                </div>
                <ul className="timer">
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="day" className="timer_num">{this.state.days}</div>
                    <div className="timer_unit">Day</div>
                  </li>
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="hour" className="timer_num">{this.state.hours}</div>
                    <div className="timer_unit">Hours</div>
                  </li>
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="minute" className="timer_num">{this.state.minutes}</div>
                    <div className="timer_unit">Mins</div>
                  </li>
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="second" className="timer_num">{this.state.seconds}</div>
                    <div className="timer_unit">Sec</div>
                  </li>
                </ul>
                <div className="red_button deal_ofthe_week_button"><a href="#">shop now</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
