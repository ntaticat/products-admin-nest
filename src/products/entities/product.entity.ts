import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({
    unique: true,
    index: true,
    required: true,
  })
  code: number;
  @Prop({
    minlength: 1,
    required: true,
  })
  name: string;
  @Prop({
    default: 'No description',
  })
  description: string;
  @Prop({
    default: 0,
    min: 0,
  })
  price: number;
  @Prop({
    default: 0,
    min: 0,
  })
  stock: number;
  @Prop({
    default: false,
  })
  available: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
