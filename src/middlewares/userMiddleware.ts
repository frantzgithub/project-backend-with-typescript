import { RequestHandler } from "express";

const isBodyValid: RequestHandler = (req, res, next) => {
    if(!req.body.name && !req.body.email && !req.body.phone) {
        return res.status(400).json({error: "All fill required"})
    }
    if(!req.body.name) {
        return res.status(400).json({error: "Missing name"})
    }
    if(!req.body.email) {
        return res.status(400).json({error: "Missing email"})
    }
    if(!req.body.phone) {
        return res.status(400).json({error: "Missing phone"})
    }
    next()
}

export {isBodyValid}