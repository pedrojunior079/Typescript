"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customers = [];
const router = (0, express_1.Router)();
router.post('/', (req, res) => {
    const body = req.body;
    const newCustomer = {
        id: body.id,
        name: body.name,
        birthDate: new Date(Date.parse(body.birthDate))
    };
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
});
exports.default = router;
