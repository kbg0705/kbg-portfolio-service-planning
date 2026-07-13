export const projectCategories = [
  '전체',
  '서비스기획',
  '이커머스',
  '교육 SaaS',
  '교육 서비스',
  'AI',
  '서비스디자인',
  '리서치',
] as const;

export type ProjectCategoryFilter = (typeof projectCategories)[number];
