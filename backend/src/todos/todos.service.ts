import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

import { Repository, Connection } from 'typeorm';
import { TodosEntity } from './entities/todo.entity';

@Injectable()
export class TodosService {
  private _todosRepository: Repository<TodosEntity>;

  constructor(private _connection: Connection) {
    this._todosRepository = this._connection.getRepository(TodosEntity);
  }

  async create(createTodoDto: CreateTodoDto) {
    const newTodo = this._todosRepository.create();

    newTodo.title = createTodoDto.title;
    newTodo.content = createTodoDto.content;
    newTodo.due_at = createTodoDto.due_at;
    newTodo.completed_at = createTodoDto.completed_at;

    // == saves the todo to db ==
    await this._todosRepository.save(newTodo);
    return newTodo;
  }

  async findAll() {
    return await this._todosRepository.find();
  }

  async findOne(id: number) {
    return await this._todosRepository.findOne(id);
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    // == if not throws an error ==
    const todo = await this._todosRepository.findOneOrFail(id);

    todo.content = updateTodoDto.content;
    todo.title = updateTodoDto.title;
    todo.due_at = updateTodoDto.due_at;
    todo.completed_at = updateTodoDto.completed_at;

    await this._todosRepository.save(todo);
    return todo;
  }

  async remove(id: number) {
    await this._todosRepository.delete(id);
  }
}
