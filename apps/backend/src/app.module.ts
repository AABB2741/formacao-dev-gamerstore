import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { DbModule } from "./db/db.module";
import { OrderModule } from "./order/order.module";
import { ProductModule } from "./product/product.module";

@Module({
  imports: [ProductModule, OrderModule, DbModule],
  controllers: [AppController],
})
export class AppModule {}
