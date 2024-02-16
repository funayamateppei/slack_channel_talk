import { useEffect } from "react";
import "./App.css";

import * as ChannelService from "@channel.io/channel-web-sdk-loader";

function App() {
  useEffect(() => {
    const pluginKey = process.env.REACT_APP_CHANNEL_TALK_KEY as string;

    ChannelService.loadScript();
    ChannelService.boot({
      pluginKey,
      memberId: "test",
      language: "ja",
      profile: {
        name: "test user",
        avatarUtl:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fashionsnap.com%2Farticle%2F2023-05-30%2Fmiyoshirug-doraemon2%2F&psig=AOvVaw0rtSkI4-K_G6lEoSCf6yEU&ust=1708142400091000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDl5Lr8roQDFQAAAAAdAAAAABAH",
      },
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={"logo.svg"} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
