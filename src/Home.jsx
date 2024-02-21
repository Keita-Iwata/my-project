import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Homeです！！</h1>
      <p>Page1は<Link to={`/page1`}>こちら</Link></p>
      <p>Page2は<Link to={`/page2`}>こちら</Link></p>
    </div>
  )
}