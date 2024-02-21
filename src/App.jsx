import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import { useCallback, useState } from "react";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";

export const App = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (event) => setText(event.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <BrowserRouter>
      <div className="App">
        <p>
          AAAHOMEは<Link to={`home`}>こちら</Link>
        </p>
        <Routes>
          <Route path={`home`} element={<Home />} />
          <Route path={`page1`} element={<Page1 />}>
            <Route path={`detail1`} element={<Page1DetailA />} />
            <Route path={`detail2`} element={<Page1DetailB />} />
          </Route>
          <Route path={`page2`} element={<Page2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
