export const preloader = `
  <style>
    .container{
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background-color: var(--navy); 
    }

    svg {
      position: absolute;
      inset: 0;
      margin: auto;
      max-width: 150px;
      background-color: var(--navy); 
      transition: var(--transition);
    }
    
    .hex{
      stroke-dasharray: 270;
      stroke-dashoffset: -270;
      animation: hex-draw 2s 1 forwards ease-in-out;
    }

    .letter{
      opacity: 0;
      animation: letter-show 2s 1.5s 1 forwards ease-in;
    }

    @keyframes hex-draw {
      from {
        stroke-dashoffset: -270;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
    @keyframes letter-show {
      from {
        opacity: 0
      }
      to {		
        opacity: 1
      }
    }
  </style>
  <div class="container">
    <svg id="preloader-logo" width="250" height="250" viewBox="0 0 84 96" fill="none">
      <g transform="translate(3 3)">
        <svg width="60" height="60" x="10" y="15" viewBox="0 0 64 64" fill="none">
          <g class="letter" fill="#64ffda" >
            <path
              d="M35.598 33.452c.37-.281.786-.487 1.222-.655l-.327-.422a4.997 4.997 0 0 0-2.152-1.604l-.01-.003h-.001a10.998 10.998 0 0 0-1.805-.36c-.007 0-.012-.005-.019-.006-.023 0-.045.009-.069.006a10.516 10.516 0 0 0-3.8.307 10.94 10.94 0 0 0-3.25 1.482 10.519 10.519 0 0 0-2.067 1.848 10.991 10.991 0 0 0-1.178 1.647l-2.143 3.712V50.31c.047.589.242 1.515.896 2.366.67.88 1.542 1.312 2.26 1.539l7.06-12.227a.603.603 0 0 1 .025-.043l4.056-7.025a5.012 5.012 0 0 1 1.3-1.468z"
              
            />
            <path
              d="M20.102 53.283c-.803-1.044-1.042-2.173-1.101-2.936V14.3c-.001-2.657-2.2-4.819-4.901-4.819h-.2c-2.702 0-4.9 2.162-4.9 4.819v25.86c-.103 1.902.025 6.639 3.418 10.131 1.936 1.995 4.262 2.854 5.255 3.221a15.99 15.99 0 0 0 3.571.874 5.234 5.234 0 0 1-1.142-1.103zM44.002 50.271v-8.198l-6.539-8.446c-.493.154-.906.351-1.26.62a4.026 4.026 0 0 0-1.041 1.174l-3.898 6.752 9.372 12.114c.69-.189 1.714-.622 2.465-1.61.657-.854.852-1.779.9-2.406z"
              
            />
            <path
              d="M55 14.3c0-2.657-2.198-4.819-4.9-4.819h-.199c-2.702 0-4.9 2.162-4.9 4.819v36.01c-.061.801-.299 1.93-1.104 2.976-.35.46-.746.822-1.149 1.106a15.987 15.987 0 0 0 3.578-.88c.905-.33 3.018-1.101 4.893-2.857.082-.074.154-.149.229-.226l.142-.144c3.389-3.488 3.516-8.224 3.413-10.098V14.3z"
              
            />
          </g>
        </svg>
        <polygon
          class="hex"
          stroke="#64ffda"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />
      </g>
    </svg>
  </div>
`;
// d="M39 0 0 22v45l39 23 39-22V23z"

//  stroke-linejoin="round"
//  stroke-width="2px"
//  stroke-linecap="round"
