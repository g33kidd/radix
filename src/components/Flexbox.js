import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Box from './Box.js';

const Flexbox = styled(Box)`
  display: flex;

  ${p => p.fd_row && css` flex-direction: row; `}
  ${p => p.fd_column && css` flex-direction: column; `}
  ${p => p.fd_row_reverse && css` flex-direction: row-reverse; `}
  ${p => p.fd_column_reverse && css` flex-direction: column-reverse; `}

  ${p => p.fw_wrap && css` flex-wrap: wrap; `}
  ${p => p.fw_nowrap && css` flex-wrap: nowrap; `}

  ${p => p.ai_baseline && css` align-items: baseline; `}
  ${p => p.ai_center && css` align-items: center; `}
  ${p => p.ai_stretch && css` align-items: stretch; `}
  ${p => p.ai_flexstart && css` align-items: flex-start; `}
  ${p => p.ai_flexend && css` align-items: flex-end; `}

  ${p => p.jc_center && css` justify-content: center; `}
  ${p => p.jc_spacebetween && css` justify-content: space-between; `}
  ${p => p.jc_spacearound && css` justify-content: space-around; `}
  ${p => p.jc_flexstart && css` justify-content: flex-start; `}
  ${p => p.jc_flexend && css` justify-content: flex-end; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_fd_row && css` flex-direction: row; `}
    ${p => p.bp1_fd_column && css` flex-direction: column; `}
    ${p => p.bp1_fd_row_reverse && css` flex-direction: row-reverse; `}
    ${p => p.bp1_fd_column_reverse && css` flex-direction: column-reverse; `}

    ${p => p.bp1_fw_wrap && css` flex-wrap: wrap; `}
    ${p => p.bp1_fw_nowrap && css` flex-wrap: nowrap; `}

    ${p => p.bp1_ai_baseline && css` align-items: baseline; `}
    ${p => p.bp1_ai_center && css` align-items: center; `}
    ${p => p.bp1_ai_stretch && css` align-items: stretch; `}
    ${p => p.bp1_ai_flexstart && css` align-items: flex-start; `}
    ${p => p.bp1_ai_flexend && css` align-items: flex-end; `}

    ${p => p.bp1_jc_center && css` justify-content: center; `}
    ${p => p.bp1_jc_spacebetween && css` justify-content: space-between; `}
    ${p => p.bp1_jc_spacearound && css` justify-content: space-around; `}
    ${p => p.bp1_jc_flexstart && css` justify-content: flex-start; `}
    ${p => p.bp1_jc_flexend && css` justify-content: flex-end; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_fd_row && css` flex-direction: row; `}
    ${p => p.bp2_fd_column && css` flex-direction: column; `}
    ${p => p.bp2_fd_row_reverse && css` flex-direction: row-reverse; `}
    ${p => p.bp2_fd_column_reverse && css` flex-direction: column-reverse; `}

    ${p => p.bp2_fw_wrap && css` flex-wrap: wrap; `}
    ${p => p.bp2_fw_nowrap && css` flex-wrap: nowrap; `}

    ${p => p.bp2_ai_baseline && css` align-items: baseline; `}
    ${p => p.bp2_ai_center && css` align-items: center; `}
    ${p => p.bp2_ai_stretch && css` align-items: stretch; `}
    ${p => p.bp2_ai_flexstart && css` align-items: flex-start; `}
    ${p => p.bp2_ai_flexend && css` align-items: flex-end; `}

    ${p => p.bp2_jc_center && css` justify-content: center; `}
    ${p => p.bp2_jc_spacebetween && css` justify-content: space-between; `}
    ${p => p.bp2_jc_spacearound && css` justify-content: space-around; `}
    ${p => p.bp2_jc_flexstart && css` justify-content: flex-start; `}
    ${p => p.bp2_jc_flexend && css` justify-content: flex-end; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_fd_row && css` flex-direction: row; `}
    ${p => p.bp3_fd_column && css` flex-direction: column; `}
    ${p => p.bp3_fd_row_reverse && css` flex-direction: row-reverse; `}
    ${p => p.bp3_fd_column_reverse && css` flex-direction: column-reverse; `}

    ${p => p.bp3_fw_wrap && css` flex-wrap: wrap; `}
    ${p => p.bp3_fw_nowrap && css` flex-wrap: nowrap; `}

    ${p => p.bp3_ai_baseline && css` align-items: baseline; `}
    ${p => p.bp3_ai_center && css` align-items: center; `}
    ${p => p.bp3_ai_stretch && css` align-items: stretch; `}
    ${p => p.bp3_ai_flexstart && css` align-items: flex-start; `}
    ${p => p.bp3_ai_flexend && css` align-items: flex-end; `}

    ${p => p.bp3_jc_center && css` justify-content: center; `}
    ${p => p.bp3_jc_spacebetween && css` justify-content: space-between; `}
    ${p => p.bp3_jc_spacearound && css` justify-content: space-around; `}
    ${p => p.bp3_jc_flexstart && css` justify-content: flex-start; `}
    ${p => p.bp3_jc_flexend && css` justify-content: flex-end; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_fd_row && css` flex-direction: row; `}
    ${p => p.bp4_fd_column && css` flex-direction: column; `}
    ${p => p.bp4_fd_row_reverse && css` flex-direction: row-reverse; `}
    ${p => p.bp4_fd_column_reverse && css` flex-direction: column-reverse; `}

    ${p => p.bp4_fw_wrap && css` flex-wrap: wrap; `}
    ${p => p.bp4_fw_nowrap && css` flex-wrap: nowrap; `}

    ${p => p.bp4_ai_baseline && css` align-items: baseline; `}
    ${p => p.bp4_ai_center && css` align-items: center; `}
    ${p => p.bp4_ai_stretch && css` align-items: stretch; `}
    ${p => p.bp4_ai_flexstart && css` align-items: flex-start; `}
    ${p => p.bp4_ai_flexend && css` align-items: flex-end; `}

    ${p => p.bp4_jc_center && css` justify-content: center; `}
    ${p => p.bp4_jc_spacebetween && css` justify-content: space-between; `}
    ${p => p.bp4_jc_spacearound && css` justify-content: space-around; `}
    ${p => p.bp4_jc_flexstart && css` justify-content: flex-start; `}
    ${p => p.bp4_jc_flexend && css` justify-content: flex-end; `}
  }
`;

export default Flexbox;
