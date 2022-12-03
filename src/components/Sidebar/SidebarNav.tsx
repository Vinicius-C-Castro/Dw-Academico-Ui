import { Stack } from '@chakra-ui/react';
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
  RiLogoutCircleLine,
  RiListSettingsLine,
  RiMessage3Line,
  RiTableAltLine,
  RiGitPullRequestLine,
} from 'react-icons/ri';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Indicadores">
        <NavLink href="/" icon={RiDashboardLine}>
          Etnia
        </NavLink>
        <NavLink href="/sexo" icon={RiDashboardLine}>
          Sexo
        </NavLink>
        <NavLink href="/escola" icon={RiDashboardLine}>
          Escola
        </NavLink>
        <NavLink href="/renda" icon={RiDashboardLine}>
          Renda
        </NavLink>
        <NavLink href="/estado" icon={RiDashboardLine}>
          Estado
        </NavLink>
      </NavSection>
    </Stack>
  );
}
