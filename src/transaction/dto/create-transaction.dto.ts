import { IsEnum, IsNotEmpty, IsNumber, MinLength } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';
import { TransactionEnum } from 'src/types/types';

export class CreateTransactionDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsEnum(TransactionEnum)
  @MinLength(6)
  type: TransactionEnum;

  @IsNotEmpty()
  category: Category;
}
