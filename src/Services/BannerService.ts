import api from "./api";

// Interface para o banner
export interface Banner {
  id: number;
  Link: string;
  Titulo: string;
  imageUrl: string;
}

const BannerService = {
  async fetchBanners(): Promise<Banner[]> {
    try {
      const response = await api.get("/banners?populate=*");

      return response.data.data.map((item: any) => ({
        id: item.id,
        Link: item.Link,
        Titulo: item.Titulo,
        imageUrl: `${import.meta.env.VITE_API_URL}${item.Upload[0].url}`,
      }));
    } catch (error) {
      console.error("Erro ao buscar banners:", error);
      return [];
    }
  },
};

export default BannerService;
