let TITLE: string,
  PORT: number,
  URL: string,
  VIDEO_CHAT_GATEWAY_PORT: number,
  AUDIO_CHAT_GATEWAY_PORT: number;

switch (process.env.NODE_ENV) {
  case 'development':
    URL = '';
    PORT = 5004;
    TITLE = "Video-Calling Dev Backend API's";
    VIDEO_CHAT_GATEWAY_PORT = 8004;
    AUDIO_CHAT_GATEWAY_PORT = 9004;
    break;
  case 'staging':
    URL = '';
    PORT = 5002;
    TITLE = "Video-Calling Dev Backend API's";
    VIDEO_CHAT_GATEWAY_PORT = 8002;
    AUDIO_CHAT_GATEWAY_PORT = 9002;
    break;
  case 'testing':
    URL = '';
    PORT = 5003;
    TITLE = "Video-Calling Testing Backend API's";
    VIDEO_CHAT_GATEWAY_PORT = 8003;
    AUDIO_CHAT_GATEWAY_PORT = 9003;
    break;
  case 'local':
    URL = 'localhost';
    PORT = 5002;
    TITLE = "Video-Calling Dev Backend API's";
    VIDEO_CHAT_GATEWAY_PORT = 8002;
    AUDIO_CHAT_GATEWAY_PORT = 9002;
    break;
  default:
    URL = 'localhost';
    PORT = 5001;
    TITLE = "Video-Calling Live Backend API's";
    VIDEO_CHAT_GATEWAY_PORT = 8001;
    AUDIO_CHAT_GATEWAY_PORT = 9001;
    break;
}

export { PORT, URL, VIDEO_CHAT_GATEWAY_PORT, TITLE, AUDIO_CHAT_GATEWAY_PORT };
