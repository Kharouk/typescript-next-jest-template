import * as React from 'react';
import { render, screen } from './testUtils';
import BlogPost from '@components/BlogPost';

describe('<BlogPost />', () => {
  it('renders the component successfully', () => {
    render(<BlogPost />);
    expect(screen.getByText(/heo world/i)).toBeTruthy();
  });
});
