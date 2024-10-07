import { Module } from "@nestjs/common";
import { DbModule } from "src/db/db.module";
import { ProductController } from "./product.controller";
import { ProductPrisma } from './product.prisma';

@Module({
  imports: [DbModule],
  controllers: [ProductController],
  providers: [ProductPrisma],
})
export class ProductModule {}
