import { useState } from 'react';

type Operation = 'add' | 'subtract' | 'multiply' | 'divide' | 'power' | 'clear';

interface CalculatorState {
    inputOne: string;
    inputTwo: string;
    result: string;
    resultColor: string;
    setInputOne: (value: string) => void;
    setInputTwo: (value: string) => void;
    performOperation: (operation: Operation) => void;
}

export const useCalculator = (): CalculatorState => {
    const [inputOne, setInputOne] = useState('');
    const [inputTwo, setInputTwo] = useState('');
    const [result, setResult] = useState('');
    const [resultColor, setResultColor] = useState('black');

    const updateResult = (value: number | string, isError: boolean = false): void => {
        setResult(String(value));
        if (isError) {
            setResultColor('red');
        } else {
            setResultColor(typeof value === 'number' && value < 0 ? 'red' : 'black');
        }
    };

    const performOperation = (operation: Operation): void => {
        const num1 = Number(inputOne);
        const num2 = Number(inputTwo);

        switch (operation) {
            case 'add': {
                updateResult(num1 + num2);
                break;
            }
            case 'subtract': {
                updateResult(num1 - num2);
                break;
            }
            case 'multiply': {
                updateResult(num1 * num2);
                break;
            }
            case 'divide': {
                if (num2 === 0) {
                    updateResult('undefined', true);
                } else {
                    updateResult(num1 / num2);
                }
                break;
            }
            case 'power': {
                let res = 1;
                const exponent = num2;
                if (exponent === 0) {
                    res = 1;
                } else if (exponent > 0) {
                    for (let i = 0; i < exponent; i++) {
                        res *= num1;
                    }
                } else {
                    for (let i = 0; i < -exponent; i++) {
                        res *= num1;
                    }
                    res = 1 / res;
                }
                updateResult(res);
                break;
            }
            case 'clear': {
                setInputOne('');
                setInputTwo('');
                setResult('');
                setResultColor('black');
                break;
            }
            default:
                break;
        }
    };

    return {
        inputOne,
        inputTwo,
        result,
        resultColor,
        setInputOne,
        setInputTwo,
        performOperation
    };
};

export type { Operation };