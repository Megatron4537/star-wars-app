import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SVGProps {
  color: string;
}
const SVGComponent = ({color}: SVGProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M11.9886 11.33C14.565 11.33 16.6535 9.24139 16.6535 6.66499C16.6535 4.08859 14.565 2 11.9886 2C9.41215 2 7.32356 4.08859 7.32356 6.66499C7.32356 9.24139 9.41215 11.33 11.9886 11.33Z"
      fill={color}
    />
    <Path
      d="M15.8072 11.5414C14.679 12.1433 13.3771 12.5195 11.9885 12.5195C10.5998 12.5195 9.298 12.1433 8.16974 11.5414C6.86789 12.5195 6 13.9491 6 15.5292V22H17.977V15.5292C17.977 14.0996 17.2826 12.8205 16.2412 11.8424C16.0792 11.6902 16.0219 11.6561 15.8072 11.5414Z"
      fill={color}
    />
  </Svg>
);

export default SVGComponent;
