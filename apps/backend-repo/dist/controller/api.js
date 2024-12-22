"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.updateUserData = exports.fetchUserData = void 0;
const userCollection_1 = require("../repository/userCollection");
const fetchUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userCollection_1.fetchUsers)();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch user data', error });
    }
});
exports.fetchUserData = fetchUserData;
const updateUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _a = req.body, { id } = _a, data = __rest(_a, ["id"]);
        if (!id || Object.keys(data).length === 0) {
            res.status(400).json({ message: 'Invalid request' });
            return;
        }
        yield (0, userCollection_1.updateUser)(id, data);
        res.json({ message: 'User updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to update user data', error });
    }
});
exports.updateUserData = updateUserData;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    try {
        const userId = yield (0, userCollection_1.addUser)(userData);
        res.status(201).json({ message: 'User added successfully', userId });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to add user', error });
    }
});
exports.createUser = createUser;
