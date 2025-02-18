import { Module } from '@nestjs/common';
import { S3handlerController } from './s3handler.controller';
import { S3handlerService } from './s3handler.service';

@Module({
  controllers: [S3handlerController],
  providers: [S3handlerService]
})
export class S3handlerModule {}
