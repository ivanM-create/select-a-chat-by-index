export interface Message {
  author: string;
  message: string;
  type: string;
  dt: string;
  chat_id: number;
  sender_message: string;
  comment_message: string;
  receiver_message: string;
}

export interface IdData {
  data: number[];
  error: string;
}

export interface MessageData {
  data: Message[];
  error: string;
}