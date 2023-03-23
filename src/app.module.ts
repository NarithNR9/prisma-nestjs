import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { PostsModule } from './posts/posts.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    PrismaModule,
    ArticlesModule,
    PostsModule,
    MulterModule.register({
      dest: './uploads/assets',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'uploads/'),
      renderPath: '/assets/:id',
      serveStaticOptions: {
        fallthrough: false,
        extensions: ['jpg','jpeg', 'png', 'svg'],
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 