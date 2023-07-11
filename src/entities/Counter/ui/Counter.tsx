import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { add, increment, decrement } = useCounterActions();
    const handInncrement = () => {
        increment();
    };
    const handDecrement = () => {
        decrement();
    };

    const handAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                data-testid="increment-btn"
                onClick={handInncrement}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={handDecrement}
            >
                {t('decrement')}
            </Button>
            <Button
                data-testid="addFiveBtn-btn"
                onClick={handAddFive}
            >
                {t('add5')}
            </Button>
        </div>
    );
};
