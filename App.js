import Nav from "./Nav";

import { AuthContextProvider } from "./AuthContext";
export default function App() {
  return (
    <AuthContextProvider>
      <Nav />
    </AuthContextProvider>
  );
}
