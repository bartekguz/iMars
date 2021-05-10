import React from 'react';

const Footer = () => {
        return (
            <div className="w-100 bg-white pv3 ph3 ph5-m ph6-l mid-gray absolute bottom-0">
                <small className="f6 db tc">© 2021 <b className="ttu">iMars Inc</b>., All Rights Reserved</small>
                <div className="tc mt3">
                    <a href="/language/" title="Language" className="f6 dib ph2 link mid-gray dim">Language</a>
                    <a href="/terms/" title="Terms" className="f6 dib ph2 link mid-gray dim">Terms of Use</a>
                    <a href="/privacy/" title="Privacy" className="f6 dib ph2 link mid-gray dim">Privacy</a>
                </div>
            </div>
        )
};

export default Footer;
