export default function Price({ price, locale, currency }) {
  const formatPrice = () => {
    const validCurrency = currency || 'USD'; // Fallback to 'USD' if currency is invalid
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: validCurrency,
    }).format(price);
  };

  return <span>{formatPrice()}</span>;
}

Price.defaultProps = {
  locale: 'en-US',
  currency: 'USD',
};
