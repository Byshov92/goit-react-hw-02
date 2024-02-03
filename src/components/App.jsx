import { Description } from './description/Description';
import { Feedback } from './feedback/Feedback';
import { Options } from './options/Options';

export const App = () => {
  // state = { good: 0, neutral: 0, bad: 0 };

  return (
    <>
      <Description />;
      <Options />;
      <Feedback />;
    </>
  );
};
