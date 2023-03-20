import { IsString, IsOptional } from "class-validator"

export class CreatePostDto {
  status?: string
  sort?: boolean
  user_created?: Date
  date_created?: Date
  user_updated?: Date
  date_updated?: Date
  @IsString()
  title: string

  @IsString()
  thumbnail: string

  @IsString()
  @IsOptional()
  description?: string
}
