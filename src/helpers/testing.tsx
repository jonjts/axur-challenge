import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import ThemeProvider from '../providers/Theme';
import InspectionProvider from '../providers/Inspection'

export const putProviders = (component: JSX.Element) => (
    <ThemeProvider>
        <InspectionProvider>
            {component}
        </InspectionProvider>
    </ThemeProvider>
);

export const matchSnapshotWithProviders = (component: JSX.Element) => {
    const tree = renderer.create(putProviders(component)).toJSON();
    expect(tree).toMatchSnapshot();
    return tree;
};

export const renderWithProviders = (component: JSX.Element) => {
    return render(putProviders(component));
};
