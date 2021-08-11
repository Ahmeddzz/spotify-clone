import React from 'react';
import "./Body.css";
import Header from "./Header.js";
import {useDataLayerValue} from "./DataLayer"
import SongRow from "./SongRow";


import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Body({spotify}) {

    const [ {discover_weekly}, dispatch] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p> Your weekly mixtape. Enjoy new music and special songs just for you. An update every Monday.</p>

                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon className="body__favo" fontSize="large"/>
                    <MoreHorizIcon className="body__moreHoriz"/>
                </div>

                {discover_weekly?.tracks.items.map(item =>
                    <SongRow track={item.track} />
                    )}

            </div>
        </div>
    )
}

export default Body;
