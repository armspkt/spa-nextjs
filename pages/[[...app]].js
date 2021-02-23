import { useState, useEffect } from "react";

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <p>Single-Page App</p>
      <p>CreateReactAppEntryPoint</p>
    </div>
  );
}

export default App;

// https://nextjs.org/docs/migrating/from-create-react-app
