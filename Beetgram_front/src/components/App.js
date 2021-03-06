import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import ContactState from "../context/contact/ContactState";

function App() {
  return (
    <ContactState>
      <GlobalStyles />
      <Router />
    </ContactState>
  );
}

export default App;
