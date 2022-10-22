/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const styles = {
  "small": {
    "--height": "8px"
  },
  "medium": {
"--height": "12px"
  },
  "large": {
    "--height": "16px",
    "--padding": "4px"
  },
}

const StyledProgressWrapper = styled.div`
box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
background-color: ${COLORS.transparentGray15};
border-radius: 4px;
padding: var(--padding);
`

const StyledProgress = styled.div`
border-radius: 4px ${props => props.value === 100 ? "4px" : 0} ${props => props.value === 100 ? "4px" : 0} 4px;
background-color: ${COLORS.primary};
height: var(--height);
width: ${props => props.value}%;
`

const ProgressBar = ({ value, size }) => {
  return (
    <StyledProgressWrapper role="progress" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} style={styles[size]}>
      <StyledProgress value={value}/>
    </StyledProgressWrapper>

  );
};

export default ProgressBar;
