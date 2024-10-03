interface SvgArrowProps {
    color?: string;
  }
  
  const RightArrowSvg: React.FC<SvgArrowProps> = ({ color }) => {
    return(
        <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L11 11L1 21" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
}
export default RightArrowSvg