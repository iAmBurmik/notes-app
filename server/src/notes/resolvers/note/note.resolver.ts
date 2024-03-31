import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NoteEntity } from 'src/notes/entities/note.entity';
import { CreateNoteInput } from 'src/notes/inputs/create-note.input';
import { UpdateNoteInput } from 'src/notes/inputs/update-note.input';
import { NoteService } from 'src/notes/services/note/note.service';

@Resolver('Note')
export class NoteResolver {
  constructor(private readonly noteService: NoteService) {}

  @Mutation(() => NoteEntity)
  async createNote(
    @Args('createNote') createNoteInput: CreateNoteInput,
  ): Promise<NoteEntity> {
    return await this.noteService.createNote(createNoteInput);
  }

  @Mutation(() => NoteEntity)
  async updateNote(
    @Args('updateNote') updateUserInput: UpdateNoteInput,
  ): Promise<NoteEntity> {
    return await this.noteService.updateNote(updateUserInput);
  }

  @Mutation(() => Number)
  async removeNote(@Args('id') id: number): Promise<number> {
    return await this.noteService.removeNote(id);
  }

  @Query(() => NoteEntity)
  async getNote(@Args('id') id: number): Promise<NoteEntity> {
    return await this.noteService.getNote(id);
  }

  @Query(() => [NoteEntity])
  async getAllNotes(): Promise<NoteEntity[]> {
    return await this.noteService.getAllNotes();
  }
}
