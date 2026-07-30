import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export async function getServices() {
  try {
    const response = await client.getEntries({
      content_type: "service",
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
    console.error("⚠️ Contentful fetch failed for services:", error);
    return [];
  }
}

export { getServices as getServicesFromContentful };

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  caption?: string;
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  try {
    const response = await client.getEntries({
      content_type: "galleryItem",
      order: ["-sys.createdAt"],
    });

    if (!response.items || response.items.length === 0) {
      console.warn(
        "⚠️ Contentful returned 0 items for content_type 'galleryItem'.",
      );
      return [];
    }

    return response.items.map((item: any) => {
      const mediaField = item.fields.image || item.fields.imageUrl;
      let imageUrl = "";

      if (typeof mediaField === "string") {
        imageUrl = mediaField;
      } else if (mediaField?.fields?.file?.url) {
        imageUrl = mediaField.fields.file.url;
      }

      return {
        id: item.sys.id,
        title: (item.fields.title as string) || "",
        category: (item.fields.category as string) || "all",
        imageUrl: imageUrl,
        caption: (item.fields.caption as string) || "",
      };
    });
  } catch (error) {
    console.error("⚠️ Contentful fetch failed for gallery items:", error);
    return [];
  }
}

export interface FounderBioItem {
  id: string;
  name: string;
  role: string;
  title: string;
  story: string;
  quote: string;
  order: number;
}

export async function getFounderBios(): Promise<FounderBioItem[]> {
  try {
    const response = await client.getEntries({
      content_type: "founderBio",
      order: ["fields.order"],
    });

    if (!response.items || response.items.length === 0) {
      console.warn(
        "⚠️ Contentful returned 0 items for content_type 'founderBio'.",
      );
      return [];
    }

    return response.items.map((item: any) => ({
      id: item.sys.id,
      name: item.fields.name || "",
      role: item.fields.role || "",
      title: item.fields.title || "",
      story: item.fields.story || "",
      quote: item.fields.quote || "",
      order: item.fields.order || 0,
    }));
  } catch (error) {
    console.error("⚠️ Contentful fetch failed for founder bios:", error);
    return [];
  }
}
