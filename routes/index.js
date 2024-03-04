import { Router } from "express";

const router = Router ()

router.get("/", (rec, res) => res.send ('This is the api root!'));

export default router 


