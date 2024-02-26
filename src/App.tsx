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
                avatarUrl: "https://www.palcloset.jp/shared/pc_pal/event/typy/2019_doraemon/images/dora.png",
                orgName: "株式会社QUANDO",
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
