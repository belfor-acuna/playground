import { Controller, UploadedFile, UseInterceptors, Post, HttpCode } from '@nestjs/common';
import { S3handlerService } from './s3handler.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('s3')
export class S3handlerController {
    constructor(private readonly s3Service: S3handlerService) { }

    @Post('/upload/audio')
    @UseInterceptors(FileInterceptor('file'))
    @HttpCode(201) 
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
        try {
            const response = await this.s3Service.uploadMusicFile(file);
            return {
                message: response.message,
                status: response.status,
            };
        } catch (e) {
            return { 
                message: e.message || "Error desconocido", 
                status: 500 
            };
        }
    }
}
