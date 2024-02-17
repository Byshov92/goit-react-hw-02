import { useState, useEffect } from 'react';
import { Description } from './description/Description';
import { Options } from './Options/Options';
import { Notification } from './Notification/Notification';
import { Feedback } from './Feedback/Feedback';
import css from './App.module.css';

export const App = () => {
  const [values, setValues] = useState(
    () =>
      JSON.parse(localStorage.getItem('feedback')) || {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );

  const onUpdateFeedback = option => {
    setValues({
      ...values,
      [option]: values[option] + 1,
    });
  };

  const onReset = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(values));
  }, [values]);

  const totalFeedback = values.good + values.neutral + values.bad;

  const isHidden = totalFeedback === 0;

  const positiveFeedback = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );

  return (
    <div className={css.container}>
      <Description />
      <Options
        onUpdate={onUpdateFeedback}
        isHidden={isHidden}
        onReset={onReset}
      />
      {isHidden ? (
        <Notification />
      ) : (
        <Feedback
          values={values}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
};
