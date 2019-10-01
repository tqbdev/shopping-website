import React, {PropTypes,Component} from 'react';
import Countdown from 'react-countdown-now'
import './Deals.css';
import { userInfo } from 'os';

export default class Deals extends Component {
  
  constructor(props)
  {
    super(props);
    this.state={
      days: 3,
      hours: 10,
      minutes: 45,
      seconds: 0,
    }
  }
 
componentDidMount(){
  
  this.interval = setInterval(() => this.decrementTime());
}
 
decrementTime(){

   const time = Date.parse(new Date());
   const seconds = Math.floor((time/1000) % 60);
   const minutes = Math.floor((time/1000/60) % 60);
   const hours = Math.floor(time/(1000*60*60) % 24);
   const days = Math.floor(time/(1000*60*60*24) % 24);

    this.setState({
      days: days,
      minutes: minutes,
      hours: hours,
      seconds: seconds,
    })
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
                    <div className="timer_unit">Days</div>
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


