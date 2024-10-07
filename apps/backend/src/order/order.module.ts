import { Module } from "@nestjs/common";
import { DbModule } from "src/db/db.module";
import { OrderController } from "./order.controller";
import { OrderPrisma } from "./order.prisma";

@Module({
  imports: [DbModule],
  controllers: [OrderController],
  providers: [OrderPrisma],
})
export class OrderModule {}
