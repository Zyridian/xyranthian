import { palette } from "../../foundations/palette";

export const $getSpinnerStyles = (size: string, color: string) => {
    return `
   .loader {
        width: ${size};
        height: ${size};
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite
      }
      .loader::before , .loader::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid ${palette.neutral050};
        animation: spinner 2s linear infinite ;
      }
      .loader::after{
        transform: rotate3d(90, 90, 0, 180deg );
        border-color: ${color};
      }

      @keyframes rotate {
        0%   {transform: rotate(0deg)}
        100%   {transform: rotate(360deg)}
      }

      @keyframes spinner {
          0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          75%, 100%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
      }    
 `
};
