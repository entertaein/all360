import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from '@/app/page';

describe('Home', () => {
  it('대표 제목을 보여 준다', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { level: 1, name: '360° Virtual Tour Portfolio' }),
    ).toBeInTheDocument();
  });
});
