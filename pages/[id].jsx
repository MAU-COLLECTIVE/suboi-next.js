import React from 'react';
import Default from 'layouts/Default/Default';
import MusicDetail from 'templates/MusicDetail/MusicDetail';

const item = {
  id: '1',
  name: 'Music title name',
  album: 'Album name',
  year: '2020',
  lyrics: 'Tikki tikki toc toc it’s the time to party The girls come up with the nicest outfit The guys come up with the nicest haircut And me come up with this microphone Hello everybody, My name is Suboi I’m here to tell you life is full of choices Say simple words, Do important works This is so hood, you know that we’re good Dance, dance, man we’re good Plus this beat you know it’s off the hook Let me break it down till I reach the hook Im feelin real good and this is what I wanna say I like it when the beat moving all around I like it when my head goes up and down I like it when the sound goes out from mah lips I like it when the people have fun like this ahh Holla, te presento, me llamo Suboi Come here join the joy, lets make some mo noise Mi casa es su casa, I just say blah blah If you dont understand, forget it, cho qua We’re like children having fun Play around with the water gun Dont be funk just have some fun Party here till we see the sun Yea Dj lets play that replay Music from yo heart you’re makin my day Hey This - girl - she got her style Have a lil red wine have a lil sign This is proper time lets do in the proper way I’ll be by yo side Come on dont think twice Ey, turn turn the beat beat louder If you’re ready, show, show me how you gonna sway Let me do the rap on the Grem Linh track We’re from Soul Faces with the bombing tracks Let me do the math uh how many songs? Cuz we have the whole night to party on But yea không sao we’re the party people After all week gatta rest a little You know im comming straigh from SaiGon Vietnam It’s time to have a party hey! we invite you! Have a little shake shake have a little dance Have a little spin around have a little temp Have a little shake shake have a little dance Have a little spin around have a little temp',
  image: 'https://avatar-ex-swe.nixcdn.com/song/2019/12/31/2/b/5/a/1577798006327_640.jpg',
};

function Music() {
  return <Default>
    <MusicDetail item={item}/>
  </Default>;
}

export default Music;
