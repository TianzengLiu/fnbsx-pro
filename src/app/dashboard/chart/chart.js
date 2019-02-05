import React from 'react';
import './chart.css';

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.chart = this.buildChart(1, 60);
    this.labels = this.getLabels(6);

    this.views = [{
      mode: '1H',
      step: 1,
      points: 60,
      active: true
    }, {
      mode: '24H',
      step: 4,
      points: 360
    },{
      mode: '1W',
      step: 30,
      points: 336
    },{
      mode: '1M',
      step: 120,
      points: 360
    },{
      mode: '1Y',
      step: 1440,
      points: 365
    },{
      mode: 'ALL',
      step: 4320
    }];

    this.state = {
      chart: this.chart,
      labels: this.labels,
      activeView: '1H',
      tooltipIndex: null
    };
  }

  buildChart(step, points) {
    this.lastIndex = this.props.chart.length - 1;
    this.lastDate =
      new Date(this.props.chart[this.lastIndex].date.replace(/ /g, 'T'));

    const chart = [];

    if (points) for (let i = 1; i <= points; i++)
      chart.push(this.buildPoint(chart, step));
    else while (this.lastIndex >= 0)
      chart.push(this.buildPoint(chart, step));

    chart.reverse().forEach((point, index) => point.index = index + 1);

    return chart;
  }

  buildPoint(chart, step) {
    const currentDate = chart.length
      ? new Date(chart[chart.length - 1].date)
      : this.lastDate;

    const point = {
      date: currentDate,
      value: this.props.chart[this.lastIndex].value
    };

    chart.length && currentDate.setMinutes(currentDate.getMinutes() - step);

    while (this.lastIndex >= 0 && new Date(currentDate) <=
      new Date(this.props.chart[this.lastIndex].date.replace(/ /g, 'T')))
      this.lastIndex--;

    return point;
  }

  buildPath(chart) {
    const maxY = this.state.chart.reduce((max, point) =>
      point.value > max ? point.value : max, this.state.chart[0].value);

    let pathD = 'M 0 230 ';

    pathD +=
      `L ${this.getX(chart[0].index - 1)} ${this.getY(maxY, chart[0].value)} `;

    pathD += chart.map((point, index) => {
      const x = this.getX(point.index);
      const y = this.getY(maxY, point.value);

      this.chart[index].x = x;
      this.chart[index].y = y;

      return `L ${x} ${y} `;
    }).join('');

    pathD += 'L 900 230';

    return <path
      d={pathD}
      style={{ stroke: '#0667D0' }}
      className="chart_path"
    />;
  }

  getX(x) {
    return x / this.state.chart.length * 900;
  }

  getY(maxY, y) {
    return 230 - (y / maxY * 230);
  }

  setView(view) {
    const { mode, step, points } = view;

    this.chart = this.buildChart(step, points);
    this.labels = this.getLabels(6);

    this.setState({
      chart: this.chart,
      labels: this.labels,
      activeView: mode
    });
  }

  getLabels(count) {
    const step = parseInt(this.chart.length / count);
    let currentIndex = step;

    const labels = [this.chart[0]];

    while (count > 2) {
      labels.push(this.chart[currentIndex]);

      currentIndex += step;
      count--;
    }

    labels.push(this.chart[this.chart.length - 1]);

    return labels;
  }

  getDisplayedLabel(label) {
    const { date } = label;

    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.toLocaleString('en', { month: 'short' });

    switch (this.state.activeView) {
      case '1H':
      case '24H':
        return date.toLocaleString('en', { hour: '2-digit', minute:'2-digit' });

      case '1W':
      case '1M':
        return `${month} ${day}`;

      case '1Y':
      case 'ALL':
        return `${month} ${year}`;
    }
  }

  stopHover(e) {
    if (e.relatedTarget.classList &&
      e.relatedTarget.classList.contains('chart_tooltip')) return;

    this.setState({ hover: false });
  }

  setCoords(e) {
    const svgLocation = this.svg.getBoundingClientRect();

    this.width = svgLocation.width;
    this.height = svgLocation.height;

    const offset = e.clientX - svgLocation.left;
    const mouseX = offset * 900 / svgLocation.width;

    let idx = 0;
    while (mouseX > this.chart[idx].x) idx++;

    const left = this.chart[idx].x - mouseX;
    const right = this.chart[idx - 1] && mouseX - this.chart[idx - 1].x;

    const isCurrentIndex = right ? (left < right) : true;
    const currentIndex = isCurrentIndex ? idx : idx - 1;

    if (currentIndex === this.state.tooltipIndex) return;

    this.setState({
      hover: true,
      tooltipIndex: currentIndex,
      tooltipX: this.chart[currentIndex].x,
      tooltipY: this.chart[currentIndex].y,
    });
  }

  showCircle() {
    return (
      <circle
        r={3}
        cx={this.state.tooltipX}
        cy={this.state.tooltipY}
        style={{ fill: '#fff', stroke: '#808080' }}
      />
    );
  }

  showTooltip() {
    const x = this.state.tooltipX * this.width / 900;
    const y = this.state.tooltipY * this.height / 230;

    const point = this.chart[this.state.tooltipIndex];
    const { date } = point;

    const month = date.toLocaleString('en', { month: 'long' });
    const day = date.getDate();
    const hour = date.toLocaleString('en', {
      hour: '2-digit', minute:'2-digit'
    });

    return (
      <div
        style={{
          height: '50px',
          width: '156px',
          borderRadius: '6px',
          background: '#4C5B6F',
          left: `${x - 78}px`,
          top: `${y + 40}px`
        }}
        className="chart_tooltip"
        onMouseMove={ e => this.setCoords(e) }
        onMouseLeave={ e => this.stopHover(e) }>
        {this.props.header.currency}{point.value}
        <span className="chart_tooltip_date">{month} {day} {hour}</span>
      </div>
    );
  }

  render() {
    const { title, abbr, currency, amount, delta } =
      this.props.header;

    const { marketCap, volume, circulatingSupply, allTimeHigh } =
      this.props.footer;

    const deltaABS = Math.abs(delta);
    const isNegative = delta < 0;

    return (
      <section className="chart">
        <section className="chart_title">
          <div className="chart_logo"></div>
          <p>{title} <span>({abbr})</span></p>
        </section>

        <section className="chart_chart">
          <div className="chart_header">
            <p className="chart_amount">{currency}{amount}</p>

            <p
              className="chart_delta"
              style={{ color: isNegative ? '#FF4949' : '#61CA00' }}>
              {isNegative && '-'}
              {currency}{deltaABS} ({(deltaABS * 100 / amount).toFixed(2)}%)
            </p>

            <ul className="chart_viewBar">
              {this.views.map(view => {
                const activeView = view.mode === this.state.activeView
                  ? ' chart_activeView' : '';

                return <li
                  key={view.mode}
                  className={`chart_view${activeView}`}
                  onClick={() => this.setView(view)}
                  style={{ color: activeView
                    ? '#015BD3' : '#A5ADB7' }}>{view.mode}
                </li>;
              })}
            </ul>
          </div>

          <svg
            viewBox="1 -5 898 235"
            preserveAspectRatio="none"
            ref={svg => this.svg = svg}
            onMouseLeave={ e => this.stopHover(e) }
            onMouseMove={ e => this.setCoords(e) }>
            {this.buildPath(this.state.chart)}
            {this.state.hover && this.showCircle()}
          </svg>

          {this.state.hover && this.showTooltip()}

          <ul className="chart_labels">
            {this.state.labels.map(label => <li
              key={label.index}
              className="chart_label">
              {this.getDisplayedLabel(label)}
            </li>)}
          </ul>

          <div className="chart_footer">
            <div>
              <p className="chart_footer_indicator">
                Market Cap
              </p>
              <p
                className="chart_footer_value">
                {currency}{marketCap}B
              </p>
            </div>
            <div>
              <p className="chart_footer_indicator">
                Volume (24 hours)
              </p>
              <p
                className="chart_footer_value">
                {currency}{volume}B
              </p>
            </div>
            <div>
              <p className="chart_footer_indicator">
                Circulating Supply
              </p>
              <p
                className="chart_footer_value">
                {circulatingSupply}M {abbr}
              </p>
            </div>
            <div>
              <p className="chart_footer_indicator">
                All time high
              </p>
              <p
                className="chart_footer_value">
                {currency}{allTimeHigh}
              </p>
            </div>
          </div>
        </section>
      </section>
    );
  }
}


