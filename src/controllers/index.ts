import express from "express";
import playlist from "./playlist.controller";
import todo from "./todo.controller";

var router = express.Router();

router.get('/', (req, res) => {
    res.send({ msg: "Ok" })
})

router.use('/playlist', playlist)
router.use('/todo', todo)

export default router;