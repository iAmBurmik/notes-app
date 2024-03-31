import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteEntity } from './entities/note.entity';
import { NoteService } from './services/note/note.service';
import { NoteResolver } from './resolvers/note/note.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([NoteEntity])],
  providers: [NoteService, NoteResolver],
})
export class NotesModule {}
