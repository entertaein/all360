export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  problem: string;
  alternatives: string;
  decision: string;
  implementation: string;
  validation: string;
  result: string;
};

export const profile = {
  headline: '지도와 360도 경험을 만드는 프론트엔드 개발자',
  description: '사용자 탐색부터 콘텐츠 운영까지 연결하는 웹 서비스를 설계합니다.',
};

export const projects: Project[] = [
  {
    slug: 'nadir-360',
    title: 'Nadir 360',
    summary: '지도 기반 가상투어와 운영 도구를 연결하는 포트폴리오 프로젝트',
    stack: ['Next.js', 'TypeScript', 'Marzipano'],
    problem: '작성 초안: 기존 VT 서비스에서 사용자가 겪은 탐색 문제를 기록합니다.',
    alternatives: '작성 초안: 기존 구조 유지와 React 전환의 비용을 비교합니다.',
    decision: '설계 계획: 뷰어 엔진을 어댑터로 분리하고 페이지와 수명을 분리합니다.',
    implementation: '진행 범위: Phase 2는 정적 소개 화면이며 실제 뷰어는 Phase 3에서 구현합니다.',
    validation: '검증 계획: 장면 진입, 전환, 모바일 조작을 테스트하고 조건을 기록합니다.',
    result: '아직 측정 전입니다. 구현 후 측정 환경과 근거 링크를 함께 작성합니다.',
  },
  {
    slug: 'operations-dashboard',
    title: '운영 대시보드',
    summary: '지도와 지표를 연결하는 관리자 화면 사례의 작성용 초안',
    stack: ['React', 'TypeScript', 'Charts'],
    problem: '작성 초안: 운영자가 정보를 찾는 데 겪었던 실제 문제를 작성합니다.',
    alternatives: '작성 초안: 표 중심 화면과 지도·차트 결합 화면을 비교합니다.',
    decision: '작성 초안: 선택한 정보 구조와 선택 이유를 작성합니다.',
    implementation: '작성 초안: 본인이 담당한 컴포넌트와 데이터 흐름을 명시합니다.',
    validation: '작성 초안: 로딩·오류·빈 결과·필터 변경을 검증한 방법을 작성합니다.',
    result: '실제 성과 자료 입력 전입니다. 확인하지 않은 개선 수치는 쓰지 않습니다.',
  },
  {
    slug: 'mobile-map',
    title: '모바일 지도 경험',
    summary: '지도·위치·모바일 UI 경험을 정리하는 Case Study 초안',
    stack: ['React Native', 'Map', 'WebView'],
    problem: '작성 초안: 위치 권한과 지도 탐색에서 발생한 실제 문제를 작성합니다.',
    alternatives: '작성 초안: 네이티브 화면과 WebView 사용 범위를 비교합니다.',
    decision: '작성 초안: 기술 선택의 이유와 제약을 기록합니다.',
    implementation: '작성 초안: 본인의 담당 범위와 플랫폼별 처리를 기록합니다.',
    validation: '작성 초안: 위치 권한 거부·네트워크 실패·기기별 검증을 기록합니다.',
    result: '실제 결과 입력 전입니다. 공개 가능한 증거로 교체합니다.',
  },
];

export const careers = [
  {
    period: '6년차',
    role: '(주)비지트 · Front-end',
    detail: '실제 담당 업무, 본인 기여, 공개 가능한 결과를 작성하세요.',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
