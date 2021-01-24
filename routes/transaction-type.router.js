import { Router } from "express";

const router = Router({
    mergeParams: true,
});

router.all("/", (req, res) => {
    res.send({ message: "welcome to express serve v1 - transaction-type"});
});

export default router;