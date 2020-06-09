console.log('React is BACK !!!');

const { Component, render } = wp.element;
import Form from './components/form';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            waiting: true , 
            userName: '',
            userChannel: '',
        }
    }

    createVisio(name, channel) {
        event.preventDefault();
        this.state.userName = name;
        this.state.userChannel = channel;
        this.setState({
            waiting: false
        });
        console.log(this.state);
        
    }

    componentDidUpdate(){
        const domain = 'meet.jit.si';
        const options = {
            roomName: this.state.userChannel,
            height: 400,
            parentNode: document.getElementById('jitsy'),
            interfaceConfigOverwrite: {
                SHOW_WATERMARK_FOR_GUESTS: true,
                SHOW_BRAND_WATERMARK: true,
                BRAND_WATERMARK_LINK: 'https://linkweb.fr/static/logo-linkweb-d4aa9a257bc876fae1e0b811f2b2accb.png',
                INVITATION_POWERED_BY: false,
                MOBILE_APP_PROMO: false,
                DEFAULT_REMOTE_DISPLAY_NAME: this.state.userName,
                DEFAULT_LOCAL_DISPLAY_NAME: this.state.userName,
                SHOW_JITSI_WATERMARK: false,
                // JITSI_WATERMARK_LINK: 'https://linkweb.fr',
            },
        };
        if(this.state.userName != '') {
            const api = new JitsiMeetExternalAPI(domain, options);
        }
        
    
        
    }

    render(){
        return (this.state.waiting === false) ? (
            <section>
                <div id="jitsy"></div>  
                
            </section>
            ) : (
                <section>
                    <Form setInfoVisio={ (name, channel) => this.createVisio(name, channel) }/>         
                </section>
            )
    }
}


render(
    <App />,
    document.getElementById('app')
);
