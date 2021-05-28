import React from 'react';
import HomeLayout from 'layouts/HomeLayout/HomeLayout';
import HomePage from 'templates/Home/Home';

const songs = [
  {
    id: '1',
    name: 'BET ON ME',
    miniName: 'Bet on me - Suboi ',
    album: 'Album name',
    year: '2020',
    lyrics: 'Tikki tikki toc toc it’s the time to party The girls come up with the nicest outfit The guys come up with the nicest haircut And me come up with this microphone Hello everybody, My name is Suboi I’m here to tell you life is full of choices Say simple words, Do important works This is so hood, you know that we’re good Dance, dance, man we’re good Plus this beat you know it’s off the hook Let me break it down till I reach the hook Im feelin real good and this is what I wanna say I like it when the beat moving all around I like it when my head goes up and down I like it when the sound goes out from mah lips I like it when the people have fun like this ahh Holla, te presento, me llamo Suboi Come here join the joy, lets make some mo noise Mi casa es su casa, I just say blah blah If you dont understand, forget it, cho qua We’re like children having fun Play around with the water gun Dont be funk just have some fun Party here till we see the sun Yea Dj lets play that replay Music from yo heart you’re makin my day Hey This - girl - she got her style Have a lil red wine have a lil sign This is proper time lets do in the proper way I’ll be by yo side Come on dont think twice Ey, turn turn the beat beat louder If you’re ready, show, show me how you gonna sway Let me do the rap on the Grem Linh track We’re from Soul Faces with the bombing tracks Let me do the math uh how many songs? Cuz we have the whole night to party on But yea không sao we’re the party people After all week gatta rest a little You know im comming straigh from SaiGon Vietnam It’s time to have a party hey! we invite you! Have a little shake shake have a little dance Have a little spin around have a little temp Have a little shake shake have a little dance Have a little spin around have a little temp',
    image: 'https://avatar-ex-swe.nixcdn.com/song/2019/12/31/2/b/5/a/1577798006327_640.jpg',
  },
  {
    id: '2',
    name: 'BET ON ME',
    miniName: 'Bet on me - Suboi ',
    album: 'Album name',
    year: '2020',
    lyrics: 'Tikki tikki toc toc it’s the time to party The girls come up with the nicest outfit The guys come up with the nicest haircut And me come up with this microphone Hello everybody, My name is Suboi I’m here to tell you life is full of choices Say simple words, Do important works This is so hood, you know that we’re good Dance, dance, man we’re good Plus this beat you know it’s off the hook Let me break it down till I reach the hook Im feelin real good and this is what I wanna say I like it when the beat moving all around I like it when my head goes up and down I like it when the sound goes out from mah lips I like it when the people have fun like this ahh Holla, te presento, me llamo Suboi Come here join the joy, lets make some mo noise Mi casa es su casa, I just say blah blah If you dont understand, forget it, cho qua We’re like children having fun Play around with the water gun Dont be funk just have some fun Party here till we see the sun Yea Dj lets play that replay Music from yo heart you’re makin my day Hey This - girl - she got her style Have a lil red wine have a lil sign This is proper time lets do in the proper way I’ll be by yo side Come on dont think twice Ey, turn turn the beat beat louder If you’re ready, show, show me how you gonna sway Let me do the rap on the Grem Linh track We’re from Soul Faces with the bombing tracks Let me do the math uh how many songs? Cuz we have the whole night to party on But yea không sao we’re the party people After all week gatta rest a little You know im comming straigh from SaiGon Vietnam It’s time to have a party hey! we invite you! Have a little shake shake have a little dance Have a little spin around have a little temp Have a little shake shake have a little dance Have a little spin around have a little temp',
    image: 'https://avatar-ex-swe.nixcdn.com/song/2019/12/31/2/b/5/a/1577798006327_640.jpg',
  },
  {
    id: '3',
    name: 'BET ON ME',
    miniName: 'Bet on me - Suboi ',
    album: 'Album name',
    year: '2020',
    lyrics: 'Tikki tikki toc toc it’s the time to party The girls come up with the nicest outfit The guys come up with the nicest haircut And me come up with this microphone Hello everybody, My name is Suboi I’m here to tell you life is full of choices Say simple words, Do important works This is so hood, you know that we’re good Dance, dance, man we’re good Plus this beat you know it’s off the hook Let me break it down till I reach the hook Im feelin real good and this is what I wanna say I like it when the beat moving all around I like it when my head goes up and down I like it when the sound goes out from mah lips I like it when the people have fun like this ahh Holla, te presento, me llamo Suboi Come here join the joy, lets make some mo noise Mi casa es su casa, I just say blah blah If you dont understand, forget it, cho qua We’re like children having fun Play around with the water gun Dont be funk just have some fun Party here till we see the sun Yea Dj lets play that replay Music from yo heart you’re makin my day Hey This - girl - she got her style Have a lil red wine have a lil sign This is proper time lets do in the proper way I’ll be by yo side Come on dont think twice Ey, turn turn the beat beat louder If you’re ready, show, show me how you gonna sway Let me do the rap on the Grem Linh track We’re from Soul Faces with the bombing tracks Let me do the math uh how many songs? Cuz we have the whole night to party on But yea không sao we’re the party people After all week gatta rest a little You know im comming straigh from SaiGon Vietnam It’s time to have a party hey! we invite you! Have a little shake shake have a little dance Have a little spin around have a little temp Have a little shake shake have a little dance Have a little spin around have a little temp',
    image: 'https://avatar-ex-swe.nixcdn.com/song/2019/12/31/2/b/5/a/1577798006327_640.jpg',
  },
  {
    id: '4',
    name: 'BET ON ME',
    miniName: 'Bet on me - Suboi ',
    album: 'Album name',
    year: '2020',
    lyrics: 'Tikki tikki toc toc it’s the time to party The girls come up with the nicest outfit The guys come up with the nicest haircut And me come up with this microphone Hello everybody, My name is Suboi I’m here to tell you life is full of choices Say simple words, Do important works This is so hood, you know that we’re good Dance, dance, man we’re good Plus this beat you know it’s off the hook Let me break it down till I reach the hook Im feelin real good and this is what I wanna say I like it when the beat moving all around I like it when my head goes up and down I like it when the sound goes out from mah lips I like it when the people have fun like this ahh Holla, te presento, me llamo Suboi Come here join the joy, lets make some mo noise Mi casa es su casa, I just say blah blah If you dont understand, forget it, cho qua We’re like children having fun Play around with the water gun Dont be funk just have some fun Party here till we see the sun Yea Dj lets play that replay Music from yo heart you’re makin my day Hey This - girl - she got her style Have a lil red wine have a lil sign This is proper time lets do in the proper way I’ll be by yo side Come on dont think twice Ey, turn turn the beat beat louder If you’re ready, show, show me how you gonna sway Let me do the rap on the Grem Linh track We’re from Soul Faces with the bombing tracks Let me do the math uh how many songs? Cuz we have the whole night to party on But yea không sao we’re the party people After all week gatta rest a little You know im comming straigh from SaiGon Vietnam It’s time to have a party hey! we invite you! Have a little shake shake have a little dance Have a little spin around have a little temp Have a little shake shake have a little dance Have a little spin around have a little temp',
    image: 'https://avatar-ex-swe.nixcdn.com/song/2019/12/31/2/b/5/a/1577798006327_640.jpg',
  },
  {
    id: '5',
    name: 'BET ON ME',
    miniName: 'Bet on me - Suboi ',
    album: 'Album name',
    year: '2020',
    lyrics: 'Tikki tikki toc toc it’s the time to party The girls come up with the nicest outfit The guys come up with the nicest haircut And me come up with this microphone Hello everybody, My name is Suboi I’m here to tell you life is full of choices Say simple words, Do important works This is so hood, you know that we’re good Dance, dance, man we’re good Plus this beat you know it’s off the hook Let me break it down till I reach the hook Im feelin real good and this is what I wanna say I like it when the beat moving all around I like it when my head goes up and down I like it when the sound goes out from mah lips I like it when the people have fun like this ahh Holla, te presento, me llamo Suboi Come here join the joy, lets make some mo noise Mi casa es su casa, I just say blah blah If you dont understand, forget it, cho qua We’re like children having fun Play around with the water gun Dont be funk just have some fun Party here till we see the sun Yea Dj lets play that replay Music from yo heart you’re makin my day Hey This - girl - she got her style Have a lil red wine have a lil sign This is proper time lets do in the proper way I’ll be by yo side Come on dont think twice Ey, turn turn the beat beat louder If you’re ready, show, show me how you gonna sway Let me do the rap on the Grem Linh track We’re from Soul Faces with the bombing tracks Let me do the math uh how many songs? Cuz we have the whole night to party on But yea không sao we’re the party people After all week gatta rest a little You know im comming straigh from SaiGon Vietnam It’s time to have a party hey! we invite you! Have a little shake shake have a little dance Have a little spin around have a little temp Have a little shake shake have a little dance Have a little spin around have a little temp',
    image: 'https://avatar-ex-swe.nixcdn.com/song/2019/12/31/2/b/5/a/1577798006327_640.jpg',
  },
  {
    id: '6',
    name: 'BET ON ME',
    miniName: 'Bet on me - Suboi ',
    album: 'Album name',
    year: '2020',
    lyrics: 'Tikki tikki toc toc it’s the time to party The girls come up with the nicest outfit The guys come up with the nicest haircut And me come up with this microphone Hello everybody, My name is Suboi I’m here to tell you life is full of choices Say simple words, Do important works This is so hood, you know that we’re good Dance, dance, man we’re good Plus this beat you know it’s off the hook Let me break it down till I reach the hook Im feelin real good and this is what I wanna say I like it when the beat moving all around I like it when my head goes up and down I like it when the sound goes out from mah lips I like it when the people have fun like this ahh Holla, te presento, me llamo Suboi Come here join the joy, lets make some mo noise Mi casa es su casa, I just say blah blah If you dont understand, forget it, cho qua We’re like children having fun Play around with the water gun Dont be funk just have some fun Party here till we see the sun Yea Dj lets play that replay Music from yo heart you’re makin my day Hey This - girl - she got her style Have a lil red wine have a lil sign This is proper time lets do in the proper way I’ll be by yo side Come on dont think twice Ey, turn turn the beat beat louder If you’re ready, show, show me how you gonna sway Let me do the rap on the Grem Linh track We’re from Soul Faces with the bombing tracks Let me do the math uh how many songs? Cuz we have the whole night to party on But yea không sao we’re the party people After all week gatta rest a little You know im comming straigh from SaiGon Vietnam It’s time to have a party hey! we invite you! Have a little shake shake have a little dance Have a little spin around have a little temp Have a little shake shake have a little dance Have a little spin around have a little temp',
    image: 'https://avatar-ex-swe.nixcdn.com/song/2019/12/31/2/b/5/a/1577798006327_640.jpg',
  },
  {
    id: '7',
    name: 'BET ON ME',
    miniName: 'Bet on me - Suboi ',
    album: 'Album name',
    year: '2020',
    lyrics: 'Tikki tikki toc toc it’s the time to party The girls come up with the nicest outfit The guys come up with the nicest haircut And me come up with this microphone Hello everybody, My name is Suboi I’m here to tell you life is full of choices Say simple words, Do important works This is so hood, you know that we’re good Dance, dance, man we’re good Plus this beat you know it’s off the hook Let me break it down till I reach the hook Im feelin real good and this is what I wanna say I like it when the beat moving all around I like it when my head goes up and down I like it when the sound goes out from mah lips I like it when the people have fun like this ahh Holla, te presento, me llamo Suboi Come here join the joy, lets make some mo noise Mi casa es su casa, I just say blah blah If you dont understand, forget it, cho qua We’re like children having fun Play around with the water gun Dont be funk just have some fun Party here till we see the sun Yea Dj lets play that replay Music from yo heart you’re makin my day Hey This - girl - she got her style Have a lil red wine have a lil sign This is proper time lets do in the proper way I’ll be by yo side Come on dont think twice Ey, turn turn the beat beat louder If you’re ready, show, show me how you gonna sway Let me do the rap on the Grem Linh track We’re from Soul Faces with the bombing tracks Let me do the math uh how many songs? Cuz we have the whole night to party on But yea không sao we’re the party people After all week gatta rest a little You know im comming straigh from SaiGon Vietnam It’s time to have a party hey! we invite you! Have a little shake shake have a little dance Have a little spin around have a little temp Have a little shake shake have a little dance Have a little spin around have a little temp',
    image: 'https://avatar-ex-swe.nixcdn.com/song/2019/12/31/2/b/5/a/1577798006327_640.jpg',
  },
  {
    id: '8',
    name: 'BET ON ME',
    miniName: 'Bet on me - Suboi ',
    album: 'Album name',
    year: '2020',
    lyrics: 'Tikki tikki toc toc it’s the time to party The girls come up with the nicest outfit The guys come up with the nicest haircut And me come up with this microphone Hello everybody, My name is Suboi I’m here to tell you life is full of choices Say simple words, Do important works This is so hood, you know that we’re good Dance, dance, man we’re good Plus this beat you know it’s off the hook Let me break it down till I reach the hook Im feelin real good and this is what I wanna say I like it when the beat moving all around I like it when my head goes up and down I like it when the sound goes out from mah lips I like it when the people have fun like this ahh Holla, te presento, me llamo Suboi Come here join the joy, lets make some mo noise Mi casa es su casa, I just say blah blah If you dont understand, forget it, cho qua We’re like children having fun Play around with the water gun Dont be funk just have some fun Party here till we see the sun Yea Dj lets play that replay Music from yo heart you’re makin my day Hey This - girl - she got her style Have a lil red wine have a lil sign This is proper time lets do in the proper way I’ll be by yo side Come on dont think twice Ey, turn turn the beat beat louder If you’re ready, show, show me how you gonna sway Let me do the rap on the Grem Linh track We’re from Soul Faces with the bombing tracks Let me do the math uh how many songs? Cuz we have the whole night to party on But yea không sao we’re the party people After all week gatta rest a little You know im comming straigh from SaiGon Vietnam It’s time to have a party hey! we invite you! Have a little shake shake have a little dance Have a little spin around have a little temp Have a little shake shake have a little dance Have a little spin around have a little temp',
    image: 'https://avatar-ex-swe.nixcdn.com/song/2019/12/31/2/b/5/a/1577798006327_640.jpg',
  },
];

const photos = [
  {
    id: '1',
    image: 'https://vcdn-giaitri.vnecdn.net/2020/09/14/suboi-3587-1600075397.jpg',
  },
  {
    id: '2',
    image: 'https://media-cdn.laodong.vn/Storage/NewsPortal/2020/8/16/828415/Hanh-Phuc-Vien-Man-C.jpg',
  },
  {
    id: '3',
    image: 'https://avatar-ex-swe.nixcdn.com/song/2019/12/31/2/b/5/a/1577798006327_640.jpg',
  },
  {
    id: '4',
    image: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2020/11/17/ov3142-1605598851050490323938.jpg',
  },
  {
    id: '5',
    image: 'https://avatar-ex-swe.nixcdn.com/song/2019/12/31/2/b/5/a/1577798006327_640.jpg',
  },
  {
    id: '6',
    image: 'https://vcdn1-giaitri.vnecdn.net/2020/12/04/nguyen-tien-truyenHAIN2388-1-1607100019.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=ZstuYOnm4zEM4OYoUwpZUQ',
  },
  {
    id: '7',
    image: 'https://vcdn-giaitri.vnecdn.net/2021/04/11/suboi-3-8629-1618110156.jpg',
  },
  {
    id: '8',
    image: 'https://static.tuoitre.vn/tto/i/s626/2016/05/25/suboi-obama-1464164959.jpg',
  },
];

function Home() {
  return (
    <HomeLayout >
      <HomePage songs={songs} photos={photos}/>
    </HomeLayout>
  );
}

export default Home;
