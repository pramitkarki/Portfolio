import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pramitkarki.vercel.app";
  const currentDate = new Date().toISOString();
  
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
