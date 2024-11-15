import ReviewModel from "../model/reviews.js";
import Company from "../model/company.js";
export const createReview = async (req, res) => {
  try {
    const { company, email, reviews } = req.body;

    const companyInfo = await Company.findOne({name:company});

    const reviewObj = new ReviewModel({
      company:companyInfo.id,
      email,
      reviews,
    });

    

    const savedReviews = await reviewObj.save();


    
    const updatedCompany = await Company.findByIdAndUpdate(
      companyInfo.id,
      { $push: { reviews: savedReviews._id } },
      { new: true }
    )
      .populate("reviews")
      .exec();
    res.json({ company: updatedCompany });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Error while adding Review " });
  }
};
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await ReviewModel.find();
    res.json({
      reviews,
    });
  } catch (error) {
    return res.status(400).json({
      error: "error while fetching post",
    });
  }
};
