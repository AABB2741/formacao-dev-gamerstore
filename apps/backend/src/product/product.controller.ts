import type { Product } from "@gstore/core";
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import type { ProductPrisma } from "./product.prisma";

@Controller("produtos")
export class ProductController {
  constructor(private readonly repo: ProductPrisma) {}

  @Post()
  saveProduct(@Body() product: Required<Product>) {
    return this.repo.save(product);
  }

  @Get()
  getProducts() {
    return this.repo.findMany();
  }

  @Get(":id")
  getProduct(@Param("id") id: string) {
    return this.repo.findById(+id);
  }

  @Delete(":id")
  deleteProduct(@Param("id") id: string) {
    return this.repo.findById(+id);
  }
}
