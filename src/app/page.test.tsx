import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('소개와 프로젝트 진입 링크를 제공한다', () => {
    render(<HomePage />);
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: '지도와 360도 경험을 만드는 프론트엔드 개발자',
      }),
    ).toBeInTheDocument();
    const projects = screen.getByRole('region', { name: '프로젝트' });
    expect(within(projects).getByRole('link', { name: 'Nadir 360' })).toHaveAttribute(
      'href',
      '/projects/nadir-360',
    );
    expect(screen.getByRole('region', { name: '경력' })).toBeInTheDocument();
  });
});
