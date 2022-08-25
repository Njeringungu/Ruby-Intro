import React from 'react';
import { FaStar } from "react-icons/fa";
import './css/Home.css';

function Home () {
    return (
        <div>
            <div className='home_header'>
                <h2>Home</h2>
                <FaStar />
            </div>

            <div className='container'>
                <div className='profile-image'>
                    <img src="https://pbs.twimg.com/profile_images/1427905585945759755/WOq64RxB_400x400.jpg" alt="profile" />
                </div>
                <div className='inputs'>
                    <div className='whats-happening'>
                        <input type="text" placeholder="What's happening" />
                        {/* <div className='who-can-reply'></div> */ }
                    </div>

                    <div className='media'>
                        <div className='media-img'>
                            <img src="https://img.icons8.com/fluency-systems-regular/344/image.png" alt="" />
                            <img src="https://img.icons8.com/ios-glyphs/2x/attach-gif.png" alt="" />
                            <img src="https://img.icons8.com/dotty/344/poll-topic.png" alt="" />
                            <img src="https://img.icons8.com/ios/2x/happy.png" alt="" />
                            <img src="https://img.icons8.com/pastel-glyph/2x/overtime.png" alt="" />
                            <img src="https://img.icons8.com/ios/344/marker--v1.png" alt="" />
                        </div>
                        <h3>Tweet</h3>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;
