interface iMessages {
  [key: string]: string[];
}
export interface iAppResponse<T> {
  data?: T;
  messages: iMessages;
  isSucceed: boolean;
}

export interface Response<T> {
  isSucceed: boolean;
  messages: Record<string, any>;
  data: T;
}

export interface ImageResponse {
  fileName: string;
  contentType: string;
  base64Data: string;
}

export interface KitchenPicsRequest {
  kitchenId: number | null;
  type: string | null;
}