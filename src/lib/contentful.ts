import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export async function getServices() {
  try {
    const response = await client.getEntries({
      content_type: "service", // Updated from "servicee" to "service"
      order: ["sys.createdAt"],
    });

    if (!response.items || response.items.length === 0) {
      console.warn(
        "⚠️ Contentful returned 0 items for content_type 'service'.",
      );
      return [];
    }

    return response.items.map((item: any) => ({
      id: item.sys.id,
      category: item.fields.category || "",
      title: item.fields.title || "",
      subtitle: item.fields.subtitle || "",
      description: item.fields.description || "",
      highlights: Array.isArray(item.fields.highlights)
        ? item.fields.highlights
        : [],
      iconName: item.fields.iconName || "Activity",
      programType: item.fields.programType || "clinical",
      badge: item.fields.badge || "",
    }));
  } catch (error) {
    console.error(
      "⚠️ Contentful fetch failed. Check Content Type ID or API Keys:",
      error,
    );
    return [];
  }
}

// Exporting named alias to support both import styles across pages
export { getServices as getServicesFromContentful };
