"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/login", (req, res) => {
    return res.status(200).json({
        msg: "Todo OK!",
    });
});
exports.default = router;
//# sourceMappingURL=auth.js.map