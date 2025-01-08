export interface NavItem {
  text: string;
  id?: string;
  action?: () => void;
}