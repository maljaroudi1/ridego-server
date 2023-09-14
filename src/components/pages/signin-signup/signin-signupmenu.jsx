import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import '../../navbar/navbar.css'
import { useState, useRef } from 'react';

const Portal = (props) => {
    const Signup = props.Signup;
    const Profile = props.Profile;





    const [hide, setHide] = useState('');
    const [hide2, setHide2] = useState('');

    const buttonRef = useRef(null);
    const buttonRef2 = useRef(null);
    const menuSignInRef = useRef(null);
    const menuSignInRef2 = useRef(null);
    let items = [

        {label: 'Sign-in',
        icon: 'pi pi-fw pi-sign-in',
        url:"/auth/login"
        },
        {label: 'Sign-up',
        icon: 'pi pi-fw pi-user-edit',
        url:"/register"
        }
    ];

    const email = JSON.parse(window.localStorage.getItem('email'));
    let items2 = [
        {
            label: ` ${email}`,
            icon: 'pi pi-fw pi-user',
            url: "/dashboard"

        },
        {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-list',
            url: "/dashboard"
        },
        {
            label: 'Sign-out',
            icon: 'pi pi-fw pi-sign-out',
            command: () => {
                window.localStorage.setItem('isNotLoggedIn', 'true');
                window.localStorage.setItem('email', 'null');
                window.location.reload();
            }
        }

    ];

    const isNotLoggedIn = JSON.parse(window.localStorage.getItem('isNotLoggedIn'));





    
    return(
        <>

            <div >
                {isNotLoggedIn ?(
                    <div>
                        <Menu  popup model={items} ref={menuSignInRef}/>
                        <Button id="sign-up" label="Sign up" icon="pi pi-chevron-down "
                        className='custom-btn sign-up'
                        ref={buttonRef}
                        onClick={(event) => menuSignInRef.current.toggle(event)} />
                    </div>
                 ) : (
                            <div>
                                <Menu  popup model={items2} ref={menuSignInRef2}/>
                                <Button id="profile" label="Profile" icon="pi pi-chevron-down "
                                className='custom-btn profile'
                                onClick={(event) => menuSignInRef2.current.toggle(event)} />
                            </div>
                    )}
            </div>





        
        </>
    );

}


export default Portal;