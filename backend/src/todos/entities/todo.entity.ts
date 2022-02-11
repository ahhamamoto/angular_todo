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
  due_at: Date;

  @Column({ default: null })
  completed_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
