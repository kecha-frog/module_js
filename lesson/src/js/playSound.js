import {Howl} from "howler";

const sound = new Howl({
	src: ["../sound/sound.mp3"]
});

export default function soundPlay() {
	sound.play();
}

