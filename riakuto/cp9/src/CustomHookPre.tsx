import {FC} from 'react';
import {Button, Card, Icon, Statistic} from 'semantic-ui-react';
import './Timer.css';


// presentational component
type Props = {
  timeLeft? :number;
  isPrime? : boolean;
  reset? : () => void;
};

const CustomHookPre: FC<Props> = ({
  timeLeft = 0,
  isPrime = false,
  reset = () => undefined,
}) => (
  <Card>
    <Statistic className="number-board">
      <Statistic.Label>time</Statistic.Label>
      <Statistic.Value className={isPrime ? 'prime-number' : undefined}>
        {timeLeft}
      </Statistic.Value>
    </Statistic>
    <Card.Content>
      <Button color="red" fluid onClick={reset}>
        <Icon name="redo" id="reset-icon">
          &nbsp;Reset
        </Icon>
      </Button>
    </Card.Content>
  </Card>
);

export default CustomHookPre;