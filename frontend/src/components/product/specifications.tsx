import type { Product } from "@/core";
import { IconTag } from "@tabler/icons-react";
import { Tag } from "../shared/tag";

export interface SpecificationsProps {
  product: Product;
}

export function Specifications({ product }: SpecificationsProps) {
  return (
    <div className="flex-1 flex flex-col gap-1">
      <div className="flex mb-3">
        <Tag
          label={product.specifications.highlightedSpec}
          icon={IconTag}
          isOutlined
        />
      </div>
      {product.specifications &&
        Object.keys(product.specifications)
          .filter((k) => k !== "highlightedSpec")
          .map((key) => (
            <div key={key} className="flex gap-1">
              <span className="p-2 w-1/3 bg-white/5 rounded">{key}</span>
              <span className="p-2 w-2/3 bg-white/5 rounded">
                {product.specifications[key]}
              </span>
            </div>
          ))}
    </div>
  );
}
