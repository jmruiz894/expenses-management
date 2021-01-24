import { Router } from "express";

const router = Router();
router.all("/", (req, res) => {
    res.send({ message: "welcome to express server" });
});

export default router;