import { QueryClient, QueryClientProvider } from "react-query";
import Homepage from "./pages/Homepage";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Homepage />
    </QueryClientProvider>
  );
}

export default App;
