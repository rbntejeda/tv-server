import express from "express";
import { send } from "process";
import { Todo } from "../models";

var router = express.Router();

router.route('/')
    .get(async (req, res) => {
        let models = await Todo.find();
        res.send(models);
    })
    .post(async (req, res) => {
        console.log("POST todo :", { ...req.body })
        try {
            let model = await Todo.create(req.body)
            res.status(201).send(model)

        } catch (error) {
            res.status(500).send(error)
        }
    })

router.route('/:id')
    .get(async (req, res) => {
        try {
            let model = await Todo.findById(req.params.id)
            if (model) {
                res.status(200).send(model);
            } else {
                res.status(401).send();
            }
        } catch (error) {
            res.status(500).send(error)
        }
    })
    .put(async (req, res) => {
        try {
            await Todo.findOneAndUpdate({ _id: req.params.id }, req.body)
            let model = await Todo.findById(req.params.id)
            res.status(200).send(model);

        } catch (error) {
            res.status(500).send(error)
        }
    })
    .delete(async (req, res) => {
        try {
            let model = await Todo.findOneAndRemove({ _id: req.params.id })
            if (model) {
                res.status(204).send();

            } else {
                res.status(404).send(model);
            }

        } catch (error) {
            res.status(500).send(error)
        }
    })

export default router;