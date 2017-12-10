import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import info from '../config/web-info'
import RaisedButton from 'material-ui/Button';

const Header = (props) => (
    <AppBar position="static" >
        <Toolbar>
          <div className="container">
            <div className="row">

                    <div className="col-xs-6 header-left" >
                      <Typography
                        type="title"
                        color="inherit"
                        className="header-title"
                      >
                        <img src={info.logo} alt={info.name || 'name'} className='header-logo' />
                        {info.name || 'name'}
                      </Typography>
                    </div>

                    <div className="col-xs-6 header-right">
                      <ul className="header-ul">
                        <li className="header-li">
                          <RaisedButton color="primary" raised={true} > Log In </RaisedButton>
                        </li>
                      </ul>
                    </div>

             </div>
          </div>
        </Toolbar>
    </AppBar>
)

export default Header
