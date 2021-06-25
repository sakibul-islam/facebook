import { useMediaQuery } from 'react-responsive';

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 991 })
  return isTablet ? children : null
}
export const Desktop = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 991 })
  return isTablet ? children : null
}
export const SmallDevice = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 767 })
  return isTablet ? children : null
}
export const LargeDevice = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768 })
  return isTablet ? children : null
}
export const CustomMediaQuery = ({ minWidth, maxWidth ,children }) => {
  const isMatched = useMediaQuery({ minWidth, maxWidth })
  return isMatched ? children : null
}