
// This enum defines the different "pages" or views available in the application.
// Using an enum helps prevent typos and makes the code more readable when managing navigation state.
export enum Page {
  Home,
  Services,
  Collaboration,
}
export interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}