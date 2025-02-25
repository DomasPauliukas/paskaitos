import { useContext } from "react";
import "./JobListingPage.css";

import Header from "./components/JobListings/Header/Header";
import JobListingItem from "./components/JobListings/JobListingItem/JobListingItem";
import { JobListingContext } from "./ContextProvider";

function JobListingPage() {
  const { JobListingData } = useContext(JobListingContext);
  return (
    <>
      <Header></Header>

      <div className="JobListingWrapper">
        {JobListingData.map((item, index) => (
          <JobListingItem key={index} data={item} />
        ))}
      </div>
    </>
  );
}
export default JobListingPage;
