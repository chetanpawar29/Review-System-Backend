import express from "express";
import { createadmin } from "../Controllers/userController.js";
import { createAlumni } from "../Controllers/userController.js";
import { createStudent } from "../Controllers/userController.js";
import { getallUser } from "../Controllers/userController.js";
import { createReview,getAllReviews } from "../Controllers/reviewController.js";
import { likeReviews } from "../Controllers/likeController.js";

import { createCompany, getCompanies } from "../Controllers/companyController.js";
import { isadmin } from "../middleware/middleware.js";



const router= express.Router();


router.post("/admin/create",createadmin);
router.post("/alumni/create",createAlumni);
router.post("/student/create",createStudent);
router.get("/student/get",getallUser);

router.post("/company/create",isadmin, createCompany);
router.get("/company/get",getCompanies);

router.post("/review/create",createReview);

router.post("/like/create",likeReviews);

export  default router;

