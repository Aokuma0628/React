import {FC} from 'react';
import useTimer from './use-timer';
import Timer from './CustomHookPre';

// container component
const CustomHookCon: FC<{limit: number}> = ({limit}) => {
  const [timeLeft, isPrime, reset] = useTimer(limit);

  return <Timer timeLeft={timeLeft} isPrime={isPrime} reset={reset} />;
};

export default CustomHookCon;
