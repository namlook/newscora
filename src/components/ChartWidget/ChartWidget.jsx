
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import CardWidget from 'odyssee-client/lib/components/widgets/CardWidget';
import Widget from 'odyssee-client/lib/components/Widget';

import ReactHighcharts from 'react-highcharts';


class ChartWidget extends React.Component {

  buildHighchartsConfig(allScores) {
    const series = allScores.groupBy((o) => o.participant)
      .reduce((acc, scores, participantName) => {
        let total = 0;
        return [
          ...acc,
          {
            name: participantName,
            data: scores.toJS().map((score) => {
              total += score.score;
              return total;
            }),
          },
        ];
      }, []);

    return {
      title: { text: '' },
      plotOptions: {
        series: {
          animation: false,
        },
      },
      series,
    };
  }

  render() {
    const { ownStore, ...other } = this.props;
    const highchartsConfig = this.buildHighchartsConfig(ownStore.get('content'));

    if (!this.props.ownStore.get('content').size) {
      return (
        <Widget>
          <div className="ui basic center aligned segment">
            Vous devez d'abord <Link to="/scores">ajouter des scores</Link>
          </div>
        </Widget>
      );
    }

    return (
      <CardWidget _name="chart" {...other}>
        <div className="ui basic segment">
          <ReactHighcharts config={highchartsConfig} />
        </div>
      </CardWidget>
    );
  }
}

ChartWidget.propTypes = {
  ownStore: PropTypes.object.isRequired,
};

export default ChartWidget;
