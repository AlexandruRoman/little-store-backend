import { IPermissionRequest } from "src/permission/interface";
import { UploadedFile, FileArray } from "express-fileupload";

interface IFiles extends FileArray {
    file: UploadedFile
}

export default interface IRequest extends IPermissionRequest {
    files: IFiles
}