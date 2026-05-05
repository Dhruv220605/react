import React from 'react'
import Card from './components/Card'

const App = () => {
  
  const jobOpenings = [
  {
    brandLogo: "data:image/jpeg;base64,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",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Meta",
    datePosted: "2 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "5 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "4 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "1 day ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/linkedin.com",
    companyName: "LinkedIn",
    datePosted: "8 days ago",
    post: "Software Engineer Intern",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Remote"
  }
];

  console.log(jobOpenings);

  return (
    <div className='parent'>
      {jobOpenings.map(function(job,idx){
        return <div key={idx}>
            <Card tag1={job.tag1} tag2={job.tag2} brandLogo={job.brandLogo} companyName={job.companyName} datePosted={job.datePosted} post={job.post} pay={job.pay} location={job.location} />
          </div>
      })}
    </div>
  )
}

export default App
