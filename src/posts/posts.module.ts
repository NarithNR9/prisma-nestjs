import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [PrismaModule]
})
export class PostsModule {}
