
import React, { useEffect, useState } from 'react';
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  ControlPoint as ControlPointIcon,
  Done as DoneIcon,
  MusicNote as MusicNoteIcon,
  Headphones as HeadphonesIcon,
  Person as PersonIcon,
  InsertDriveFile as InsertDriveFileIcon,
  AutoAwesomeMotion as AutoAwesomeMotionIcon,
  Radio as RadioIcon,
  Group as GroupIcon,
  PlayArrow as PlayArrowIcon,
  Reorder as ReorderIcon,
  SkipNext as SkipNextIcon,
  SkipPrevious as SkipPreviousIcon,
  Loop as LoopIcon,
  Shuffle as ShuffleIcon,
  VolumeUp as VolumeUpIcon,
  Add as AddIcon,
  CallMissedOutgoing as CallMissedOutgoingIcon,
  GridView as GridViewIcon,
  List as ListIcon,

} from '@mui/icons-material';
import VolumeSlider from './VolumeSlider';
import MusicSlider from './MusicSlider';
import PlaylistNavBar from './PlaylistNavBar';
import Tracks from './Tracks';
import Artists from './Artists';
import AlbumsTracks from './AlbumsTracks'
import MediaCards from './MediaCards';

const Body = () => {

  const handleRenderTab = (tabIndex) => () => {
      setActiveTab(tabIndex);
  };

const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section className="allMenu">

        <section className="leftBar" >

          <div class="content__left">
            <section class="navigation">
              <PlaylistNavBar
                url={'#main'}
                title={'Main'}
                id={'main'}
                tracks={[
                  {
                    url: '#',
                    title: 'Browse',
                    icon: AutoAwesomeMotionIcon
                  },
                  {
                    url: '#',
                    title: 'Activity',
                    icon: GroupIcon
                  },
                  {
                    url: '#',
                    title: 'Radio',
                    icon: RadioIcon
                  },
                ]}

              />
              <PlaylistNavBar
                url={'#yourMusic'}
                title={'YourMusic'}
                id={'yourMusic'}
                tracks={[
                  {
                    url: '#',
                    title: 'Songs',
                    icon: HeadphonesIcon
                  },
                  {
                    url: '#',
                    title: 'Songs',
                    icon: MusicNoteIcon
                  },
                  {
                    url: '#',
                    title: 'Songs',
                    icon: PersonIcon
                  },
                  {
                    url: '#',
                    title: 'Songs',
                    icon: InsertDriveFileIcon
                  },
                ]}

              />
              <PlaylistNavBar
                url={'#playlists'}
                title={'Playlist'}
                id={'playlists'}
                tracks={[
                  {
                    url: '#',
                    title: 'Doo Wop'
                  },
                  {
                    url: '#',
                    title: 'Pop Classics'
                  },
                  {
                    url: '#',
                    title: 'Love $ongs'
                  },
                  {
                    url: '#',
                    title: 'Hipster'
                  },
                  {
                    url: '#',
                    title: 'New Music Friday'
                  },
                  {
                    url: '#',
                    title: 'Techno Poppers'
                  },
                  {
                    url: '#',
                    title: 'Summer Soothers'
                  },
                  {
                    url: '#',
                    title: 'Hard Rap'
                  },
                  {
                    url: '#',
                    title: 'Pop Rap'
                  },
                  {
                    url: '#',
                    title: '5 Stars'
                  },
                  {
                    url: '#',
                    title: 'Dope Dancin'
                  },
                  {
                    url: '#',
                    title: 'Sleep'
                  }
                ]}
              />
            <section class="playlist">
              <a>
                <button>
                  <ControlPointIcon className="contrPointIcon"></ControlPointIcon>
                </button>
                New Playlist
              </a>
            </section>
            <section class="playing">
              <div class="playing__art">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/cputh.jpg" alt="Album Art" />
              </div>
              <div class="playing__song">
                <a class="playing__song__name">Some Type of Love</a>
                <a class="playing__song__artist">Charlie Puth</a>
              </div>
              <div class="playing__add">
                <button>
                  <DoneIcon className="btnDI"></DoneIcon>
                </button>
              </div>
            </section>
            </section>
          </div>
        </section>
        <section className="mainBar">

          <div class="content__middle">
            <div class="artist is-verified">

              <div class="artist__header">
                <div class="artist__listeners">
                  <div class="artist__listeners__count">
                    15,662,810
                  </div>
                  <div class="artist__listeners__label">
                    Monthly Listeners
                  </div>
                </div>

                <div class="artist__info">
                  <div class="profile__img">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g_eazy_propic.jpg" alt="G-Eazy" />
                    <div className="checkMark">
                    </div>
                    <DoneIcon className="btnCheckMark"></DoneIcon>
                  </div>

                  <div class="artist__info__meta">
                    <div class="artist__info__type">
                      Artist
                    </div>
                    <div class="artist__info__name">
                      G-Eazy
                    </div>
                    <div class="artist__info__actions">
                      <button className="button-dark">
                        <div className="text-button-start">
                          <PlayArrowIcon className="btnPAI"></PlayArrowIcon>
                          Play
                        </div>
                      </button>
                      <button className="button-light">
                        Follow
                      </button>
                      <button className="button-light more">
                        ...
                      </button>
                    </div>
                  </div>
                </div>

                <div class="artist__navigation">
                  <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class={`nav-item-lol${(activeTab === 0) ? ' active' : ''}`}>
                      <a aria-controls="artist-overview" role="tab" data-toggle="tab" onClick={handleRenderTab(0)}>
                        Overview
                      </a>
                    </li>
                    <li role="presentation" class={`nav-item-lol${(activeTab === 1) ? ' active' : ''}`}>
                      <a aria-controls="related-artists" role="tab" onClick={handleRenderTab(1)} data-toggle="tab">
                        Related Artists
                      </a>
                    </li>
                  </ul>
                  <div class="artist__navigation__friends">
                    <a href="#">
                      <img src="http://zblogged.com/wp-content/uploads/2015/11/17.jpg" alt="" />
                    </a>
                    <a href="#">
                      <img src="http://zblogged.com/wp-content/uploads/2015/11/5.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="http://cdn.devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>

              <div class="artist__content">
                <div class="tab-content">
                  <div role="tabpanel" class={`tab-pane${(activeTab === 0) ? ' active' : ''}`} id="artist-overview">
                    <div class="overview">
                      <div class="overview__artist">
                        <div class="section-title">
                          Latest Release
                          </div>
                          <div class="latest-release">
                            <div class="latest-release__art">
                              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="When It's Dark Out" />
                            </div>
                            <div class="latest-release__song">
                              <div class="latest-release__song__title">
                                Drifting (Track Commentary)
                              </div>
                              <div class="latest-release__song__date">
                                <span class="day">
                                  4
                                </span>
                                <span class="month">
                                  December
                                </span>
                                <span class="year">
                                  2015
                                </span>
                              </div>
                            </div>
                          </div>

                        <div class="section-title">
                          Popular
                        </div>
                        
                          
                       <Tracks
                       tracks={[
                         {
                          url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg',
                          trackNumber: '1',
                           icon: DoneIcon,
                           trackTitle: ' Me, Myself and I',
                           trackPlays: '147,544,165',
                        },
                        {
                          url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg',
                          trackNumber: '2',
                          icon: AddIcon,
                          trackTitle: 'I Mean It',
                          trackPlays: '74,568,782',
                       },
                       {
                        url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg',
                        trackNumber: '3',
                        icon: DoneIcon,
                        trackTitle: 'Calm Down',
                        trackPlays: '13,737,506',
                     },
                     {
                      url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg',
                      trackNumber: '4',
                      icon: AddIcon,
                      trackTitle: 'Some Kind Of Drug',
                      trackPlays: '12,234,881',
                   },
                   {
                    url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg',
                    trackNumber: '5',
                    icon: DoneIcon,
                    trackTitle: "Let's Get Lost",
                    trackPlays: '40,882,954',
                 },
                       ]}

                       />
                      

                        <div className="show-more">
                          <button class="button-light">
                            Show 5 More
                          </button>
                        </div>

                      </div>

                      <div class="overview__related">
                        <div class="section-title">
                          Related Artists
                          </div>
                       <Artists
                       artist={[
                         {
                          src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg',
                          nameArtist: 'Hoodie Allen',
                         },
                         {
                          src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud.jpg',
                          nameArtist: 'Mike Stud',
                         },
                         {
                          src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake.jpeg',
                          nameArtist: 'Drake',
                         },
                         {
                          src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole.jpg',
                          nameArtist: 'J. Cole',
                         },
                         {
                          src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/bigsean.jpg',
                          nameArtist: 'Big Sean',
                         },
                         {
                          src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/wiz.jpeg',
                          nameArtist: 'Wiz Khalifa',
                         },
                         {
                          src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/yonas.jpg',
                          nameArtist: 'Yonas',
                         },

                       ]}
                       />
                      </div>

                      <div class="overview__albums">

                        <div class="overview__albums__head">
                          <div class="section-title">
                            Albums
                          </div>
                          <span class="view-type">
                            <ListIcon className="listIcons">
                            </ListIcon >
                            <GridViewIcon className="listIcons"> 
                            </GridViewIcon>
                          </span>
                        </div>

                        <div class="album">
                          <div class="album__info">
                            <div class="album__info__art">
                              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="When It's Dark Out" />
                            </div>
                            <div class="album__info__meta">
                              <div class="album__year">
                                2015
                              </div>
                              <div class="album__name">
                                When It's Dark Out
                              </div>
                              <div class="album__actions">
                                <button class="button-light save">
                                  Save
                                </button>
                                <button class="button-light more">
                                  ...
                                </button>
                              </div>
                            </div>
                          </div>

                          <div class="album__tracks">
                            <div class="tracks">
                              <div class="tracks__heading">
                                <div class="tracks__heading__number">
                                  #
                                </div>
                                <div class="tracks__heading__title">
                                  Song
                                  </div>
                              </div>
                              
                              <AlbumsTracks
                              tracks={[
                                {
                                  number: '1',
                                  icon: DoneIcon,
                                  trackTitle: 'Intro',
                                  feature:'',
                                  trackLength: '1:11',
                                },
                                {
                                  number: '2',
                                  icon: DoneIcon,
                                  trackTitle: 'Random',
                                  feature:'',
                                  trackLength: '3:00',
                                },
                                {
                                  number: '3',
                                  icon: DoneIcon,
                                  trackTitle: 'Me, Myself and I',
                                  feature:'Bebe Rexha',
                                  trackLength: '4:11',
                                },
                                {
                                  number: '4',
                                  icon: DoneIcon,
                                  trackTitle: 'One Of Them',
                                  feature:'Big Sean',
                                  trackLength: '3:20',
                                },
                                {
                                  number: '5',
                                  icon: DoneIcon,
                                  trackTitle: 'Drifting',
                                  feature:'Chris Brown, Tory Lanez ',
                                  trackLength: '4:33',
                                },
                                {
                                  number: '6',
                                  icon: DoneIcon,
                                  trackTitle: ' Of All Things',
                                  feature:'Too $hort',
                                  trackLength: '3:34',
                                },
                                {
                                  number: '7',
                                  icon: DoneIcon,
                                  trackTitle: 'Order More',
                                  feature:'Starrah',
                                  trackLength: '3:29',
                                },
                                {
                                  number: '8',
                                  icon: DoneIcon,
                                  trackTitle: 'Calm Down',
                                  feature:'',
                                  trackLength: '2:07',
                                },
                                {
                                  number: '9',
                                  icon: AddIcon,
                                  trackTitle: "Don't Let Me Go",
                                  feature:'Grace',
                                  trackLength: '3:11',
                                },
                                {
                                  number: '10',
                                  icon: DoneIcon,
                                  trackTitle: 'You Got Me',
                                  feature:'',
                                  trackLength: '3:28',
                                },
                                {
                                  number: '11',
                                  icon: DoneIcon,
                                  trackTitle: 'What If',
                                  feature:'Gizzle',
                                  trackLength: '4:13',
                                },
                                {
                                  number: '12',
                                  icon: DoneIcon,
                                  trackTitle: ' Sad Boy',
                                  feature:'',
                                  trackLength: '3:23',
                                },
                                {
                                  number: '13',
                                  icon: DoneIcon,
                                  trackTitle: 'Some Kind Of Drug',
                                  feature:'Marc E. Bassy',
                                  trackLength: '3:42',
                                },
                                {
                                  number: '14',
                                  icon: DoneIcon,
                                  trackTitle: 'Think About You',
                                  feature:'Quin',
                                  trackLength: '2:59',
                                },
                                {
                                  number: '15',
                                  icon: DoneIcon,
                                  trackTitle: 'Everything Will Be OK',
                                  feature:'Kehlani',
                                  trackLength: '5:11',
                                },
                                {
                                  number: '16',
                                  icon: DoneIcon,
                                  trackTitle: 'For This',
                                  feature:'Iamnobodi',
                                  trackLength: '4:11',
                                },
                                {
                                  number: '17',
                                  icon: DoneIcon,
                                  trackTitle: 'Nothing to Me',
                                  feature:'Keyshia Coleб ',
                                  trackLength: '5:30',
                                },

                              ]}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div role="tabpanel" class={`tab-pane${(activeTab === 1) ? ' active' : ''}`} id="related-artists">

                    <div class="media-cards">

                      <MediaCards
                      cards={[
                        {
                          url: 'https://thumbs.dfs.ivi.ru/storage15/contents/3/4/2cc4475b5b29880cdf4c2e37223248.jpg', 
                          nameCard: 'Hoodie Allen',
                        },
                        {
                          url: 'https://thumbs.dfs.ivi.ru/storage15/contents/3/4/2cc4475b5b29880cdf4c2e37223248.jpg', 
                          nameCard: 'Mike Stud',
                        },
                        {
                          url: 'https://thumbs.dfs.ivi.ru/storage15/contents/3/4/2cc4475b5b29880cdf4c2e37223248.jpg', 
                          nameCard: 'Drake',
                        },
                        {
                          url: 'https://thumbs.dfs.ivi.ru/storage15/contents/3/4/2cc4475b5b29880cdf4c2e37223248.jpg', 
                          nameCard: 'J. Cole',
                        },
                        {
                          url: 'https://thumbs.dfs.ivi.ru/storage15/contents/3/4/2cc4475b5b29880cdf4c2e37223248.jpg', 
                          nameCard: 'Big Sean',
                        },
                        {
                          url: 'https://thumbs.dfs.ivi.ru/storage15/contents/3/4/2cc4475b5b29880cdf4c2e37223248.jpg', 
                          nameCard: 'Wiz Khalifa',
                        },
                        {
                          url: 'https://thumbs.dfs.ivi.ru/storage15/contents/3/4/2cc4475b5b29880cdf4c2e37223248.jpg', 
                          nameCard: 'Yonas',
                        },
                        {
                          url: 'https://thumbs.dfs.ivi.ru/storage15/contents/3/4/2cc4475b5b29880cdf4c2e37223248.jpg',  
                          nameCard: 'Childish Gambino',
                        },
                      ]}
                      />

                  
                    </div>

                  </div>


                </div>

              </div>

            </div>

          </div>
        </section>
        <section className="content__right">
          <div class="social">

            <div class="friends">

              <a href="#" class="friend">


                <PersonIcon className="btmnPI"></PersonIcon>
                Sam Smith

              </a>

              <a href="#" class="friend">

                <PersonIcon className="btmnPI"></PersonIcon>
                Tarah Forsyth

              </a>

              <a href="#" class="friend">


                <PersonIcon className="btmnPI"></PersonIcon>
                Ricahrd Tomkins

              </a>

              <a href="#" class="friend">


                <PersonIcon className="btmnPI"></PersonIcon>
                Tony Russo

              </a>

              <a href="#" class="friend">


                <PersonIcon className="btmnPI"></PersonIcon>
                Alyssa Marist

              </a>

              <a href="#" class="friend">


                <PersonIcon className="btmnPI"></PersonIcon>
                Ron Samson

              </a>

            </div>

            <button class="button-light">Find Friends</button>

          </div>

        </section>
      </section>
      <section className="current-track">
      <div className="current-track__block"> 

        <div class="current-track__actions">
          <SkipPreviousIcon className='skipTrackIcon'></SkipPreviousIcon>
          <PlayArrowIcon className='playTrackIcon'></PlayArrowIcon>
          <SkipNextIcon className='skipTrackIcon'></SkipNextIcon>
        </div>
        <div className='current-track__slider'>
       < div class="current-track__progress__start">0:01</div>
        <div class="current-track__progress">
            <MusicSlider /> 
        </div>
        <div class="current-track__progress__start">3:07</div>
      </div>
          <div class="controls">
            <div class="lyrics">Lyrics</div>

            <div class="control-icon">
              <ReorderIcon className="controlIcon"></ReorderIcon>
              <ShuffleIcon className="controlIcon"></ShuffleIcon>
              <LoopIcon className="controlIcon"></LoopIcon>
            </div>

            <div class="control devices">

              <p>Devices Available</p>
            </div>

            <div class="control volume">

              <div className="volume-song">
                <VolumeUpIcon className="iconVolume"></VolumeUpIcon>
                <VolumeSlider />
              </div>

            </div>

          </div>

        </div>
      </section>
    </>

  );

}

export default Body;