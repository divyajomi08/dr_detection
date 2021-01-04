import React from 'react';
import Image from './Profileimage';
import Name from './Profilename';
import Button from './Button';

const Header = () => {
    return (
        <div>
            <div className="ui centered grid">
                <div className='row'>
                    <Image />
                </div>
                {/* <div className='row'>
                    <Name/>
                </div> */}
            </div>
            <div className="rightAlign">
                <Button />
            </div>
        </div>
    );
};
export default Header;