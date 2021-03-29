import React from "react";

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


class MyForm extends React.Component {
    render() {
        return (
            <footer>
                <div id="social-buttons">
                        <YouTubeIcon/>
                        <TwitterIcon/>
                        <FacebookIcon/>
                        <InstagramIcon/>
                        <LinkedInIcon/>
                </div>
            </footer>
        );
    }
}
export default MyForm;