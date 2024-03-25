import React, { useState } from 'react';

const UploadJob = () => {
  const [formData, setFormData] = useState({
    image: null,
    jobName: "",
    applicationDeadline: "",
    eligibility: "",
    jobDescription: "",
  });
  const { image, jobName, applicationDeadline, eligibility, jobDescription} = formData;

  const handleChange = (event) => {
    if (event.target.type === 'file') {
      setFormData({ ...formData, image: event.target.files[0] });
    } else {
      setFormData({ ...formData, [event.target.id]: event.target.value });
    }
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setFormData({ ...formData, image: e.target.result });
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <section className="flex justify-center items-center h-[100vh] w-full mt-50 px-10">
      <form className="w-full max-w-3xl bg-white/10 shadow-[0_0_20px_purple] rounded-lg px-8 py-10 mt-10 onSubmit={(e) => e.preventDefault()}">
        <h2 className="text-2xl text-white font-bold text-center mb-6">Upload Job</h2>

        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center">
            {/* Image upload section (square on the right) */}
            <div className="relative overflow-hidden h-20 w-20 mr-4 rounded-lg bg-gray-900 border border-gray-500">
              {image && (
                <img src={image} alt="Uploaded Job Image" className="absolute inset-0 object-cover h-full w-full" />
              )}
              <label htmlFor="image" className="absolute inset-0 cursor-pointer flex items-center justify-center top-0 left-0 bg-transparent hover:bg-gray-200 opacity-0 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                <span className="text-black text-center">Image\Choose File</span>
              </label>
              <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer" />
            </div>

            {/* Job Name input */}
            <div className="flex items-center">
              <label htmlFor="jobName" className="mr-4 text-gray-700 block w-[40%]">Job Name:</label>
              <input type="text" id="jobName" value={jobName} onChange={handleChange} placeholder="Enter Job Name" className="w-full px-3 py-2 rounded-md border bg-transparent text-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500" required />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center">
              <label htmlFor="eligibility" className="mr-4 text-gray-700 block">Eligibility:</label>
              <input type="text" id="eligibility" value={eligibility} onChange={handleChange} placeholder="Eligibility Criteria" className="w-full px-3 py-2 rounded-md text-white border border-gray-300 bg-transparent focus:outline-none focus:ring-1 focus:ring-purple-500" required />
            </div>
            <div className="flex items-center">
              <label htmlFor="applicationDeadline" className="mr-4 text-gray-300 block w-full">Application Deadline:</label>
              <input type="date" id="applicationDeadline" value={applicationDeadline} onChange={handleChange} placeholder="Enter Deadline" className="w-full text-gray-500 bg-transparent px-3 py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-purple-500" required />
            </div>
            
          </div>

          {/* Job Description (separate row) */}
          <div className="mb-4">
            <label htmlFor="jobDescription" className="text-gray-700 block mb-2">Job Description:</label>
            <textarea id="jobDescription" value={jobDescription} onChange={handleChange} rows={5} placeholder="Enter detailed job description" className="w-full px-3 py-2 rounded-md border text-white bg-transparent border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500" required></textarea>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center">
              <label htmlFor="location" className="mr-4 text-gray-700 block w-[30%]"> Location:</label>
              <input type="location" id="location" value={applicationDeadline} onChange={handleChange} placeholder="Enter Location" className="w-full text-gray-500 bg-transparent px-3 py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-purple-500" required />
            </div>
            <div className="flex items-center">
              <label htmlFor="eligibility" className="mr-4 text-gray-700 block w-full">Work Details:</label>
              <input type="text" id="eligibility" value={eligibility} onChange={handleChange} placeholder="Work Details" className="w-full px-3 py-2 rounded-md text-white border border-gray-300 bg-transparent focus:outline-none focus:ring-1 focus:ring-purple-500" required />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center">
              <label htmlFor="applicationDeadline" className="mr-4 text-gray-700 block w-[30%]"> Salary:</label>
              <input type="date" id="applicationDeadline" value={applicationDeadline} onChange={handleChange} placeholder="Enter Deadline" className="w-full text-gray-500 bg-transparent px-3 py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-purple-500" required />
            </div>
            <div className="flex items-center">
              <label htmlFor="eligibility" className="mr-4 text-gray-700 block w-full">Timings:</label>
              <input type="text" id="eligibility" value={eligibility} onChange={handleChange} placeholder="Timings" className="w-full px-3 py-2 rounded-md text-white border border-gray-300 bg-transparent focus:outline-none focus:ring-1 focus:ring-purple-500" required />
            </div>
          </div>
        </div>
        
        <button type="submit" className=" w-full bg-purple-700 hover:bg-purple-300 text-white  font-bold py-2 rounded-md mt-8 ">
          Upload Job
        </button>
      </form>
    </section>
  );
};

export default UploadJob;
