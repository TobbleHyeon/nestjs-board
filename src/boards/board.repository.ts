import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';
import { Injectable } from '@nestjs/common';

// @EntityRepository(Board)
@Injectable()
export class BoardRepository extends Repository<Board> {}
