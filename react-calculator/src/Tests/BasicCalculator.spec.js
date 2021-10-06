/* eslint-disable react/no-multi-comp */
import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import BasicCalculator from '../Component/BasicCalculator';

const sectionContentMock = {
    align: 'flex-start',
    alt: '',
    animations: { animationsEnabled: false },
    border: 'none',
    buttons: [{
        0: {
            buttonText: 'Lorem ipsum',
        },
    }],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imagePath: '/',
    list: [],
    parallax: false,
    title: 'Lorem ipsum',
    mobileImagePath: '/',
};

const BasicCalculatorWithProps = (props) => {
    return (<BasicCalculator {...props} /> );
};

describe('Basic Calculator', () => {
    test('Basic Calculator gets rendered', () => {
        const displayValue = 0;
        const { getByTestId } = render(<BasicCalculatorWithProps />);
        const container = getByTestId('keypad-id');
        expect(container).toBeTruthy();

    });
/*
    test('WTI', () => {
        const { getElementsByClassName } = render(<div class="oilprices__centercolumn">798</div>);

        const container = getElementsByClassName('oilprices__centercolumn');
        expect(container).toBe('');

    });*/

    test('expression id displayed before pressing of = key and (2+3)÷5 gives 1', () => {
        const setDisplayValue = jest.fn();
        const { getByTestId } = render(<BasicCalculatorWithProps />);

        const openBracketButton = getByTestId('open-bracket-id');
        const digitTwo = getByTestId('two-id');
        const addButton = getByTestId('add-id');
        const digitThree = getByTestId('three-id');
        const closeBracketButton = getByTestId('close-bracket-id');
        const divButton = getByTestId('div-id');
        const digitFive = getByTestId('five-id');
        const evaluateButton = getByTestId('evaluation-id');
        fireEvent.click(openBracketButton);
        fireEvent.click(digitTwo);
        fireEvent.click(addButton);
        fireEvent.click(digitThree);
        fireEvent.click(closeBracketButton);
        fireEvent.click(divButton);
        fireEvent.click(digitFive);

        const displayBox = getByTestId('display-id').children[0].children[0];
        expect(displayBox.value).toBe('(2+3)÷5');

        fireEvent.click(evaluateButton);
        expect(displayBox.value).toBe('1');
    });
    test('square root of 9 gives 3', () => {
        const setDisplayValue = jest.fn();
        const { getByTestId } = render(<BasicCalculatorWithProps />);

        const squareRootButton = getByTestId('square-root-id');
        const nineButton = getByTestId('nine-id');
        const evaluateButton = getByTestId('evaluation-id');
        fireEvent.click(squareRootButton);
        fireEvent.click(nineButton);
        fireEvent.click(evaluateButton);
        const displayBox = getByTestId('display-id').children[0].children[0];
        expect(displayBox.value).toBe('3');
    });

    test('2^3 gives 8', () => {
        const setDisplayValue = jest.fn();
        const { getByTestId } = render(<BasicCalculatorWithProps />);

        const exponentButton = getByTestId('exponent-id');
        const twoButton = getByTestId('two-id');
        const threeButton = getByTestId('three-id');
        const evaluateButton = getByTestId('evaluation-id');
        fireEvent.click(twoButton);
        fireEvent.click(exponentButton);
        fireEvent.click(threeButton);
        fireEvent.click(evaluateButton);
        const displayBox = getByTestId('display-id').children[0].children[0];
        expect(displayBox.value).toBe('8');
    });

/*
    test('Standard Image banner form renders all the fields', () => {
        const changeContentCallback = jest.fn();
        const setSectionContent = jest.fn();
        const { getByTestId, getByPlaceholderText, queryAllByTestId } = render(<StandardImageBannerFormWithContext sectionContent={sectionContentMock}
            changeContentCallback={changeContentCallback}
            setSectionContent={setSectionContent} />);
        const titleTextFieldChange = getByPlaceholderText('Enter a title…');
        const descriptionTextFieldChange = getByPlaceholderText('Enter a description…');
        const addListButton = getByTestId('addListButton');
        const addButton = getByTestId('addButton');
        const buttonOneStandardImage = queryAllByTestId('button 1')[0];
        const changeImage = within(queryAllByTestId('changeImageButton')[0]).getByRole('button').children[0];
        const changeMobileImage = within(queryAllByTestId('select-mobile-image-id')[0]).getByRole('button').children[0];

        fireEvent.change(titleTextFieldChange, { target: { value: 'Geotab + dash cams: A powerful combination Editor function component Editor function component Editor function component Editor function component' } });
        fireEvent.change(descriptionTextFieldChange, { target: { value: 'Get video value with dash cams, integrated with Geotab rules and driver coaching.' } });

        fireEvent.click(addListButton);
        fireEvent.click(addButton);
        expect(setSectionContent).toHaveBeenCalledTimes(2);

        const selectImage = getByTestId('changeImageButton');
        expect(selectImage).toBeTruthy();
        const selectMobileImage = getByTestId('select-mobile-image-id');
        expect(selectMobileImage).toBeTruthy();

        const altTextFieldChange = getByPlaceholderText('Enter a descriptive alt tag …');
        fireEvent.change(altTextFieldChange, { target: { value: 'A powerful combination' } });
        expect(changeContentCallback).toHaveBeenCalledTimes(3);

        fireEvent.focusIn(titleTextFieldChange);
        fireEvent.focusOut(titleTextFieldChange);

        expect(buttonOneStandardImage.textContent.trim()).toBe('Button 1');
        expect(changeImage.textContent).toBe('Change Image');
        expect(changeMobileImage.textContent).toBe('Change Mobile Image');
    });

    test('Standard Image banner form renders default value of content alignment ', () => {
        const changeContentCallback = jest.fn();
        const setSectionContent = jest.fn();
        const { getByPlaceholderText, getByTestId } = render(<StandardImageBannerFormWithContext sectionContent={sectionContentMock}
            changeContentCallback={changeContentCallback}
            setSectionContent={setSectionContent} />);

        const titleTextFieldChange = getByPlaceholderText('Enter a title…');
        const contentAlignment = getByTestId('contentAlignmentButton');
        fireEvent.change(titleTextFieldChange, { target: { value: 'Geotab + dash cams: A powerful combination Editor function component Editor function component Editor function component Editor function component' } });

        expect(contentAlignment.children[0].children[0].textContent).toBe('Left');
    });

    test('changeContentCallback function called when switch for parallax is toggled', () => {
        const changeContentCallback = jest.fn();
        const setSectionContent = jest.fn();
        const { getByRole } = render(<StandardImageBannerFormWithContext sectionContent={sectionContentMock}
            changeContentCallback={changeContentCallback}
            setSectionContent={setSectionContent} />);
        const parallax = getByRole('checkbox');
        parallax.click();
        fireEvent.change(parallax, { target: { checked: true } });
        expect(changeContentCallback).toBeCalledTimes(1);
    });

    test('changeContentCallback function called when left-right slider changes', () => {
        const changeContentCallback = jest.fn();
        const setSectionContent = jest.fn();
        const { getByTestId } = render(<StandardImageBannerFormWithContext sectionContent={sectionContentMock}
            changeContentCallback={changeContentCallback}
            setSectionContent={setSectionContent} />);

        const slider = getByTestId('left-right-slider').children[2];
        fireEvent.mouseDown(slider, { target: { value: '60' } });
        expect(changeContentCallback).toBeCalledTimes(1);
    });

    test('changeContentCallback function called when top-bottom slider changes', () => {
        const changeContentCallback = jest.fn();
        const setSectionContent = jest.fn();
        const { getByTestId } = render(<StandardImageBannerFormWithContext sectionContent={sectionContentMock}
            changeContentCallback={changeContentCallback}
            setSectionContent={setSectionContent} />);

        const slider = getByTestId('top-bottom-slider').children[2];
        fireEvent.mouseDown(slider, { target: { value: '60' } });
        expect(changeContentCallback).toBeCalledTimes(1);
    });*/
});