import styled from 'styled-components';
import { useCalculator, type Operation } from '../../hooks/useCalculator';

// Types
interface CalculatorInputsProps {
    inputOne: string;
    inputTwo: string;
    onInputOneChange: (value: string) => void;
    onInputTwoChange: (value: string) => void;
}

interface CalculatorButtonsProps {
    onOperation: (operation: Operation) => void;
}

interface CalculatorDisplayProps {
    result: string;
    resultColor: string;
}

// Styled Components
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

const CalculatorContainer = styled.div`
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
    width: calc(20px + 1.5vw);
    height: calc(20px + 1.5vw);
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

// Input Component
const CalculatorInputs = ({
                              inputOne,
                              inputTwo,
                              onInputOneChange,
                              onInputTwoChange
                          }: CalculatorInputsProps) => {
    return (
        <>
            <CalcInput
                type="number"
                value={inputOne}
                onChange={(e) => onInputOneChange(e.target.value)}
                placeholder="Enter first number"
            />
            <CalcInput
                type="number"
                value={inputTwo}
                onChange={(e) => onInputTwoChange(e.target.value)}
                placeholder="Enter second number"
            />
        </>
    );
};

// Button Component
const CalculatorButtons = ({ onOperation }: CalculatorButtonsProps) => {
    return (
        <Buttons>
            <Button onClick={() => onOperation('add')}>+</Button>
            <Button onClick={() => onOperation('subtract')}>-</Button>
            <Button onClick={() => onOperation('multiply')}>*</Button>
            <Button onClick={() => onOperation('divide')}>/</Button>
            <Button onClick={() => onOperation('power')}>**</Button>
            <Button onClick={() => onOperation('clear')}>C</Button>
        </Buttons>
    );
};

// Display Component
const CalculatorDisplay = ({ result, resultColor }: CalculatorDisplayProps) => {
    return (
        <Output style={{ color: resultColor }}>
            {result || '0'}
        </Output>
    );
};

// Main Calculator Component
const Calculator = () => {
    const {
        inputOne,
        inputTwo,
        result,
        resultColor,
        setInputOne,
        setInputTwo,
        performOperation
    } = useCalculator();

    return (
        <CalculatorContainer>
            <CalculatorInputs
                inputOne={inputOne}
                inputTwo={inputTwo}
                onInputOneChange={setInputOne}
                onInputTwoChange={setInputTwo}
            />
            <CalculatorButtons onOperation={performOperation} />
            <CalculatorDisplay result={result} resultColor={resultColor} />
        </CalculatorContainer>
    );
};

// Main Projects Component
export default function Projects() {
    return (
        <>
            <PageTitle>Projects</PageTitle>
            <Content>
                <CalcTitle>Worlds Best Calculator!</CalcTitle>
                <br />
                <CalculatorWrapper>
                    <Calculator />
                </CalculatorWrapper>
            </Content>
        </>
    );
}