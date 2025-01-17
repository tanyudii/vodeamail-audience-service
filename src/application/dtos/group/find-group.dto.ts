import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { ParseIntPipe } from '@nestjs/common';
import { Type } from 'class-transformer';

export class FindGroupDto {
  @IsNotEmpty()
  @IsUUID('4')
  organization_id: string;

  @IsOptional()
  @IsUUID('4')
  id?: string;

  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  ids?: string[];

  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  contact_ids?: string[];

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  per_page?: number;

  @IsOptional()
  @IsString()
  order_by?: string;

  @IsOptional()
  @IsString()
  sorted_by?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  relations?: string[];
}
