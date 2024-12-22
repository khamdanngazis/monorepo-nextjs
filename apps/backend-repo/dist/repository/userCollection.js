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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.updateUser = exports.fetchUsers = void 0;
const firebaseConfig_1 = require("../config/firebaseConfig");
const USERS_COLLECTION = 'USERS';
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const snapshot = yield firebaseConfig_1.db.collection(USERS_COLLECTION).get();
    return snapshot.docs.map(doc => (Object.assign({ id: doc.id }, doc.data())));
});
exports.fetchUsers = fetchUsers;
const updateUser = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield firebaseConfig_1.db.collection(USERS_COLLECTION).doc(id).update(data);
});
exports.updateUser = updateUser;
const addUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRef = yield firebaseConfig_1.db.collection(USERS_COLLECTION).add(userData);
        return userRef.id; // Return the document ID of the newly created user
    }
    catch (error) {
        console.error('Error adding user:', error);
        throw new Error('Error adding user');
    }
});
exports.addUser = addUser;
