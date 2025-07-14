import { useState, useEffect } from "react";
import axios from "axios";
const FeedbackList = () => {
  // // In real logic, you'd fetch from backend
  

  const [displayinfo, setdisplayinfo] = useState([]);

  useEffect(() => {
    const havedata = async () => {
      const response = await axios.get("http://localhost:3000/user/form");
      const feedbacks = response.data;
      console.log(feedbacks);
      setdisplayinfo(feedbacks);
    };
    havedata();
  }, []);

  return (
    <div className="gradient-glass shadow-xl rounded-xl p-6 space-y-4 border border-white/20 backdrop-blur">
      <h2 className="text-2xl font-bold text-white mb-4">Submitted Feedback</h2>

      {displayinfo.map((data,index) => (
        <div
          key={index}
          className="p-4 bg-white/10 border border-white/20 rounded-md text-white shadow"
        >
          <p className="font-semibold">
            {data.name}{" "}
            <span className="text-sm text-gray-300">({data.email})</span>
          </p>
          <p className="mt-1">{data.message}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
