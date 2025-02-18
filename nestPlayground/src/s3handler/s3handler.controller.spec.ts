import { Test, TestingModule } from '@nestjs/testing';
import { S3handlerController } from './s3handler.controller';

describe('S3handlerController', () => {
  let controller: S3handlerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [S3handlerController],
    }).compile();

    controller = module.get<S3handlerController>(S3handlerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
