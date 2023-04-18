import { proxy } from 'valtio';
import { ThemeType } from '../config/types';

interface StateI {
  theme: ThemeType;
  activeNavbarElement: string;
  isHamburgerActive: boolean;
  isHamburgerMenuActive: boolean;
}

export const state: StateI = proxy({
  theme: 'white',
  activeNavbarElement: '',
  isHamburgerActive: false,
  isHamburgerMenuActive: false,
});
