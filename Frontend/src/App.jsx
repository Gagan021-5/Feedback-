import { useState, useEffect } from "react";
import axios from "axios";
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/user/form");
      setFeedbacks(res.data);
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-start px-4 py-10">
      
      <div className="absolute inset-0 z-0 bg-black bg-opacity-95 animate-gradient-move">
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle top-1/4 left-1/3"></div>
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle delay-1000 top-2/3 left-2/5"></div>
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle delay-2000 top-1/2 left-3/4"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-10 text-center drop-shadow-lg">
          Feedback Collector 📝
        </h1>

        <div className="space-y-8">
          <FeedbackForm onSuccess={fetchFeedbacks} />
          <FeedbackList feedbacks={feedbacks} />
        </div>
      </div>
    </div>
  );
};

export default App;
