import { fireEvent, screen } from '@testing-library/react';
import { componentRenderer } from 'shared/lib/componentRenderer/componentRenderer';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('рендер сайдбара', () => {
    componentRenderer(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('сворачивание/разворачивание сайдбара', () => {
    componentRenderer(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
