import { Link, Outlet } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1です！</h1>
      <p>
        Page2は<Link to={`/page2`}>こちら</Link>
      </p>
      <p>
        Page1DetailAは<Link to={`/detail1`}>こちら</Link>
      </p>
      <p>
        Page1DetailBは<Link to={`/detail2`}>こちら</Link>
      </p>
      <div>
        <Link to={`/home`}>ホームに戻る</Link>
      </div>
    </div>
  );
};
