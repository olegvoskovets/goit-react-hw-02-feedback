import React, { Component } from 'react';
import css from './App.module.css';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCliclFeedback = e => {
    this.setState(this.state);
    const name = e.target.name;
    this.setState({ [name]: this.state[name] + 1 });

    // switch (e.target.name) {
    //   case 'good':
    //     this.setState(prevState => {
    //       return {
    //         good: prevState.good + 1,
    //       };
    //     });
    //     break;
    //   case 'neutral':
    //     this.setState(prevState => {
    //       return {
    //         neutral: prevState.neutral + 1,
    //       };
    //     });
    //     break;
    //   case 'bad':
    //     this.setState(prevState => {
    //       return {
    //         bad: prevState.bad + 1,
    //       };
    //     });
    //     break;

    //   default:
    //     console.log('No name');
    // }
  };

  countTotalFeedback = obj => {
    let count = 0;
    for (let key in obj) {
      count += obj[key];
    }
    return count;
  };
  countPositiveFeedbackPercentage = (count, good) => {
    if (count > 0) {
      return Math.round((good / count) * 100);
    }
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback(this.state);
    const prosent = this.countPositiveFeedbackPercentage(
      total,
      this.state.good
    );

    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleCliclFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics state={this.state} total={total} prosent={prosent} />
        </Section>
      </div>
    );
  }
}

export default App;
