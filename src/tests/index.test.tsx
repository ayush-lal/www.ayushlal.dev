import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router';
import { Home, Page2 } from '../pages';

jest.mock('../pages/Home');
jest.mock('../pages/Page2');

const mockedHome = Home as jest.Mock<JSX.Element>;
const mockedPage2 = Page2 as jest.Mock<JSX.Element>;

test('Should Render HomePage on Default Route', () => {
  // Arrange
  mockedHome.mockImplementation(() => <div>HomePageMock</div>);

  // Act
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );

  // Assert
  const linkElement = screen.getByText('HomePageMock');
  expect(linkElement).toBeInTheDocument();
});

test('Should Render Page2 on Page2 Route', () => {
  // Arrange
  mockedPage2.mockImplementation(() => <div>Page2Mock</div>);

  // Act
  render(
    <MemoryRouter initialEntries={['/page2']}>
      <Routes>
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </MemoryRouter>
  );

  // Assert
  const linkElement = screen.getByText('Page2Mock');
  expect(linkElement).toBeInTheDocument();
});