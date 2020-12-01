import React, {useState} from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function LandingButton() {

    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    return (
        <div>
            <button
                style={{
                    background:'#AF2E1C',
                    width:'211px',
                    height:'50px',
                    marginRight:'20px',
                    border:'none'
                }}
                onClick={() => setShowRegisterModal(true)}
              >
              Sign Up
              </button>
              
              <button    
                style={{                     
                    background:'#F9F9F9',
                    width:'211px',
                    height:'50px', 
                    border:'none',
                    color:'#000000'
                }}
                onClick={() => setShowLoginModal(true)}
              >
                Sign In
              </button>

              <SignIn
                  show={showLoginModal}
                  onHide={() => setShowLoginModal(false)}
                  noAcc={() => {
                      setShowLoginModal(false);
                      setShowRegisterModal(true);
                  }}
              />
                  
              <SignUp
                  show={showRegisterModal}
                  onHide={() => setShowRegisterModal(false)}
                  haveAcc={() => {
                      setShowRegisterModal(false);
                      setShowLoginModal(true);
                  }}
              />
        </div>
    )
}
