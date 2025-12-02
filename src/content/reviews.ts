export interface Review {
  id: number;
  message: string;
  reviewer: string;
  role: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, obcaecati. Accusamus voluptatem ipsa dolore neque odio corrupti facere iusto totam libero soluta maxime mo",
    reviewer: "Pablo Escobar",
    role: "Manager, Medelin",
  },
  {
    id: 2,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, obcaecati. Accusamus voluptatem ipsa dolore neque odio corrupti facere iusto totam libero soluta maxime mo",
    reviewer: "Al Capone",
    role: "Manager, Chicago",
  },
  {
    id: 3,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, obcaecati. Accusamus voluptatem ipsa dolore neque odio corrupti facere iusto totam libero soluta maxime mo",
    reviewer: "Tony Soprano",
    role: "Manager, Sisily",
  },
  {
    id: 4,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, obcaecati. Accusamus voluptatem ipsa dolore neque odio corrupti facere iusto totam libero soluta maxime mo",
    reviewer: "Joe Colombo",
    role: "Manager, Gambino",
  },
];
