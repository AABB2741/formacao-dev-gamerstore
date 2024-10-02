interface FormatProps {
  value: number;
  locale?: Intl.LocalesArgument;
  currency?: string;
}

export class Currency {
  static format({ value, locale = "pt-BR", currency = "BRL" }: FormatProps) {
    return (value ?? 0).toLocaleString(locale, {
      style: "currency",
      currency,
    });
  }
}
