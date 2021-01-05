import React,{useState} from 'react';

const HeaderView = () => {
    const [profile,setProfile]=useState("item");
    const [logout,setlogout]=useState("ui item active");
 
    return (
        <div className="ui secondary pointing menu" style={{margin:10}}>
            <a className={profile} onClick={()=>{setProfile("ui item active");setlogout("item");}}>
                Profile
            </a>
            <div className="right menu" onClick={()=>{setProfile("item");setlogout("ui item active");}}>
                <a className={logout} >
                    Logout
                </a>
            </div>
        </div>
    );
};
export default HeaderView;