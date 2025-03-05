export interface Author {
    id: number;
    name: string;
    role: string;
    place: string;
}

export interface Article {
    id: number;
    author_id: number;
    title: string;
    body: string;
    image_url: string;
    created_at: string;
}
