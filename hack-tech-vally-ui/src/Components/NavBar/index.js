import React from 'react';
import Paper from 'material-ui/Paper';
import Plus from 'material-ui/svg-icons/content/add';
import Person from 'material-ui/svg-icons/social/person';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Social from 'material-ui/svg-icons/social/poll';
import Graph from 'material-ui/svg-icons/editor/format-list-bulleted';
import IconButton from 'material-ui/IconButton';
import windowSize from 'react-window-size';
import style from './style.js';
import GlobalStyle from '../../style.js';

const NavBar = (props) => {

    console.log(props.popOverToggled);
    let paperWidth = props.windowWidth <= 768 ? props.windowWidth - 40 : 385;
    const { fontColor, busColor, iconColor, themeColor } = GlobalStyle;

    const toggleTable = () => {
      if(props.tableToggled) {
        props.tableHandler(false);
      }
      else {
        props.tableHandler(true);
        props.popOverHandler(false);
      }
    }

    const togglePopOver = () => {
      if(props.popOverToggled) {
        console.log('toggled p off');
        props.popOverHandler(false);
      }
      else {
        props.tableHandler(false);
        props.popOverHandler(true);
      }
    }

    return (
      <Paper
        className="paper"
        style={{...style.paperStyle, width: paperWidth, right: props.windowWidth <= 767 ? 0 : 10}}    >
        <div style={style.dataSetStyle}>
          <div style={{...style.dataSetStyle, display: 'none'}}>
            <IconButton>
              <Plus color={"black"} style={{height: 50, width: 50, paddingTop: 5}} />
            </IconButton>
          </div>
          <div style={{...style.dataSetStyle, display: 'none'}}>
            <IconButton>
              <Person color={"black"} style={{height: 50, width: 50, paddingTop: 5}} />
            </IconButton>
          </div>
          <div style={style.dataSetStyle}>
            <IconButton onClick={() => toggleTable()}>
              <Graph color={"black"} style={{height: 50, width: 50, paddingTop: 5}} />
            </IconButton>
          </div>
          <div style={style.dataSetStyle}>
            <IconButton onClick={() => togglePopOver()} disabled={props.vehicleId === '' ? true : false}>
              <Social color={"black"} style={{height: 50, width: 50, paddingTop: 5}} />
            </IconButton>
          </div>
          <div style={style.dataSetStyle}>
            <IconButton onClick={() => props.toggleHandler()}>
              <Menu color={"black"} style={{height: 50, width: 50, paddingTop: 5}} />
            </IconButton>
          </div>
        </div>
      </Paper>
    );
}

NavBar.propTypes = {

}

export default windowSize(NavBar);
