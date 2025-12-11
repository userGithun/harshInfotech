// utils/splitDescription.js
export function splitDescriptionThreeSections(html) {
  let description = html;
  let delivery = "";
  let care = "";

  // Extract Delivery Timeline
  const deliveryMatch = html.match(
    /(<strong[^>]*>Delivery Timeline:|<span[^>]*>Delivery Timeline:<\/span>)([\s\S]*?)(?=<strong|<span|$)/i
  );
  if (deliveryMatch) {
    delivery = deliveryMatch[2].trim();
    description = description.replace(deliveryMatch[0] + deliveryMatch[2], "");
  }

  // Extract Garment Care
  const careMatch = html.match(
    /(<strong[^>]*>Garment Care:|<span[^>]*>Garment Care:<\/span>)([\s\S]*?)(?=<strong|<span|$)/i
  );
  if (careMatch) {
    care = careMatch[2].trim();
    description = description.replace(careMatch[0] + careMatch[2], "");
  }

  return {
    "Product Description": description.trim(),
    "Delivery Timeline": delivery,
    "Garment Care": care,
  };
}
