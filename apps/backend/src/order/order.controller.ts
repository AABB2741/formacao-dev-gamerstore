import type { Order } from "@gstore/core";
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import type { OrderPrisma } from "./order.prisma";

@Controller("orders")
export class OrderController {
  constructor(private readonly repo: OrderPrisma) {}

  @Post()
  async save(@Body() order: Order) {
    return this.repo.save(order);
  }

  @Get()
  async findAllOrders() {
    return this.repo.findAll();
  }

  @Get(":id")
  async getOrderById(@Param("id") id: string) {
    return this.repo.findById(+id);
  }

  @Delete(":id")
  async deleteOrder(@Param("id") id: string) {
    return this.repo.delete(+id);
  }
}
