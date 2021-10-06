/* eslint-disable react/no-multi-comp */
import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import Keypad from '../Component/Keypad';

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

const KeypadWithProps = (props) => {
    return (<Keypad {...props} /> );
};

describe('Keypad', () => {
    test('Keypad gets rendered', () => {
        const displayValue = 0;
        const { getByTestId } = render(<KeypadWithProps displayValue={displayValue} />);
        const container = getByTestId('keypad-id');
        expect(container).toBeTruthy();
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