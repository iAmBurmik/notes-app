import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteEntity } from 'src/notes/entities/note.entity';
import { CreateNoteInput } from 'src/notes/inputs/create-note.input';
import { UpdateNoteInput } from 'src/notes/inputs/update-note.input';
import { Repository } from 'typeorm';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(NoteEntity)
    private readonly noteRepository: Repository<NoteEntity>,
  ) {}

  async createNote(createNoteInput: CreateNoteInput): Promise<NoteEntity> {
    if (!createNoteInput.name.trim() || !createNoteInput.text.trim()) {
      throw new BadRequestException('Email and password must not be empty');
    }
    return await this.noteRepository.save({ ...createNoteInput });
  }

  async getNote(id: number): Promise<NoteEntity> {
    return await this.noteRepository.findOne({ where: { id } });
  }

  async getAllNotes(): Promise<NoteEntity[]> {
    return await this.noteRepository.find();
  }

  async removeNote(id: number): Promise<number> {
    await this.noteRepository.delete({ id });
    return id;
  }

  async updateNote(updateNoteInput: UpdateNoteInput): Promise<NoteEntity> {
    await this.noteRepository.update(
      { id: updateNoteInput.id },
      { ...updateNoteInput },
    );
    return await this.getNote(updateNoteInput.id);
  }
}
