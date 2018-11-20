import React, {Component} from "react";
import WeatherData from "../store/weather-data";
import {toJS} from "mobx";
import {observer} from "mobx-react";
import moment from "moment";
import {Button, Col, Row, Card} from "antd";

function TaslimWeatherData(alldata) {
  const weatherData = alldata.alldata.map((Wdata) =>
    <div className="customdiv" key={Wdata.time}>
      <Col span={3} className="weatherBox">
        <Card title={moment.unix(Wdata.time).format("Do MMM YYYY")} bordered={true}>
          <p><b>Summary</b>: {Wdata.summary}</p> 
          <p><b>temperatureLow</b>: {Wdata.temperatureLow}</p> 
          <p><b>temperatureLow</b>: {Wdata.temperatureLow}</p> 
        </Card>
      </Col>

    </div>
  );
  return (
    <Row>{weatherData}</Row>
  );
}

const Home = observer(
class Home extends Component {
  componentDidMount() {
    WeatherData.getWeatherData();
  }
  render() {
          let thdata = [];
          const weatherData = toJS(WeatherData.weatherResult);
          if(Object.keys(weatherData).length) {
            thdata = weatherData.daily ?  weatherData.daily.data : [];
          }
          return (
              <div className="wraper">
                <TaslimWeatherData alldata={thdata} />
              </div>
          )
      }
  }
);

export default Home;