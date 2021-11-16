import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SVGProps {
  color: string;
}

const SVGComponent = ({color}: SVGProps) => (
  <Svg width="32px" height="32px" viewBox="0 0 24 24" fill={color}>
    <Path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.466l-2.667-4H20l.001 4zM9.535 9 6.868 5h2.597l2.667 4H9.535zm5 0-2.667-4h2.597l2.667 4h-2.597zM4 5h.465l2.667 4H4V5zm0 14v-8h16l.002 8H4z" />
  </Svg>
);

export default SVGComponent;
