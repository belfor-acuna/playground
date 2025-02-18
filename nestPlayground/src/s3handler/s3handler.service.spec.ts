import { Test, TestingModule } from '@nestjs/testing';
import { S3handlerService } from './s3handler.service';

describe('S3handlerService', () => {
  let service: S3handlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [S3handlerService],
    }).compile();

    service = module.get<S3handlerService>(S3handlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
