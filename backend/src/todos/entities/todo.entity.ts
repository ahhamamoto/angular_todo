import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('todos')
export class TodosEntity {
  @PrimaryColumn({ generated: true })
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ default: null })
  dueAt: Date;

  @Column({ default: null })
  completedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
