import "./App.css";
import { JobListingContextProvider } from "./ContextProvider";
import JobListingPage from "./JobListingPage";

function App() {
  return (
    <>
      <JobListingContextProvider>
        <JobListingPage></JobListingPage>
      </JobListingContextProvider>
    </>
  );
}

export default App;
