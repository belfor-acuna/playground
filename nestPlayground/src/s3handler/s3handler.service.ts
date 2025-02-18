import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class S3handlerService {
    constructor(private configService: ConfigService) { }

    private getS3Bucket() {
        const bucket = this.configService.get<string>("S3_BUCKET");
        console.log("S3_BUCKET desde ConfigService:", bucket);
        return bucket;
    }

    private getAwsAccessKeyId() {
        return this.configService.get<string>('AWS_ACCESS_KEY_ID');
    }

    private getSecretAccessKey() {
        return this.configService.get<string>('AWS_SECRET_ACCESS_KEY');
    }

    private getS3Region() {
        return this.configService.get<string>('S3_REGION');
    }

    private AWS_S3_BUCKET = this.getS3Bucket();
    private S3_REGION = this.getS3Region();

    private s3 = new AWS.S3({
        accessKeyId: this.getAwsAccessKeyId(),
        secretAccessKey: this.getSecretAccessKey(),
    });

    async uploadMusicFile(file) {
        try {

            if (!file) {
                throw new HttpException(
                    { message: 'No se ha recibido ningún archivo.', status: 400 },
                    HttpStatus.BAD_REQUEST
                );
            }

            this.checkIntegrity(file);

            const response = await this.s3_upload(
                file.buffer,
                this.AWS_S3_BUCKET,
                file.originalname,
                file.mimetype
            );
            return response;
        } catch (error) {
            throw new HttpException(
                { message: error.message || "Error desconocido", status: 500 },
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    private async s3_upload(file, bucket, name, mimetype) {
        const params = {
            Bucket: bucket,
            Key: String(name),
            Body: file,
            ContentType: mimetype,
            ContentDisposition: 'inline',
            CreateBucketConfiguration: {
                LocationConstraint: this.S3_REGION,
            },
        };

        try {
            await this.s3.upload(params).promise();
            return {
                message: "Archivo de música subido exitosamente",
                status: 201
            };
        } catch (e) {
            throw new HttpException(
                { message: e.message || "Error desconocido al cargar a S3", status: 500 },
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }



    private checkIntegrity(file) {
        const { mimetype, originalname } = file;
        const allowedTypes = ['audio/mpeg', 'audio/mp4'];

        if (!allowedTypes.includes(mimetype)) {
            throw new HttpException(
                { message: 'Tipo de archivo no permitido. Solo se permiten archivos MP3 o MP4.', status: 400 },
                HttpStatus.BAD_REQUEST
            );
        }

        if (!originalname || originalname === undefined) {
            throw new HttpException(
                { message: 'Nombre de archivo no válido.', status: 400 },
                HttpStatus.BAD_REQUEST
            );
        }
    }
}


