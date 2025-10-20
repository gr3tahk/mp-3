import {useState} from 'react';
import styled from 'styled-components';

const Content = styled.div`
    margin-top: 8%;
    display: flex;
    flex-direction: column;
`;

const CalcTitle = styled.p`
    margin-bottom: 5%;
    text-align: center;
`;

const CalculatorWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
`;

const Calculator = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e0e0e0;
    padding: 20px;
    border-radius: 20px;
    width: 100%;
    box-sizing: border-box;
`;

const CalcInput = styled.input`
    width: 80%;
    padding: 5px 10px;
    margin-bottom: 10px;
    font-size: calc(2px + 2vw);
    text-align: left;
    border-radius: 10px;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`;

const Button = styled.button`
    width: 40px;
    height: 40px;
    margin-right: 8px;
    border-radius: 50%;
    border: none;
    background-color: #fea500;
    color: #fff;
    font-size: calc(2px + 1.5vw);
    cursor: pointer;

    &:hover {
        background-color: lightgrey;
        border: 1px solid black;
    }
`;

const Output = styled.div`
    width: 100%;
    font-size: calc(2px + 2vw);
    text-align: right;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: white;
`;

const PageTitle = styled.h3`
    color: #034078;
    text-align: center;
    margin-top: 2%;
`;

export default function Projects() {
    const [inputOne, setInputOne] = useState<string>('');
    const [inputTwo, setInputTwo] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [resultColor, setResultColor] = useState<string>('black');

    const doAdd = () => {
        const res = Number(inputOne) + Number(inputTwo);
        setResult(String(res));
        if (res < 0) {
            setResultColor('red');
        } else {
            setResultColor('black');
        }
    };

    const doSubtract = () => {
        const res = Number(inputOne) - Number(inputTwo);
        setResult(String(res));
        if (res < 0) {
            setResultColor('red');
        } else {
            setResultColor('black');
        }
    };

    const doMultiply = () => {
        const res = Number(inputOne) * Number(inputTwo);
        setResult(String(res));
        if (res < 0) {
            setResultColor('red');
        } else {
            setResultColor('black');
        }
    };

    const doDivide = () => {
        const num1 = Number(inputOne);
        const num2 = Number(inputTwo);
        if (num2 === 0) {
            setResult("undefined");
            setResultColor('red');
        } else {
            const res = num1 / num2;
            setResult(String(res));
            if (res < 0) {
                setResultColor('red');
            } else {
                setResultColor('black');
            }
        }
    };

    const doPower = () => {
        const base = Number(inputOne);
        const exponent = Number(inputTwo);
        let res = 1;

        if (exponent === 0) {
            res = 1;
        } else if (exponent > 0) {
            for (let i = 0; i < exponent; i++) {
                res *= base;
            }
        } else {
            for (let i = 0; i < -exponent; i++) {
                res *= base;
            }
            res = 1 / res;
        }
        setResult(String(res));
        if (res < 0) {
            setResultColor('red');
        } else {
            setResultColor('black');
        }
    };

    const doClear = () => {
        setInputOne('');
        setInputTwo('');
        setResult('');
        setResultColor('black');
    };

    return (
        <>
            <PageTitle>Projects</PageTitle>
            <Content>
                <CalcTitle>Worlds Best Calculator!</CalcTitle>
                <br/>

                <CalculatorWrapper>
                    <Calculator>
                        <CalcInput
                            type="number"
                            value={inputOne}
                            onChange={(e) => setInputOne(e.target.value)}
                            placeholder="Enter first number"
                        />
                        <CalcInput
                            type="number"
                            value={inputTwo}
                            onChange={(e) => setInputTwo(e.target.value)}
                            placeholder="Enter second number"
                        />

                        <Buttons>
                            <Button onClick={doAdd}>+</Button>
                            <Button onClick={doSubtract}>-</Button>
                            <Button onClick={doMultiply}>*</Button>
                            <Button onClick={doDivide}>/</Button>
                            <Button onClick={doPower}>**</Button>
                            <Button onClick={doClear}>C</Button>
                        </Buttons>
                        <Output style={{color: resultColor}}>
                            {result || '0'}
                        </Output>
                    </Calculator>
                </CalculatorWrapper>
            </Content>
        </>
    );
}