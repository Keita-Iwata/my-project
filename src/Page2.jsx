import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2です！</h1>
      <p>
        Page1は<Link to={`/page1`}>こちら</Link>
      </p>
      <div>
        <Link to={`/home`}>ホームに戻る</Link>
      </div>
    </div>
  );
};
