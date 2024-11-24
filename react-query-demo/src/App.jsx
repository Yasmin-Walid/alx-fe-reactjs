import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

const App = () => {
    return (
      <QueryClientProvider client={queryClient}>
      <h1>React Query Demo</h1>
      <PostsComponent />
      <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
    );
};

export default App;
