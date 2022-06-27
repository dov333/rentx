import { Router } from "express"
import uploadConfig from "../config/upload"
import { CreateUserController } from "../modules/accounts/useCases/CreateUser/CreateUserController"
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController"
import multer from "multer"


const usersRoutes = Router()

const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

usersRoutes.post("/", createUserController.handle)

usersRoutes.patch("/avatar", uploadAvatar.single("Avatar") , updateUserAvatarController.handle)

export {usersRoutes}