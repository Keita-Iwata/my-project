import { Link } from "react-router-dom";

export const Page1DetailA = () => {
  return(
    <div>
      <h1>Page1DetailAです！</h1>
      <p>Page2は<Link to={`/page2`}>こちら</Link></p>
      <div>
        <Link to={`/home`}>ホームに戻る</Link>
      </div>
    </div>
  )
}