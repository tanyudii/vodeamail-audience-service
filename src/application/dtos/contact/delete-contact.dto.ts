import { IsBoolean, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class DeleteContactDto {
  @IsNotEmpty()
  @IsUUID('4')
  organization_id: string;

  @IsNotEmpty()
  @IsUUID('4')
  id: string;

  @IsOptional()
  @IsBoolean()
  is_hard?: boolean;

  @IsOptional()
  @IsUUID('4')
  actor?: string;
}
