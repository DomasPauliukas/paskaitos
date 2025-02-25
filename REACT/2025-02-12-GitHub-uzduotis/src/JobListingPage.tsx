import { useContext } from "react";
import "./JobListingPage.css";

import Header from "./components/JobListings/Header/Header";
import JobListingItem from "./components/JobListings/JobListingItem/JobListingItem";
import { JobListingContext } from "./ContextProvider";

const JobListingPage: React.FC = () => {
  const  JobListingData  = useContext(JobListingContext) ?? [];

  
  return (
    <>
      <Header></Header>

      <div className="JobListingWrapper">
        {JobListingData.length > 0 ? (
          JobListingData.map((item, index) => (
            <JobListingItem key={index} data={item} />
          ))
        ) : (
          <div>No job listings available.</div>
        )}
      </div>
    </>
  );
}
export default JobListingPage;
