
import React, { PropTypes } from 'react';

import CardWidget from 'odyssee-client/lib/components/widgets/CardWidget';

import ReactHighcharts from 'react-highcharts';
import _ from 'lodash';


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

    const chart = _.isEmpty(highchartsConfig.series) ?
      <p>no scores to compute on...</p> :
      <ReactHighcharts config={highchartsConfig} />;

    return (
      <CardWidget _name="chart" {...other}>
        <div className="ui basic segment">
          {chart}
        </div>
      </CardWidget>
    );
  }
}

ChartWidget.propTypes = {
  ownStore: PropTypes.object.isRequired,
};

export default ChartWidget;
