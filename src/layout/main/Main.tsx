import { HeaderNavigate } from '../header/Header'
import './main.scss'
type Props = {
  children: React.ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <div className="wrapper-main">
      <HeaderNavigate />
      <div className="main-content">{children}</div>
    </div>
  )
}
export default Main
