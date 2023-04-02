export interface Igenre {
  id: number;
  name: string;
  films?: {
    cennect: {
      id: number
    }
  }
}

export interface IFilm {
  id: number;
  title: string;
  duration: number;
  tipe: string;
  synopsis: string;
  studioId: number;
  genres?: {
    connect: {
      id: number;
    }[];
  };
}