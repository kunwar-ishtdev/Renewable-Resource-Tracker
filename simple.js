import express from 'express';
import { loginController, 
    logoutController,
    aboutController, userController
} from "./controller.js";


const router = express.Router();

router.get("/user", userController);
router.post("/login", loginController);