//导入查询用户模块
import { getUserInfo } from "../controller/user_ctrl.js";
import { Router } from "express";

const router = new Router();

router.get('/user', getUserInfo);

export default router;
