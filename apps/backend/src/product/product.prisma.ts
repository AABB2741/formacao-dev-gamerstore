import { productSchema, type Product } from "@gstore/core";
import { Injectable } from "@nestjs/common";

import type { PrismaProvider } from "src/db/prisma.provider";

@Injectable()
export class ProductPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async save(product: Required<Product>) {
    await this.prisma.product.upsert({
      where: {
        id: product.id,
      },
      update: product,
      create: {
        ...product,
      },
    });
  }

  async findMany() {
    const products = await this.prisma.product.findMany();

    return products;
  }

  async findById(id: number): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    return productSchema.parse(product);
  }

  async delete(id: number) {
    await this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
