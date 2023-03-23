import { PrismaService } from './../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  create(createPostDto: CreatePostDto) {
    return this.prismaService.post.create({ data: createPostDto });
  }

  async findAll() {
    const datas = await this.prismaService.post.findMany();
    return { data: datas };
  }

  async findOne(id: number) {
    const post = await this.prismaService.post.findUnique({ where: { id } });

    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return { data: post };
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const data = await this.prismaService.post.update({
      where: { id },
      data: updatePostDto,
    });
    return { data: data };
  }

  remove(id: number) {
    return this.prismaService.post.delete({ where: { id } });
  }
}
