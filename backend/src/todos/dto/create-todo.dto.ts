import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  due_at: Date;

  @ApiProperty()
  completed_at: Date;
}
