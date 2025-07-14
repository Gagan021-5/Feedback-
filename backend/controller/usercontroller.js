import Feedback from "../models/Userschema.js"
export const usersubcontroller = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newfeedback = new  Feedback({ name, email, message });
    await newfeedback.save();
    
    res.status(201).json({ success: true, feedback: newfeedback });
  } catch (error) {
        console.log("Error submitting ");
         res.status(500).json({message:"Please watch for bug"})
  }
};

export const feedbacktofront = async(req,res)=>{
    
    try{
        const sendata = await Feedback.find().sort({createdAt: -1});
        res.status(200).json(sendata);
    }catch(error){
        console.log(error);
        res.status(400).json({message:"There is some error in back my boi!!"});
    }
}


