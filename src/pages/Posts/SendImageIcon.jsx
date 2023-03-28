import React from 'react'
import styled from 'styled-components';

function SendImageIcon() {
  return (
    <>
        <StIcon>
            <svg
            width="48" 
            height="48" 
            viewBox="0 0 48 48" 
            fill="currentColor" 
            preserveAspectRatio="xMidYMid meet" 
            >
              <path d="M11.952 9.778l2.397-5.994A1.778 1.778 0 0 1 16 2.667h16c.727 0 1.38.442 1.65 1.117l2.398 5.994h10.174c.982 0 1.778.796 1.778 1.778v32c0 .981-.796 1.777-1.778 1.777H1.778A1.778 1.778 0 0 1 0 43.556v-32c0-.982.796-1.778 1.778-1.778h10.174zM24 38c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11z">
              </path>
            </svg> 
        </StIcon>
    </>
  )
}

export default SendImageIcon;

const StIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0px 0px 12px;
  color: rgb(164, 172, 179);
`