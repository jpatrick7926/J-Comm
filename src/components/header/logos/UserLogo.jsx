import React from 'react';


const UserLogo = (props) => {
  return (
    <div style={{ flexShrink: 0, width: '25px', height: '25px'  }}>
      <a href="#">
        <svg onMouseEnter={props.hover} onMouseLeave={props.hover} fill={props.fill} width="25" height="25" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g id="User">
            <path d="M41.2452,33.0349a16,16,0,1,0-18.49,0A26.0412,26.0412,0,0,0,4,58a2,2,0,0,0,2,2H58a2,2,0,0,0,2-2A26.0412,26.0412,0,0,0,41.2452,33.0349ZM20,20A12,12,0,1,1,32,32,12.0137,12.0137,0,0,1,20,20ZM8.09,56A22.0293,22.0293,0,0,1,30,36h4A22.0293,22.0293,0,0,1,55.91,56Z"/>
          </g>
        </svg>
      </a>
    </div>
  )
}

export default UserLogo;
